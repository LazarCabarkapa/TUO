// Google Reviews Widget - Ucitavanje Google Business recenzija
        (function() {
            // Google Places Widget za TUO Rent a car
            const placeId = '0xe109918228f796af'; // Place ID za TUO
            const placeName = 'Rent car TUO';
            
            // Kreiramo Google Reviews badge
            function loadGoogleReviews() {
                const badgeContainer = document.getElementById('google-reviews-badge');
                
                // Kreiramo prilagodjeni badge sa informacijama
                const badge = document.createElement('div');
                badge.style.cssText = `
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    padding: 20px;
                    text-align: center;
                `;
                
                badge.innerHTML = `
                    <div style="font-size: 2rem; color: #ff8c00;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <div style="color: #ffffff; font-weight: 700; font-size: 1.1rem;">5.0 Ocjena</div>
                    <div style="color: #d0d0d0; font-size: 0.9rem;">Na osnovu Google recenzija</div>
                    <div style="margin-top: 15px; width: 100%; max-width: 300px;">
                        <a href="https://www.google.com/search?q=tuo+rent+a+car+limarija+donji+kokoti" target="_blank" 
                           style="display: inline-block; padding: 10px 20px; background: #ff8c00; color: #000000; text-decoration: none; border-radius: 8px; font-weight: 700; transition: all 0.3s;">
                            Procitaj Google recenzije
                        </a>
                    </div>
                `;
                
                badgeContainer.appendChild(badge);
            }
            
            // Ucitaj badge kada se stranica ucita
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', loadGoogleReviews);
            } else {
                loadGoogleReviews();
            }
        })();

