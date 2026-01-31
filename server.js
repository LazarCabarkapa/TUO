require("dotenv").config();

const express = require("express");
const session = require("express-session");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const helmet = require("helmet");
const multer = require("multer");
const bcrypt = require("bcryptjs");

const app = express();

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.join(__dirname, "..");
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "fleet.json");
const DEFAULT_FILE = path.join(DATA_DIR, "fleet.defaults.json");
const GALLERY_FILE = path.join(DATA_DIR, "gallery.json");
const GALLERY_DEFAULT_FILE = path.join(DATA_DIR, "gallery.defaults.json");
const UPLOAD_DIR = path.join(__dirname, "uploads");

const isProd = process.env.NODE_ENV === "production";
const sessionSecret = process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex");

if (!process.env.SESSION_SECRET) {
  console.warn("[TUO] SESSION_SECRET is not set. Sessions will reset on restart.");
}

function readJson(filePath, fallback) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    return fallback;
  }
}

const defaultFleet = readJson(DEFAULT_FILE, {});
const defaultGallery = readJson(GALLERY_DEFAULT_FILE, {});

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultFleet, null, 2));
  }
  if (!fs.existsSync(GALLERY_FILE)) {
    fs.writeFileSync(GALLERY_FILE, JSON.stringify(defaultGallery, null, 2));
  }
}

function readFleet() {
  return readJson(DATA_FILE, defaultFleet);
}

function writeFleet(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function readGallery() {
  return readJson(GALLERY_FILE, defaultGallery);
}

function writeGallery(data) {
  fs.writeFileSync(GALLERY_FILE, JSON.stringify(data, null, 2));
}

function getLang(req) {
  const lang = typeof req.query.lang === "string" ? req.query.lang : "me";
  return lang.trim() || "me";
}

function normalizeVehicle(vehicle, index) {
  const safeString = (value) => String(value ?? "").trim();
  const id = safeString(vehicle?.id) || `custom-${Date.now()}-${index}`;
  return {
    id,
    tag: safeString(vehicle?.tag),
    title: safeString(vehicle?.title),
    text: safeString(vehicle?.text),
    price: safeString(vehicle?.price),
    image: safeString(vehicle?.image),
    alt: safeString(vehicle?.alt) || safeString(vehicle?.title) || "Vozilo",
    fuel: safeString(vehicle?.fuel),
    transmission: safeString(vehicle?.transmission),
    consumption: safeString(vehicle?.consumption),
    passengers: safeString(vehicle?.passengers)
  };
}

function normalizeGalleryItem(item, index) {
  const safeString = (value) => String(value ?? "").trim();
  const id = safeString(item?.id) || `gallery-${Date.now()}-${index}`;
  return {
    id,
    title: safeString(item?.title),
    before: safeString(item?.before),
    after: safeString(item?.after)
  };
}

function verifyPassword(password) {
  const plain = process.env.ADMIN_PASSWORD;
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (hash) {
    return bcrypt.compareSync(password, hash);
  }
  if (plain) {
    return password === plain;
  }
  return false;
}

function requireAuth(req, res, next) {
  if (req.session?.admin) return next();
  return res.status(401).json({ error: "Unauthorized" });
}

ensureDataFile();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "2mb" }));
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: "lax",
    secure: isProd
  }
}));

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const name = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${ext}`;
    cb(null, name);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) return cb(null, true);
    cb(new Error("Only images are allowed"));
  }
});

app.use("/uploads", express.static(UPLOAD_DIR));
app.use(express.static(ROOT_DIR));

app.get("/", (_req, res) => {
  res.sendFile(path.join(ROOT_DIR, "TUO.html"));
});

app.post("/api/auth/login", (req, res) => {
  const password = typeof req.body?.password === "string" ? req.body.password : "";
  if (!password) return res.status(400).json({ error: "Missing password" });
  if (!verifyPassword(password)) return res.status(401).json({ error: "Invalid password" });
  req.session.admin = true;
  res.json({ ok: true });
});

app.get("/api/auth/me", (req, res) => {
  res.json({ authed: req.session?.admin === true });
});

app.post("/api/auth/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

app.get("/api/fleet", (req, res) => {
  const lang = getLang(req);
  const data = readFleet();
  const list = Array.isArray(data?.[lang]) ? data[lang] : (data?.me || []);
  res.json(list);
});

app.put("/api/fleet", requireAuth, (req, res) => {
  const lang = getLang(req);
  const payload = Array.isArray(req.body) ? req.body : [];
  const normalized = payload.map(normalizeVehicle);
  const data = readFleet();
  data[lang] = normalized;
  writeFleet(data);
  res.json(normalized);
});

app.post("/api/fleet/reset", requireAuth, (req, res) => {
  const lang = getLang(req);
  const data = readFleet();
  const fallback = Array.isArray(defaultFleet?.[lang]) ? defaultFleet[lang] : (defaultFleet?.me || []);
  data[lang] = fallback;
  writeFleet(data);
  res.json(fallback);
});

app.get("/api/gallery", (req, res) => {
  const lang = getLang(req);
  const data = readGallery();
  const list = Array.isArray(data?.[lang]) ? data[lang] : (data?.me || []);
  res.json(list);
});

app.put("/api/gallery", requireAuth, (req, res) => {
  const lang = getLang(req);
  const payload = Array.isArray(req.body) ? req.body : [];
  const normalized = payload.map(normalizeGalleryItem);
  const data = readGallery();
  data[lang] = normalized;
  writeGallery(data);
  res.json(normalized);
});

app.post("/api/gallery/reset", requireAuth, (req, res) => {
  const lang = getLang(req);
  const data = readGallery();
  const fallback = Array.isArray(defaultGallery?.[lang]) ? defaultGallery[lang] : (defaultGallery?.me || []);
  data[lang] = fallback;
  writeGallery(data);
  res.json(fallback);
});

app.post("/api/upload", requireAuth, upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file" });
  res.json({ url: `/uploads/${req.file.filename}` });
});

app.use((err, _req, res, _next) => {
  if (!err) return res.status(500).json({ error: "Server error" });
  res.status(400).json({ error: err.message || "Bad request" });
});

app.listen(PORT, () => {
  console.log(`[TUO] Admin server running on http://localhost:${PORT}`);
});
