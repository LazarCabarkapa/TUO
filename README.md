# TUO Admin Server

## Setup
1. `cd server`
2. `npm install`
3. Copy `.env.example` to `.env` and set values.
4. `npm start`

## Generate password hash
```bash
node -e "const bcrypt=require('bcryptjs'); console.log(bcrypt.hashSync('your-password', 10));"
```

## Notes
- The server serves `TUO.html` and `/uploads` from the project root.
- Fleet data is stored in `server/data/fleet.json`.
- Gallery data is stored in `server/data/gallery.json`.
- Reset uses defaults from `server/data/fleet.defaults.json` and `server/data/gallery.defaults.json`.