const translations = {
            me: {
                lang: "Jezik",
                logo_tag: "rent a car / limarija",
                nav_services: "Usluge",
                nav_fleet: "Flota",
                nav_gallery: "Galerija",
                nav_reviews: "Recenzije",
                nav_service: "Limarija",
                nav_contact: "Kontakt",
                hero_eyebrow: "Pouzdano, brzo, lokalno",
                hero_title: "TUO - rent a car i limarija na jednom mestu.",
                hero_text: "Porodicna firma sa fokusom na cista vozila, fer cene i limarijske radove uz jasnu ponudu prije rada. Rezervisite auto ili zakazite limariju u par koraka.",
                hero_cta_primary: "Rezervisi vozilo",
                hero_cta_secondary: "Zakazi limariju",
                hero_card_title: "Brza procjena limarije",
                hero_card_text: "Posaljite kratak opis ostecenja i dobijate odgovor u roku od 30 minuta.",
                hero_stat_1: "vozila spremno",
                hero_stat_2: "dostupno",
                hero_stat_3: "godina iskustva",
                services_eyebrow: "Usluge",
                services_title: "Rent a car + limarija",
                services_text: "Jedan tim za sve: iznajmljivanje vozila i limarijski radovi uz jasnu procjenu.",
                services_card1_tag: "Rent a car",
                services_card1_title: "Vozila za svaki plan",
                services_card1_text: "Od malih gradskih auta do vecih modela za porodicu ili posao.",
                services_card2_tag: "Rent a car",
                services_card2_title: "Dostava na adresu",
                services_card2_text: "Preuzimanje i vracanje vozila na dogovorenoj lokaciji.",
                services_card3_tag: "Limarija",
                services_card3_title: "Popravka i poravnanje",
                services_card3_text: "Uklanjanje ostecenja, zamjena elemenata i priprema za lak.",
                services_card4_tag: "Limarija",
                services_card4_title: "Precizna boja i sjaj",
                services_card4_text: "Korekcija boje, lakiranje po standardu i zastita.",
                fleet_eyebrow: "Flota",
                fleet_title: "Vozila koja ljudi najvise traze",
                fleet_text: "Biramo pouzdane modele, redovno servisirane i spremne za bezbednu voznju.",
                fleet_tag_city: "City",
                fleet_city_title: "Hatchback",
                fleet_city_text: "Savrsen za gradske voznje i manji prtljaznik",
                spec_fuel: "Gorivo",
                spec_value_petrol: "Benzin",
                spec_transmission: "Mjenjac",
                spec_value_manual: "Manuelni",
                spec_consumption: "Potrosnja",
                spec_passengers: "Putnika",
                price_city: "od 29 EUR/dan",
                btn_reserve: "Rezervisi",
                fleet_tag_family: "Family",
                fleet_family_title: "Karavan",
                fleet_family_text: "Veliki gepek i udobna voznja za sve clanove porodice",
                spec_value_diesel: "Dizel",
                spec_value_auto: "Automatik",
                price_family: "od 39 EUR/dan",
                fleet_tag_business: "Business",
                fleet_business_title: "Sedan",
                fleet_business_text: "Elegantan i luksuzno uredjen za poslovne sastanke",
                price_business: "od 45 EUR/dan",
                fleet_tag_team: "Team",
                fleet_team_title: "Kombi",
                fleet_team_text: "Idealan za grupe i duge putove bez stresa",
                price_team: "od 65 EUR/dan",
                gallery_eyebrow: "Galerija",
                gallery_title: "Radovi i detalji iz radionice",
                gallery_text: "Primjeri prije i posle, lakiranje i precizna zavrsna obrada.",
                gallery_before: "Prije",
                gallery_after: "Posle",
                gallery_toggle_show: "Prikazi sve",
                gallery_toggle_hide: "Sakrij",
                gallery_item_1: "Popravka branika",
                gallery_item_2: "Lakiranje vrata",
                gallery_item_3: "Poliranje i zastita",
                gallery_item_4: "Ravnanje krila",
                gallery_item_5: "Zamjena panela",
                service_eyebrow: "Limarija",
                service_title: "Limarija i lakiranje bez stresa",
                service_text: "Vlasnik vodi svaki posao licno, a prije bilo kakve intervencije dobijate jasnu ponudu.",
                service_list_1: "Procjena stete i dogovor u istom danu",
                service_list_2: "Ravnanje, varenje i zamjena elemenata",
                service_list_3: "Lakiranje uz precizno poklapanje boje",
                service_cta_title: "Treba vam limarija?",
                service_cta_text: "Pozovite ili posaljite poruku, dogovaramo termin i rok.",
                service_cta_btn: "Zakazi limariju",
                why_eyebrow: "Zasto TUO",
                why_title: "Porodicna firma sa lokalnim poverenjem",
                why_text: "Radimo otvoreno, drzimo se dogovora i mislimo o dugorocnoj saradnji.",
                why_card1_title: "Transparentne cene",
                why_card1_text: "Nema skrivenih troskova - sve dogovoreno unapred.",
                why_card2_title: "Zamensko vozilo",
                why_card2_text: "U slucaju limarije obezbedjujemo vozilo po dogovoru.",
                why_card3_title: "Kvalitet limarije",
                why_card3_text: "Precizan rad, dobar lak i kontrola zavrsne obrade.",
                reviews_eyebrow: "Recenzije",
                reviews_title: "Sta kazu nasi klijenti",
                reviews_text: "Mnogi zadovoljni klijenti koji nam vjeruju za rent a car i limariju.",
                reviews_rating_based: "Na osnovu Google recenzija",
                reviews_btn: "Pogledaj sve recenzije na Google-u",
                contact_eyebrow: "Kontakt",
                contact_title: "Tu smo kad god vam zatreba",
                contact_text: "Posaljite upit za rent a car ili limariju. Odgovaramo brzo.",
                contact_phone: "Telefon",
                contact_email: "Email",
                contact_address: "Adresa",
                contact_reserve_title: "REZERVISITE",
                contact_reserve_sub: "Pozovite ili posaljite poruku",
                contact_main_label: "Glavni broj",
                contact_copy: "Kopiraj",
                contact_call_service: "Pozovi servis",
                contact_form_title: "",
                contact_form_text: "",
                contact_name_label: "Ime i prezime",
                contact_name_ph: "Vase ime",
                contact_phone_label: "Telefon",
                contact_phone_ph: "Broj telefona",
                contact_message_label: "Poruka",
                contact_message_ph: "Rent ili limarija?",
                contact_submit: "Posalji upit",
                location_eyebrow: "Lokacija",
                location_title: "Pronadji nas na mapi",
                location_text: "Posetite nas ili pozovite - tu smo za vas 24/7.",
                footer_follow: "Zapratite nas",
                footer: "TUO © 2026. Sva prava zadrzana."
            },
            en: {
                lang: "Language",
                logo_tag: "rent a car / bodywork",
                nav_services: "Services",
                nav_fleet: "Fleet",
                nav_gallery: "Gallery",
                nav_reviews: "Reviews",
                nav_service: "Bodywork",
                nav_contact: "Contact",
                hero_eyebrow: "Reliable, fast, local",
                hero_title: "TUO - rent a car and bodywork in one place.",
                hero_text: "Family business focused on clean vehicles, fair prices and bodywork with a clear quote before any work. Book a car or schedule bodywork in a few steps.",
                hero_cta_primary: "Reserve a car",
                hero_cta_secondary: "Book bodywork",
                hero_card_title: "Quick bodywork estimate",
                hero_card_text: "Send a short description of the damage and get a reply within 30 minutes.",
                hero_stat_1: "vehicles ready",
                hero_stat_2: "available",
                hero_stat_3: "years of experience",
                services_eyebrow: "Services",
                services_title: "Rent a car + bodywork",
                services_text: "One team for everything: car rental and bodywork with a clear estimate.",
                services_card1_tag: "Rent a car",
                services_card1_title: "Vehicles for every plan",
                services_card1_text: "From small city cars to larger models for family or work.",
                services_card2_tag: "Rent a car",
                services_card2_title: "Delivery to address",
                services_card2_text: "Pickup and return at the agreed location.",
                services_card3_tag: "Bodywork",
                services_card3_title: "Repair and alignment",
                services_card3_text: "Dent removal, panel replacement and prep for paint.",
                services_card4_tag: "Bodywork",
                services_card4_title: "Precise color match",
                services_card4_text: "Color correction, paint by standard and protection.",
                fleet_eyebrow: "Fleet",
                fleet_title: "Vehicles most people request",
                fleet_text: "We choose reliable models, regularly serviced and ready for safe driving.",
                fleet_tag_city: "City",
                fleet_city_title: "Hatchback",
                fleet_city_text: "Perfect for city rides and a smaller trunk",
                spec_fuel: "Fuel",
                spec_value_petrol: "Petrol",
                spec_transmission: "Transmission",
                spec_value_manual: "Manual",
                spec_consumption: "Consumption",
                spec_passengers: "Passengers",
                price_city: "from 29 EUR/day",
                btn_reserve: "Reserve",
                fleet_tag_family: "Family",
                fleet_family_title: "Wagon",
                fleet_family_text: "Large trunk and comfortable ride for the whole family",
                spec_value_diesel: "Diesel",
                spec_value_auto: "Automatic",
                price_family: "from 39 EUR/day",
                fleet_tag_business: "Business",
                fleet_business_title: "Sedan",
                fleet_business_text: "Elegant and refined for business meetings",
                price_business: "from 45 EUR/day",
                fleet_tag_team: "Team",
                fleet_team_title: "Van",
                fleet_team_text: "Ideal for groups and long trips without stress",
                price_team: "from 65 EUR/day",
                gallery_eyebrow: "Gallery",
                gallery_title: "Bodywork highlights",
                gallery_text: "Before and after details, paintwork and finishing.",
                gallery_before: "Before",
                gallery_after: "After",
                gallery_toggle_show: "Show all",
                gallery_toggle_hide: "Hide",
                gallery_item_1: "Bumper repair",
                gallery_item_2: "Door repaint",
                gallery_item_3: "Polish and protection",
                gallery_item_4: "Fender alignment",
                gallery_item_5: "Panel replacement",
                service_eyebrow: "Bodywork",
                service_title: "Bodywork and paint without stress",
                service_text: "Owner oversees every job, and you get a clear quote before any work.",
                service_list_1: "Damage estimate and agreement the same day",
                service_list_2: "Straightening, welding and panel replacement",
                service_list_3: "Paint with precise color matching",
                service_cta_title: "Need bodywork?",
                service_cta_text: "Call or message us, we agree on the slot and timeline.",
                service_cta_btn: "Book bodywork",
                why_eyebrow: "Why TUO",
                why_title: "Family business with local trust",
                why_text: "We work openly, keep our word and think long-term.",
                why_card1_title: "Transparent pricing",
                why_card1_text: "No hidden costs - everything agreed in advance.",
                why_card2_title: "Replacement car",
                why_card2_text: "If needed during bodywork, we provide a car by agreement.",
                why_card3_title: "Bodywork quality",
                why_card3_text: "Precise work, good paint and final quality control.",
                reviews_eyebrow: "Reviews",
                reviews_title: "What our clients say",
                reviews_text: "Many satisfied clients who trust us for rent a car and bodywork.",
                reviews_rating_based: "Based on Google reviews",
                reviews_btn: "See all reviews on Google",
                contact_eyebrow: "Contact",
                contact_title: "We are here when you need us",
                contact_text: "Send a request for rent a car or bodywork. We reply fast.",
                contact_phone: "Phone",
                contact_email: "Email",
                contact_address: "Address",
                contact_reserve_title: "RESERVE",
                contact_reserve_sub: "Call or message us",
                contact_main_label: "Main number",
                contact_copy: "Copy",
                contact_call_service: "Call service",
                contact_form_title: "",
                contact_form_text: "",
                contact_name_label: "Full name",
                contact_name_ph: "Your name",
                contact_phone_label: "Phone",
                contact_phone_ph: "Phone number",
                contact_message_label: "Message",
                contact_message_ph: "Rental or bodywork?",
                contact_submit: "Send request",
                location_eyebrow: "Location",
                location_title: "Find us on the map",
                location_text: "Visit us or call - we are here for you 24/7.",
                footer_follow: "Follow us",
                footer: "TUO © 2026. All rights reserved."
            },
            de: {
                lang: "Sprache",
                logo_tag: "Autovermietung / Karosserie",
                nav_services: "Leistungen",
                nav_fleet: "Flotte",
                nav_gallery: "Galerie",
                nav_reviews: "Bewertungen",
                nav_service: "Karosserie",
                nav_contact: "Kontakt",
                hero_eyebrow: "Zuverlaessig, schnell, lokal",
                hero_title: "TUO - Autovermietung und Karosserie an einem Ort.",
                hero_text: "Familienbetrieb mit sauberen Autos, fairen Preisen und Karosseriearbeiten mit klarem Angebot vor Beginn. Auto reservieren oder Karosserie buchen.",
                hero_cta_primary: "Auto reservieren",
                hero_cta_secondary: "Karosserie buchen",
                hero_card_title: "Schnelle Karosserie-Schaetzung",
                hero_card_text: "Kurze Beschreibung des Schadens senden und in 30 Minuten Antwort bekommen.",
                hero_stat_1: "Fahrzeuge bereit",
                hero_stat_2: "verfuegbar",
                hero_stat_3: "Jahre Erfahrung",
                services_eyebrow: "Leistungen",
                services_title: "Autovermietung + Karosserie",
                services_text: "Ein Team fuer alles: Mietwagen und Karosseriearbeiten mit klarer Schaetzung.",
                services_card1_tag: "Miete",
                services_card1_title: "Fahrzeuge fuer jeden Plan",
                services_card1_text: "Von kleinen Stadtautos bis zu Familienmodellen.",
                services_card2_tag: "Miete",
                services_card2_title: "Lieferung zur Adresse",
                services_card2_text: "Abholung und Rueckgabe am vereinbarten Ort.",
                services_card3_tag: "Karosserie",
                services_card3_title: "Reparatur und Richten",
                services_card3_text: "Dellen entfernen, Teile ersetzen, Vorbereitung fuer Lack.",
                services_card4_tag: "Karosserie",
                services_card4_title: "Praeziser Farbton",
                services_card4_text: "Farbkorrektur, Lackierung nach Standard und Schutz.",
                fleet_eyebrow: "Flotte",
                fleet_title: "Beliebteste Fahrzeuge",
                fleet_text: "Zuverlaessige Modelle, regelmaessig gewartet und fahrbereit.",
                fleet_tag_city: "City",
                fleet_city_title: "Hatchback",
                fleet_city_text: "Perfekt fuer die Stadt und kleiner Kofferraum",
                spec_fuel: "Kraftstoff",
                spec_value_petrol: "Benzin",
                spec_transmission: "Getriebe",
                spec_value_manual: "Manuell",
                spec_consumption: "Verbrauch",
                spec_passengers: "Personen",
                price_city: "ab 29 EUR/Tag",
                btn_reserve: "Reservieren",
                fleet_tag_family: "Family",
                fleet_family_title: "Kombi",
                fleet_family_text: "Grosses Gepaeck und komfortabel fuer die Familie",
                spec_value_diesel: "Diesel",
                spec_value_auto: "Automatik",
                price_family: "ab 39 EUR/Tag",
                fleet_tag_business: "Business",
                fleet_business_title: "Limousine",
                fleet_business_text: "Elegant fuer Geschaeftstermine",
                price_business: "ab 45 EUR/Tag",
                fleet_tag_team: "Team",
                fleet_team_title: "Van",
                fleet_team_text: "Ideal fuer Gruppen und lange Fahrten",
                price_team: "ab 65 EUR/Tag",
                gallery_eyebrow: "Galerie",
                gallery_title: "Karosseriearbeiten im Detail",
                gallery_text: "Vorher/Nachher, Lackierung und Finish.",
                gallery_before: "Vorher",
                gallery_after: "Nachher",
                gallery_toggle_show: "Alle anzeigen",
                gallery_toggle_hide: "Ausblenden",
                gallery_item_1: "Stossstangenreparatur",
                gallery_item_2: "Lackierung der Tuer",
                gallery_item_3: "Politur und Schutz",
                gallery_item_4: "Richten des Kotfluegels",
                gallery_item_5: "Paneltausch",
                service_eyebrow: "Karosserie",
                service_title: "Karosserie und Lack ohne Stress",
                service_text: "Eigentuemer prueft jede Arbeit, klares Angebot vor Beginn.",
                service_list_1: "Schaetzung und Vereinbarung am selben Tag",
                service_list_2: "Richten, Schweissen und Teiletausch",
                service_list_3: "Lack mit praezisem Farbton",
                service_cta_title: "Karosserie noetig?",
                service_cta_text: "Anrufen oder Nachricht senden, wir vereinbaren Termin und Frist.",
                service_cta_btn: "Karosserie buchen",
                why_eyebrow: "Warum TUO",
                why_title: "Familienbetrieb mit lokalem Vertrauen",
                why_text: "Offen, verbindlich und langfristig.",
                why_card1_title: "Transparente Preise",
                why_card1_text: "Keine versteckten Kosten - alles vorher vereinbart.",
                why_card2_title: "Ersatzfahrzeug",
                why_card2_text: "Bei Bedarf stellen wir waehrend der Karosserie ein Auto.",
                why_card3_title: "Karosserie-Qualitaet",
                why_card3_text: "Praezise Arbeit, guter Lack und Endkontrolle.",
                reviews_eyebrow: "Bewertungen",
                reviews_title: "Was unsere Kunden sagen",
                reviews_text: "Viele zufriedene Kunden vertrauen uns Miete und Karosserie an.",
                reviews_rating_based: "Basierend auf Google-Bewertungen",
                reviews_btn: "Alle Google-Bewertungen ansehen",
                contact_eyebrow: "Kontakt",
                contact_title: "Wir sind da, wenn Sie uns brauchen",
                contact_text: "Anfrage fuer Mietwagen oder Karosserie senden. Wir antworten schnell.",
                contact_phone: "Telefon",
                contact_email: "E-Mail",
                contact_address: "Adresse",
                contact_reserve_title: "RESERVIEREN",
                contact_reserve_sub: "Anrufen oder schreiben",
                contact_main_label: "Hauptnummer",
                contact_copy: "Kopieren",
                contact_call_service: "Service anrufen",
                contact_form_title: "",
                contact_form_text: "",
                contact_name_label: "Vor- und Nachname",
                contact_name_ph: "Ihr Name",
                contact_phone_label: "Telefon",
                contact_phone_ph: "Telefonnummer",
                contact_message_label: "Nachricht",
                contact_message_ph: "Miete oder Karosserie?",
                contact_submit: "Anfrage senden",
                location_eyebrow: "Standort",
                location_title: "Finden Sie uns auf der Karte",
                location_text: "Besuchen oder anrufen - wir sind 24/7 fuer Sie da.",
                footer_follow: "Folgen Sie uns",
                footer: "TUO © 2026. Alle Rechte vorbehalten."
            }
        };

        const STORAGE_KEYS = {
            fleet: "tuo_fleet",
            gallery: "tuo_gallery",
            adminAuthed: "tuo_admin_authed",
            adminPassword: "tuo_admin_password"
        };

        const DEFAULT_ADMIN_PASSWORD = "tuo123";

        const fleetCache = {};
        const galleryCache = {};
        const fleetDefaultsByLang = {
            me: [
                {
                    id: "city",
                    tag: "City",
                    title: "Hatchback",
                    text: "Savrsen za gradske voznje i manji prtljaznik",
                    price: "od 29 EUR/dan",
                    image: "images/Hatchback.jpg",
                    alt: "Hatchback",
                    fuel: "Benzin",
                    transmission: "Manuelni",
                    consumption: "5.2 L/100km",
                    passengers: "5"
                },
                {
                    id: "family",
                    tag: "Family",
                    title: "Karavan",
                    text: "Veliki gepek i udobna voznja za sve clanove porodice",
                    price: "od 39 EUR/dan",
                    image: "images/Karavan.jpg",
                    alt: "Karavan",
                    fuel: "Dizel",
                    transmission: "Automatik",
                    consumption: "6.1 L/100km",
                    passengers: "7"
                },
                {
                    id: "business",
                    tag: "Business",
                    title: "Sedan",
                    text: "Elegantan i luksuzno uredjen za poslovne sastanke",
                    price: "od 45 EUR/dan",
                    image: "images/Mercedes.jpg",
                    alt: "Sedan",
                    fuel: "Benzin",
                    transmission: "Automatik",
                    consumption: "6.8 L/100km",
                    passengers: "5"
                },
                {
                    id: "team",
                    tag: "Team",
                    title: "Kombi",
                    text: "Idealan za grupe i duge putove bez stresa",
                    price: "od 65 EUR/dan",
                    image: "images/Kombi.jpg",
                    alt: "Kombi",
                    fuel: "Dizel",
                    transmission: "Manuelni",
                    consumption: "7.5 L/100km",
                    passengers: "9"
                }
            ],
            en: [
                {
                    id: "city",
                    tag: "City",
                    title: "Hatchback",
                    text: "Perfect for city rides and a smaller trunk",
                    price: "from 29 EUR/day",
                    image: "images/Hatchback.jpg",
                    alt: "Hatchback",
                    fuel: "Petrol",
                    transmission: "Manual",
                    consumption: "5.2 L/100km",
                    passengers: "5"
                },
                {
                    id: "family",
                    tag: "Family",
                    title: "Wagon",
                    text: "Large trunk and comfortable ride for the whole family",
                    price: "from 39 EUR/day",
                    image: "images/Karavan.jpg",
                    alt: "Wagon",
                    fuel: "Diesel",
                    transmission: "Automatic",
                    consumption: "6.1 L/100km",
                    passengers: "7"
                },
                {
                    id: "business",
                    tag: "Business",
                    title: "Sedan",
                    text: "Elegant and refined for business meetings",
                    price: "from 45 EUR/day",
                    image: "images/Mercedes.jpg",
                    alt: "Sedan",
                    fuel: "Petrol",
                    transmission: "Automatic",
                    consumption: "6.8 L/100km",
                    passengers: "5"
                },
                {
                    id: "team",
                    tag: "Team",
                    title: "Van",
                    text: "Ideal for groups and long trips without stress",
                    price: "from 65 EUR/day",
                    image: "images/Kombi.jpg",
                    alt: "Van",
                    fuel: "Diesel",
                    transmission: "Manual",
                    consumption: "7.5 L/100km",
                    passengers: "9"
                }
            ],
            de: [
                {
                    id: "city",
                    tag: "City",
                    title: "Hatchback",
                    text: "Perfekt fuer die Stadt und kleiner Kofferraum",
                    price: "ab 29 EUR/Tag",
                    image: "images/Hatchback.jpg",
                    alt: "Hatchback",
                    fuel: "Benzin",
                    transmission: "Manuell",
                    consumption: "5.2 L/100km",
                    passengers: "5"
                },
                {
                    id: "family",
                    tag: "Family",
                    title: "Kombi",
                    text: "Grosses Gepaeck und komfortabel fuer die Familie",
                    price: "ab 39 EUR/Tag",
                    image: "images/Karavan.jpg",
                    alt: "Kombi",
                    fuel: "Diesel",
                    transmission: "Automatik",
                    consumption: "6.1 L/100km",
                    passengers: "7"
                },
                {
                    id: "business",
                    tag: "Business",
                    title: "Limousine",
                    text: "Elegant fuer Geschaeftstermine",
                    price: "ab 45 EUR/Tag",
                    image: "images/Mercedes.jpg",
                    alt: "Limousine",
                    fuel: "Benzin",
                    transmission: "Automatik",
                    consumption: "6.8 L/100km",
                    passengers: "5"
                },
                {
                    id: "team",
                    tag: "Team",
                    title: "Van",
                    text: "Ideal fuer Gruppen und lange Fahrten",
                    price: "ab 65 EUR/Tag",
                    image: "images/Kombi.jpg",
                    alt: "Van",
                    fuel: "Diesel",
                    transmission: "Manuell",
                    consumption: "7.5 L/100km",
                    passengers: "9"
                }
            ]
        };

        const galleryDefaults = [
            {
                id: "bumper",
                titleKey: "gallery_item_1",
                before: "images/Hatchback.jpg",
                after: "images/Mercedes.jpg"
            },
            {
                id: "door",
                titleKey: "gallery_item_2",
                before: "images/Karavan.jpg",
                after: "images/Sedan.avif"
            },
            {
                id: "polish",
                titleKey: "gallery_item_3",
                before: "images/Kombi.jpg",
                after: "images/Karavan.jpg"
            },
            {
                id: "fender",
                titleKey: "gallery_item_4",
                before: "images/Sedan.avif",
                after: "images/Hatchback.jpg"
            },
            {
                id: "panel",
                titleKey: "gallery_item_5",
                before: "images/Mercedes.jpg",
                after: "images/Kombi.jpg"
            }
        ];

        function escapeHtml(value) {
            return String(value ?? "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
        }

        function loadStore(key, fallback) {
            try {
                const raw = localStorage.getItem(key);
                if (!raw) return fallback;
                const data = JSON.parse(raw);
                return data ?? fallback;
            } catch (err) {
                return fallback;
            }
        }

        function saveStore(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        function buildDefaultFleet(lang) {
            const defaults = fleetDefaultsByLang[lang] || fleetDefaultsByLang.me || [];
            return defaults.map((item, index) => ({
                id: item.id || `custom-${index}`,
                tag: item.tag || "",
                title: item.title || "",
                text: item.text || "",
                price: item.price || "",
                image: item.image || "",
                alt: item.alt || item.title || "Vozilo",
                fuel: item.fuel || "",
                transmission: item.transmission || "",
                consumption: item.consumption || "",
                passengers: item.passengers || ""
            }));
        }

        function buildDefaultGallery(lang) {
            const dict = translations[lang] || translations.me;
            return galleryDefaults.map((item) => ({
                id: item.id,
                title: dict[item.titleKey] || "",
                before: item.before,
                after: item.after
            }));
        }

        function getFleetData(lang) {
            if (fleetCache[lang]) return fleetCache[lang];
            const store = loadStore(STORAGE_KEYS.fleet, {});
            if (Array.isArray(store?.[lang])) {
                fleetCache[lang] = store[lang];
                return store[lang];
            }
            const fallback = buildDefaultFleet(lang);
            store[lang] = fallback;
            saveStore(STORAGE_KEYS.fleet, store);
            fleetCache[lang] = fallback;
            return fallback;
        }

        function getGalleryData(lang) {
            if (galleryCache[lang]) return galleryCache[lang];
            const store = loadStore(STORAGE_KEYS.gallery, {});
            if (Array.isArray(store?.[lang])) {
                galleryCache[lang] = store[lang];
                return store[lang];
            }
            const fallback = buildDefaultGallery(lang);
            store[lang] = fallback;
            saveStore(STORAGE_KEYS.gallery, store);
            galleryCache[lang] = fallback;
            return fallback;
        }

        async function loadFleetFromStorage(lang) {
            const data = getFleetData(lang);
            renderFleet(lang, data);
            return data;
        }

        async function loadGalleryFromStorage(lang) {
            const data = getGalleryData(lang);
            renderGallery(lang, data);
            return data;
        }

        async function saveFleetToStorage(lang, vehicles) {
            const list = Array.isArray(vehicles) ? vehicles : [];
            const store = loadStore(STORAGE_KEYS.fleet, {});
            store[lang] = list;
            saveStore(STORAGE_KEYS.fleet, store);
            fleetCache[lang] = list;
            return list;
        }

        async function saveGalleryToStorage(lang, items) {
            const list = Array.isArray(items) ? items : [];
            const store = loadStore(STORAGE_KEYS.gallery, {});
            store[lang] = list;
            saveStore(STORAGE_KEYS.gallery, store);
            galleryCache[lang] = list;
            return list;
        }

        async function resetFleetLocal(lang) {
            const list = buildDefaultFleet(lang);
            const store = loadStore(STORAGE_KEYS.fleet, {});
            store[lang] = list;
            saveStore(STORAGE_KEYS.fleet, store);
            fleetCache[lang] = list;
            return list;
        }

        async function resetGalleryLocal(lang) {
            const list = buildDefaultGallery(lang);
            const store = loadStore(STORAGE_KEYS.gallery, {});
            store[lang] = list;
            saveStore(STORAGE_KEYS.gallery, store);
            galleryCache[lang] = list;
            return list;
        }

        function renderFleet(lang, vehiclesOverride) {
            const grid = document.getElementById("fleetGrid");
            if (!grid) return;
            const dict = translations[lang] || translations.me;
            const labelFuel = dict.spec_fuel || "Gorivo";
            const labelTransmission = dict.spec_transmission || "Mjenjac";
            const labelConsumption = dict.spec_consumption || "Potrosnja";
            const labelPassengers = dict.spec_passengers || "Putnika";
            const reserveLabel = dict.btn_reserve || "Rezervisi";

            const vehicles = vehiclesOverride || getFleetData(lang);
            grid.innerHTML = vehicles.map((vehicle) => {
                const title = vehicle.title || "Vozilo";
                const alt = vehicle.alt || title;
                return `
                    <div class="card fleet-card">
                        <span class="pill">${escapeHtml(vehicle.tag)}</span>
                        <div class="fleet-card-image">
                            <img src="${escapeHtml(vehicle.image)}" alt="${escapeHtml(alt)}" loading="lazy">
                        </div>
                        <h3>${escapeHtml(title)}</h3>
                        <span>${escapeHtml(vehicle.text)}</span>
                        <div class="vehicle-specs">
                            <div class="spec-item">
                                <span class="spec-label">${escapeHtml(labelFuel)}</span>
                                <span class="spec-value">${escapeHtml(vehicle.fuel)}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">${escapeHtml(labelTransmission)}</span>
                                <span class="spec-value">${escapeHtml(vehicle.transmission)}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">${escapeHtml(labelConsumption)}</span>
                                <span class="spec-value">${escapeHtml(vehicle.consumption)}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">${escapeHtml(labelPassengers)}</span>
                                <span class="spec-value">${escapeHtml(vehicle.passengers)}</span>
                            </div>
                        </div>
                        <div class="price-reserve">
                            <div class="price">${escapeHtml(vehicle.price)}</div>
                            <a href="#kontakt" class="btn-reserve">${escapeHtml(reserveLabel)}</a>
                        </div>
                    </div>
                `;
            }).join("");
        }

        function renderGallery(lang, itemsOverride) {
            const grid = document.getElementById("galleryGrid");
            if (!grid) return;
            const items = itemsOverride || getGalleryData(lang);
            const dict = translations[lang] || translations.me;
            const labelBefore = dict.gallery_before || "Prije";
            const labelAfter = dict.gallery_after || "Posle";
            grid.innerHTML = items.map((item) => {
                const title = item.title || "Galerija";
                const before = item.before || "";
                const after = item.after || "";
                return `
                    <figure class="gallery-item">
                        <div class="ba-card" data-before-after data-before="${escapeHtml(before)}" data-after="${escapeHtml(after)}" data-title="${escapeHtml(title)}">
                            <img src="${escapeHtml(before)}" alt="${escapeHtml(title)} prije" loading="lazy">
                            <div class="ba-after">
                                <img src="${escapeHtml(after)}" alt="${escapeHtml(title)} posle" loading="lazy">
                            </div>
                            <div class="ba-handle" aria-hidden="true"></div>
                            <div class="ba-labels">
                                <span class="ba-label">${escapeHtml(labelBefore)}</span>
                                <span class="ba-label">${escapeHtml(labelAfter)}</span>
                            </div>
                            <input class="ba-range" type="range" min="0" max="100" value="50" aria-label="Prije/posle klizac">
                        </div>
                        <figcaption>${escapeHtml(title)}</figcaption>
                    </figure>
                `;
            }).join("");
            initBeforeAfter(grid);
            bindLightboxClicks(grid);
        }

        function renderAdminGallery(lang, items) {
            const container = document.getElementById("adminGalleryItems");
            if (!container) return;
            const list = items || getGalleryData(lang);
            container.innerHTML = list.map((item, index) => `
                <div class="admin-vehicle" data-index="${index}" data-id="${escapeHtml(item.id || `gallery-${index}`)}">
                    <div class="admin-preview-duo">
                        <div class="admin-preview-card">
                            <span class="admin-preview-label">Prije</span>
                            <div class="admin-preview admin-preview-before">
                                <img src="${escapeHtml(item.before || "")}" alt="${escapeHtml(item.title || "Galerija")} prije">
                            </div>
                        </div>
                        <div class="admin-preview-card">
                            <span class="admin-preview-label">Posle</span>
                            <div class="admin-preview admin-preview-after">
                                <img src="${escapeHtml(item.after || "")}" alt="${escapeHtml(item.title || "Galerija")} posle">
                            </div>
                        </div>
                    </div>
                    <div class="admin-vehicle-row admin-vehicle-row--grid">
                        <div class="admin-field">
                            <label>Naziv</label>
                            <input type="text" data-field="title" value="${escapeHtml(item.title || "")}">
                        </div>
                        <div class="admin-field">
                            <label>Prije (URL)</label>
                            <input type="text" data-field="before" value="${escapeHtml(item.before || "")}">
                        </div>
                        <div class="admin-field">
                            <label>Ucitaj prije</label>
                            <input type="file" data-field="beforeFile" accept="image/*">
                        </div>
                        <div class="admin-field">
                            <label>Posle (URL)</label>
                            <input type="text" data-field="after" value="${escapeHtml(item.after || "")}">
                        </div>
                        <div class="admin-field">
                            <label>Ucitaj posle</label>
                            <input type="file" data-field="afterFile" accept="image/*">
                        </div>
                    </div>
                    <div class="admin-vehicle-actions">
                        <button type="button" class="admin-delete" data-action="delete">Obrisi sliku</button>
                    </div>
                </div>
            `).join("");
        }

        function collectAdminGallery() {
            const items = [];
            document.querySelectorAll(".admin-gallery .admin-vehicle").forEach((card, index) => {
                const getValue = (field) => card.querySelector(`[data-field="${field}"]`)?.value.trim() || "";
                items.push({
                    id: card.getAttribute("data-id") || `gallery-${index}`,
                    title: getValue("title"),
                    before: getValue("before"),
                    after: getValue("after")
                });
            });
            return items;
        }

        function getCurrentLang() {
            const select = document.getElementById("langSelect");
            return select?.value || localStorage.getItem("tuo_lang") || "me";
        }

        function renderAdminVehicles(lang, vehicles) {
            const container = document.getElementById("adminVehicles");
            if (!container) return;
            const list = vehicles || getFleetData(lang);
            container.innerHTML = list.map((vehicle, index) => {
                const title = vehicle.title || "";
                return `
                    <div class="admin-vehicle" data-index="${index}" data-id="${escapeHtml(vehicle.id || `custom-${index}`)}">
                        <div class="admin-preview">
                            <img src="${escapeHtml(vehicle.image || "")}" alt="${escapeHtml(title || "Vozilo")}">
                        </div>
                        <div class="admin-vehicle-row admin-vehicle-row--grid">
                            <div class="admin-field">
                                <label>Tag</label>
                                <input type="text" data-field="tag" value="${escapeHtml(vehicle.tag || "")}">
                            </div>
                            <div class="admin-field">
                                <label>Naziv</label>
                                <input type="text" data-field="title" value="${escapeHtml(vehicle.title || "")}">
                            </div>
                            <div class="admin-field">
                                <label>Opis</label>
                                <textarea data-field="text">${escapeHtml(vehicle.text || "")}</textarea>
                            </div>
                            <div class="admin-field">
                                <label>Cijena</label>
                                <input type="text" data-field="price" value="${escapeHtml(vehicle.price || "")}">
                            </div>
                            <div class="admin-field">
                                <label>Slika (URL)</label>
                                <input type="text" data-field="image" value="${escapeHtml(vehicle.image || "")}">
                            </div>
                            <div class="admin-field">
                                <label>Ucitaj sliku</label>
                                <input type="file" data-field="imageFile" accept="image/*">
                            </div>
                            <div class="admin-field">
                                <label>Gorivo</label>
                                <input type="text" data-field="fuel" value="${escapeHtml(vehicle.fuel || "")}">
                            </div>
                            <div class="admin-field">
                                <label>Mjenjac</label>
                                <input type="text" data-field="transmission" value="${escapeHtml(vehicle.transmission || "")}">
                            </div>
                            <div class="admin-field">
                                <label>Potrosnja</label>
                                <input type="text" data-field="consumption" value="${escapeHtml(vehicle.consumption || "")}">
                            </div>
                            <div class="admin-field">
                                <label>Putnika</label>
                                <input type="text" data-field="passengers" value="${escapeHtml(vehicle.passengers || "")}">
                            </div>
                        </div>
                        <div class="admin-vehicle-actions">
                            <button type="button" class="admin-delete" data-action="delete">Obrisi vozilo</button>
                        </div>
                    </div>
                `;
            }).join("");
        }

        function collectAdminVehicles() {
            const vehicles = [];
            const container = document.getElementById("adminVehicles");
            if (!container) return vehicles;
            container.querySelectorAll(".admin-vehicle").forEach((card, index) => {
                const getValue = (field) => card.querySelector(`[data-field="${field}"]`)?.value.trim() || "";
                const title = getValue("title");
                vehicles.push({
                    id: card.getAttribute("data-id") || `custom-${index}`,
                    tag: getValue("tag"),
                    title,
                    text: getValue("text"),
                    price: getValue("price"),
                    image: getValue("image"),
                    alt: title || "Vozilo",
                    fuel: getValue("fuel"),
                    transmission: getValue("transmission"),
                    consumption: getValue("consumption"),
                    passengers: getValue("passengers")
                });
            });
            return vehicles;
        }

        function readFileAsDataUrl(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = () => reject(reader.error);
                reader.readAsDataURL(file);
            });
        }

        async function checkAdminAuth() {
            return localStorage.getItem(STORAGE_KEYS.adminAuthed) === "1";
        }

        function getAdminPassword() {
            return localStorage.getItem(STORAGE_KEYS.adminPassword) || DEFAULT_ADMIN_PASSWORD;
        }

        async function openAdminPanel() {
            const overlay = document.getElementById("adminOverlay");
            if (!overlay) return;
            overlay.classList.add("is-open");
            overlay.setAttribute("aria-hidden", "false");
            const isAuthed = await checkAdminAuth();
            const login = document.getElementById("adminLogin");
            const panel = document.getElementById("adminPanel");
            if (isAuthed) {
                if (login) login.classList.add("admin-hidden");
                if (panel) panel.classList.remove("admin-hidden");
                const lang = getCurrentLang();
                const label = document.getElementById("adminLangLabel");
                if (label) label.textContent = `Jezik: ${lang.toUpperCase()}`;
                await loadFleetFromStorage(lang);
                renderAdminVehicles(lang);
                await loadGalleryFromStorage(lang);
                renderAdminGallery(lang);
            } else {
                if (panel) panel.classList.add("admin-hidden");
                if (login) login.classList.remove("admin-hidden");
                document.getElementById("adminPassword")?.focus();
            }
        }

        function closeAdminPanel() {
            const overlay = document.getElementById("adminOverlay");
            if (!overlay) return;
            overlay.classList.remove("is-open");
            overlay.setAttribute("aria-hidden", "true");
        }

        async function applyTranslations(lang) {
            const dict = translations[lang] || translations.me;
            document.querySelectorAll("[data-i18n]").forEach((el) => {
                const key = el.getAttribute("data-i18n");
                if (dict[key]) el.textContent = dict[key];
            });
            document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
                const key = el.getAttribute("data-i18n-placeholder");
                if (dict[key]) el.setAttribute("placeholder", dict[key]);
            });
            await loadFleetFromStorage(lang);
            await loadGalleryFromStorage(lang);

            const galleryToggleText = document.querySelector(".gallery-toggle-text");
            const galleryCollapsible = document.getElementById("galleryCollapsible");
            if (galleryToggleText && galleryCollapsible) {
                const isOpen = galleryCollapsible.classList.contains("is-open");
                galleryToggleText.textContent = isOpen
                    ? (dict.gallery_toggle_hide || "Sakrij")
                    : (dict.gallery_toggle_show || "Prikazi sve");
            }
        }

        const langSelect = document.getElementById("langSelect");
        const storedLang = localStorage.getItem("tuo_lang");
        const initialLang = storedLang || "me";
        if (langSelect) {
            langSelect.value = initialLang;
            langSelect.addEventListener("change", async (e) => {
                const lang = e.target.value;
                localStorage.setItem("tuo_lang", lang);
                await applyTranslations(lang);
                if (document.getElementById("adminOverlay")?.classList.contains("is-open")) {
                    const label = document.getElementById("adminLangLabel");
                    if (label) label.textContent = `Jezik: ${lang.toUpperCase()}`;
                    renderAdminVehicles(lang);
                }
            });
        }
        applyTranslations(initialLang);

        const adminOverlay = document.getElementById("adminOverlay");
        if (adminOverlay) {
            adminOverlay.addEventListener("click", (e) => {
                if (e.target === adminOverlay) closeAdminPanel();
            });
        }

        document.querySelectorAll("[data-admin-close]").forEach((btn) => {
            btn.addEventListener("click", closeAdminPanel);
        });

        const adminLoginForm = document.getElementById("adminLoginForm");
        if (adminLoginForm) {
            adminLoginForm.addEventListener("submit", async (e) => {
                e.preventDefault();
                const input = document.getElementById("adminPassword");
                const value = input?.value || "";
                try {
                    if (value !== getAdminPassword()) throw new Error("Login failed");
                    localStorage.setItem(STORAGE_KEYS.adminAuthed, "1");
                    if (input) input.value = "";
                    await openAdminPanel();
                } catch (err) {
                    if (input) {
                        input.value = "";
                        input.placeholder = "Pogresna lozinka";
                    }
                }
            });
        }

        const adminAddVehicle = document.getElementById("adminAddVehicle");
        if (adminAddVehicle) {
            adminAddVehicle.addEventListener("click", () => {
                const lang = getCurrentLang();
                const current = collectAdminVehicles();
                current.push({
                    id: `custom-${Date.now()}`,
                    tag: "",
                    title: "",
                    text: "",
                    price: "",
                    image: "",
                    alt: "",
                    fuel: "",
                    transmission: "",
                    consumption: "",
                    passengers: ""
                });
                renderAdminVehicles(lang, current);
            });
        }

        const adminAddGallery = document.getElementById("adminAddGallery");
        if (adminAddGallery) {
            adminAddGallery.addEventListener("click", () => {
                const lang = getCurrentLang();
                const current = collectAdminGallery();
                current.push({
                    id: `gallery-${Date.now()}`,
                    title: "",
                    before: "",
                    after: ""
                });
                renderAdminGallery(lang, current);
            });
        }

        const adminSaveFleet = document.getElementById("adminSaveFleet");
        if (adminSaveFleet) {
            adminSaveFleet.addEventListener("click", async () => {
                const lang = getCurrentLang();
                const vehicles = collectAdminVehicles();
                try {
                    await saveFleetToStorage(lang, vehicles);
                    renderFleet(lang, vehicles);
                    const original = adminSaveFleet.textContent;
                    adminSaveFleet.textContent = "Sacuvano";
                    setTimeout(() => { adminSaveFleet.textContent = original || "Sacuvaj izmjene"; }, 1200);
                } catch (err) {
                    const original = adminSaveFleet.textContent;
                    adminSaveFleet.textContent = "Greska";
                    setTimeout(() => { adminSaveFleet.textContent = original || "Sacuvaj izmjene"; }, 1200);
                }
            });
        }

        const adminSaveGallery = document.getElementById("adminSaveGallery");
        if (adminSaveGallery) {
            adminSaveGallery.addEventListener("click", async () => {
                const lang = getCurrentLang();
                const items = collectAdminGallery();
                try {
                    await saveGalleryToStorage(lang, items);
                    renderGallery(lang, items);
                    const original = adminSaveGallery.textContent;
                    adminSaveGallery.textContent = "Sacuvano";
                    setTimeout(() => { adminSaveGallery.textContent = original || "Sacuvaj galeriju"; }, 1200);
                } catch (err) {
                    const original = adminSaveGallery.textContent;
                    adminSaveGallery.textContent = "Greska";
                    setTimeout(() => { adminSaveGallery.textContent = original || "Sacuvaj galeriju"; }, 1200);
                }
            });
        }

        const adminResetFleet = document.getElementById("adminResetFleet");
        if (adminResetFleet) {
            adminResetFleet.addEventListener("click", async () => {
                const lang = getCurrentLang();
                try {
                    const data = await resetFleetLocal(lang);
                    renderFleet(lang, data);
                    renderAdminVehicles(lang, data);
                } catch (err) {
                    renderFleet(lang, buildDefaultFleet(lang));
                    renderAdminVehicles(lang, buildDefaultFleet(lang));
                }
            });
        }

        const adminClearFleet = document.getElementById("adminClearFleet");
        if (adminClearFleet) {
            adminClearFleet.addEventListener("click", async () => {
                if (!window.confirm("Da li si siguran da zelis da obrises sve iz flote?")) return;
                const lang = getCurrentLang();
                try {
                    await saveFleetToStorage(lang, []);
                    renderFleet(lang, []);
                    renderAdminVehicles(lang, []);
                } catch (err) {}
            });
        }

        const adminResetGallery = document.getElementById("adminResetGallery");
        if (adminResetGallery) {
            adminResetGallery.addEventListener("click", async () => {
                const lang = getCurrentLang();
                try {
                    const data = await resetGalleryLocal(lang);
                    renderGallery(lang, data);
                    renderAdminGallery(lang, data);
                } catch (err) {
                    renderGallery(lang, []);
                    renderAdminGallery(lang, []);
                }
            });
        }

        const adminClearGallery = document.getElementById("adminClearGallery");
        if (adminClearGallery) {
            adminClearGallery.addEventListener("click", async () => {
                if (!window.confirm("Da li si siguran da zelis da obrises sve iz galerije?")) return;
                const lang = getCurrentLang();
                try {
                    await saveGalleryToStorage(lang, []);
                    renderGallery(lang, []);
                    renderAdminGallery(lang, []);
                } catch (err) {}
            });
        }

        const adminLogout = document.getElementById("adminLogout");
        if (adminLogout) {
            adminLogout.addEventListener("click", async () => {
                localStorage.removeItem(STORAGE_KEYS.adminAuthed);
                await openAdminPanel();
            });
        }

        const adminVehicles = document.getElementById("adminVehicles");
        if (adminVehicles) {
            adminVehicles.addEventListener("click", (e) => {
                const btn = e.target.closest("[data-action='delete']");
                if (!btn) return;
                const card = btn.closest(".admin-vehicle");
                const index = Number(card?.getAttribute("data-index"));
                if (Number.isNaN(index)) return;
                const lang = getCurrentLang();
                const current = collectAdminVehicles();
                current.splice(index, 1);
                renderAdminVehicles(lang, current);
            });

            adminVehicles.addEventListener("change", async (e) => {
                const target = e.target;
                if (target instanceof HTMLInputElement && target.getAttribute("data-field") === "imageFile") {
                    const file = target.files?.[0];
                    if (!file) return;
                    try {
                        const dataUrl = await readFileAsDataUrl(file);
                        const card = target.closest(".admin-vehicle");
                        const imageInput = card?.querySelector('[data-field="image"]');
                        const preview = card?.querySelector(".admin-preview img");
                        if (imageInput) imageInput.value = dataUrl || "";
                        if (preview) preview.src = dataUrl || "";
                    } catch (err) {
                        const card = target.closest(".admin-vehicle");
                        const preview = card?.querySelector(".admin-preview img");
                        if (preview) preview.src = "";
                    }
                }
            });

            adminVehicles.addEventListener("input", (e) => {
                const target = e.target;
                if (target instanceof HTMLInputElement && target.getAttribute("data-field") === "image") {
                    const card = target.closest(".admin-vehicle");
                    const preview = card?.querySelector(".admin-preview img");
                    if (preview) preview.src = target.value;
                }
            });
        }

        const adminGalleryItems = document.getElementById("adminGalleryItems");
        if (adminGalleryItems) {
            adminGalleryItems.addEventListener("click", (e) => {
                const btn = e.target.closest("[data-action='delete']");
                if (!btn) return;
                const card = btn.closest(".admin-vehicle");
                const index = Number(card?.getAttribute("data-index"));
                if (Number.isNaN(index)) return;
                const lang = getCurrentLang();
                const current = collectAdminGallery();
                current.splice(index, 1);
                renderAdminGallery(lang, current);
            });

            adminGalleryItems.addEventListener("input", (e) => {
                const target = e.target;
                if (!(target instanceof HTMLInputElement)) return;
                const field = target.getAttribute("data-field");
                if (field !== "before" && field !== "after") return;
                const card = target.closest(".admin-vehicle");
                const preview = card?.querySelector(`.admin-preview-${field === "before" ? "before" : "after"} img`);
                if (preview) preview.src = target.value;
            });

            adminGalleryItems.addEventListener("change", async (e) => {
                const target = e.target;
                if (!(target instanceof HTMLInputElement)) return;
                const field = target.getAttribute("data-field");
                if (field !== "beforeFile" && field !== "afterFile") return;
                const file = target.files?.[0];
                if (!file) return;
                try {
                    const dataUrl = await readFileAsDataUrl(file);
                    const card = target.closest(".admin-vehicle");
                    const inputField = field === "beforeFile" ? "before" : "after";
                    const imageInput = card?.querySelector(`[data-field="${inputField}"]`);
                    const preview = card?.querySelector(`.admin-preview-${inputField} img`);
                    if (imageInput) imageInput.value = dataUrl || "";
                    if (preview) preview.src = dataUrl || "";
                } catch (err) {}
            });
        }

        document.querySelectorAll(".admin-tab").forEach((tab) => {
            tab.addEventListener("click", () => {
                const target = tab.getAttribute("data-tab");
                document.querySelectorAll(".admin-tab").forEach((btn) => btn.classList.remove("is-active"));
                tab.classList.add("is-active");
                document.querySelectorAll(".admin-section").forEach((section) => {
                    if (section.getAttribute("data-section") === target) {
                        section.classList.remove("admin-hidden");
                    } else {
                        section.classList.add("admin-hidden");
                    }
                });
            });
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeAdminPanel();
                return;
            }
            if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "a") {
                e.preventDefault();
                openAdminPanel();
            }
        });

        function initBeforeAfter(root = document) {
            root.querySelectorAll("[data-before-after]").forEach((card) => {
                const range = card.querySelector(".ba-range");
                const setPos = (value) => {
                    const clamped = Math.max(0, Math.min(100, Number(value)));
                    card.style.setProperty("--pos", `${clamped}%`);
                };
                if (range) {
                    setPos(range.value);
                    range.addEventListener("input", (e) => setPos(e.target.value));
                }
            });
        }

        initBeforeAfter();

        const lightboxOverlay = document.getElementById("lightboxOverlay");
        const lightboxContent = document.getElementById("lightboxContent");
        const lightboxTitle = document.getElementById("lightboxTitle");
        const lightboxClose = document.getElementById("lightboxClose");

        function openLightbox({ before, after, title }) {
            if (!lightboxOverlay || !lightboxContent) return;
            const dict = translations[getCurrentLang()] || translations.me;
            const labelBefore = dict.gallery_before || "Prije";
            const labelAfter = dict.gallery_after || "Posle";
            lightboxTitle.textContent = title || "Galerija";
            lightboxContent.innerHTML = `
                <div class="ba-card" data-before-after>
                    <img src="${escapeHtml(before)}" alt="${escapeHtml(title || "Prije")}" loading="lazy">
                    <div class="ba-after">
                        <img src="${escapeHtml(after)}" alt="${escapeHtml(title || "Posle")}" loading="lazy">
                    </div>
                    <div class="ba-handle" aria-hidden="true"></div>
                    <div class="ba-labels">
                        <span class="ba-label">${escapeHtml(labelBefore)}</span>
                        <span class="ba-label">${escapeHtml(labelAfter)}</span>
                    </div>
                    <input class="ba-range" type="range" min="0" max="100" value="50" aria-label="Prije/posle klizac">
                </div>
            `;
            const range = lightboxContent.querySelector(".ba-range");
            const card = lightboxContent.querySelector(".ba-card");
            if (range && card) {
                const setPos = (value) => {
                    const clamped = Math.max(0, Math.min(100, Number(value)));
                    card.style.setProperty("--pos", `${clamped}%`);
                };
                setPos(range.value);
                range.addEventListener("input", (e) => setPos(e.target.value));
            }
            lightboxOverlay.classList.add("is-open");
            lightboxOverlay.setAttribute("aria-hidden", "false");
        }

        function closeLightbox() {
            if (!lightboxOverlay || !lightboxContent) return;
            lightboxOverlay.classList.remove("is-open");
            lightboxOverlay.setAttribute("aria-hidden", "true");
            lightboxContent.innerHTML = "";
        }

        function bindLightboxClicks(root = document) {
            root.querySelectorAll(".ba-card[data-before-after]").forEach((card) => {
                card.addEventListener("click", () => {
                    const before = card.getAttribute("data-before") || "";
                    const after = card.getAttribute("data-after") || "";
                    const title = card.getAttribute("data-title") || "Galerija";
                    if (before && after) {
                        openLightbox({ before, after, title });
                    }
                });
            });
        }

        bindLightboxClicks();

        if (lightboxClose) {
            lightboxClose.addEventListener("click", closeLightbox);
        }

        if (lightboxOverlay) {
            lightboxOverlay.addEventListener("click", (e) => {
                if (e.target === lightboxOverlay) closeLightbox();
            });
        }

        const galleryToggle = document.getElementById("galleryToggle");
        const galleryCollapsible = document.getElementById("galleryCollapsible");
        if (galleryToggle && galleryCollapsible) {
            galleryToggle.addEventListener("click", () => {
                const isOpen = galleryCollapsible.classList.toggle("is-open");
                galleryToggle.classList.toggle("is-open", isOpen);
                const textEl = galleryToggle.querySelector(".gallery-toggle-text");
                const dict = translations[getCurrentLang()] || translations.me;
                if (textEl) {
                    textEl.textContent = isOpen
                        ? (dict.gallery_toggle_hide || "Sakrij")
                        : (dict.gallery_toggle_show || "Prikazi sve");
                }
            });
        }

        if (window.location.hash === "#admin") {
            openAdminPanel();
        }

        const navToggle = document.getElementById("navToggle");
        const mainNav = document.getElementById("mainNav");
        if (navToggle && mainNav) {
            navToggle.addEventListener("click", () => {
                mainNav.classList.toggle("is-open");
            });
            mainNav.querySelectorAll("a").forEach((link) => {
                link.addEventListener("click", () => {
                    mainNav.classList.remove("is-open");
                });
            });
        }

        function handleCopy(text, btn) {
            const done = () => {
                const original = btn.textContent;
                btn.textContent = "Kopirano";
                setTimeout(() => { btn.textContent = original; }, 1200);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done).catch(() => {});
            } else {
                const temp = document.createElement("textarea");
                temp.value = text;
                document.body.appendChild(temp);
                temp.select();
                try { document.execCommand("copy"); } catch (e) {}
                document.body.removeChild(temp);
                done();
            }
        }

        document.querySelectorAll("[data-copy-btn]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const value = btn.getAttribute("data-copy-btn") || "";
                if (value) handleCopy(value, btn);
            });
        });
        const waPhone = "38268523604";
        const waForm = document.getElementById("whatsappForm");
        if (waForm) {
            waForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const name = document.getElementById("contactName")?.value.trim();
                const phone = document.getElementById("contactPhone")?.value.trim();
                const message = document.getElementById("contactMessage")?.value.trim();
                const lines = [];
                if (name) lines.push(`Ime: ${name}`);
                if (phone) lines.push(`Telefon: ${phone}`);
                if (message) lines.push(`Poruka: ${message}`);
                const text = encodeURIComponent(lines.join("\n"));
                                const appUrl = `whatsapp://send?phone=${waPhone}&text=${text}`;
                const webUrl = `https://wa.me/${waPhone}?text=${text}`;
                const opened = window.open(appUrl, "_blank", "noopener");
                if (!opened) {
                    window.open(webUrl, "_blank", "noopener");
                } else {
                    setTimeout(() => {
                        try { opened.location.href = webUrl; } catch (e) { }
                    }, 1200);
                }
            });
        }

