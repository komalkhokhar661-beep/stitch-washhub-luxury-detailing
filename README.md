# WashHub — Luxury Detailing & Paint Protection Atelier

> Professional, production-ready automotive detailing web application faithfully engineered from Google Stitch design specifications ([Stitch Project: 3298955370404708673](https://stitch.withgoogle.com/projects/3298955370404708673)).

---

## 1. Project Overview

**WashHub** is a luxury automotive detailing, paint correction, and aerospace surface protection atelier situated in **Samalkha, Panipat (Haryana 132101)**, founded by Master Detailer **Vishu Rana**.

This repository implements the **Obsidian Atelier** design system:
- **Atmospheric Chiaroscuro & Obsidian Substrates:** Deep canvases (`#121317`, `#0D0E12`) with liquid typography and warm titanium gold accents (`#E2C399`, `#C5A880`).
- **Typography:** Architectural headlines in `Syne`, sharp technical editorial body in `Hanken Grotesk`, and telemetry data in `JetBrains Mono`.
- **Domain Specializations:**
  - Interactive Before/After paint correction slider with live micron depth and gloss unit metrology.
  - Asymmetric portfolio showcase with CRI 98+ studio lighting specifications and delta readings.
  - Scientific comparison matrix for detailing tiers (*Essential Care*, *Premium Care*, *Luxury Detailing*).
  - Integrated bay reservation intake form with client-side validation and backend API persistence.
  - Interactive studio concierge with one-touch direct lines and WhatsApp dispatch.

---

## 2. Tech Stack

### Frontend
- **Framework:** React 19 + Vite 8
- **Styling:** Vanilla CSS & Tailwind CSS v4 design system with exact Obsidian Atelier tokens
- **Routing:** React Router DOM v7 (SPA routing with Cloudflare `_redirects` support)
- **Icons & Assets:** Google Material Symbols Outlined, custom SVG brand mark, local high-resolution detailing photography

### Backend
- **Runtime:** Node.js (ES Modules)
- **Framework:** Express 4
- **Database & ODM:** MongoDB Atlas + Mongoose 8 (with resilient fallback for local offline testing)
- **Security & Performance:** `helmet`, `cors`, `express-rate-limit`, `morgan`
- **Environment:** `dotenv` with strict `.env` isolation

---

## 3. Repository Architecture

```
stitch_washhub_luxury_detailing_website/
├── .gitignore                     # Production ignore rules (ensures .env is NEVER committed)
├── render.yaml                    # Render Web Service blueprint configuration
├── README.md                      # Complete system documentation
│
├── frontend/                      # React + Vite client
│   ├── public/
│   │   ├── _redirects             # Cloudflare Pages SPA rewrite rules
│   │   ├── favicon.svg            # Custom WashHub SVG brand mark
│   │   └── assets/                # High-res detailing studio photography
│   ├── src/
│   │   ├── api/
│   │   │   └── client.js          # Centralized API service & error handler
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Sticky header, brand SVG, interactive concierge popover
│   │   │   ├── Footer.jsx         # Atelier footer, coordinates, operating rhythm
│   │   │   ├── BeforeAfterSlider.jsx # Surgical before/after paint correction splitter
│   │   │   └── BookingForm.jsx    # Reservation form with validation, states, and telemetry voucher
│   │   ├── pages/
│   │   │   ├── HomePage.jsx       # Cinematic hero, metrics strip, disciplines, splitter, heritage
│   │   │   ├── ServicesPage.jsx   # 6 Cataloged services, discipline filter bar, cleanroom standard
│   │   │   ├── PackagesPage.jsx   # 3 Bento packages, marque filter, scientific matrix table
│   │   │   ├── GalleryPage.jsx    # Visual craft archive, category tabs, lightbox inspection modal
│   │   │   └── ContactBookingPage.jsx # Concierge details, reservation form, GPS location blueprint
│   │   ├── App.jsx                # Route registry & scroll-to-top handler
│   │   ├── index.css              # Obsidian Atelier theme tokens & glassmorphism utilities
│   │   └── main.jsx               # React DOM root
│   ├── .env.example               # Frontend environment placeholders
│   ├── package.json
│   └── vite.config.js             # Tailwind v4 plugin + API reverse proxy
│
└── backend/                       # Express + Node.js API service
    ├── src/
    │   ├── config/
    │   │   └── db.js              # MongoDB Atlas connection with fallback mode
    │   ├── controllers/
    │   │   ├── bookingController.js # Reservation intake, validation, reference generator
    │   │   ├── catalogController.js # Services & packages catalog endpoints
    │   │   └── healthController.js  # Production GET /api/health endpoint
    │   ├── middleware/
    │   │   └── errorHandler.js    # Centralized JSON error middleware
    │   ├── models/
    │   │   └── Booking.js         # Mongoose schema, validation, timestamps & indexes
    │   ├── routes/
    │   │   └── api.js             # Clean REST route definitions
    │   └── server.js              # Express app, Helmet, CORS, Morgan, Rate Limiting
    ├── .env.example               # Backend environment placeholders
    └── package.json
```

---

## 4. Environment Variables

### Backend (`backend/.env`)
Copy `backend/.env.example` to `backend/.env`:
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/washhub?retryWrites=true&w=majority
FRONTEND_URL=https://washhub-atelier.pages.dev
```

### Frontend (`frontend/.env`)
Copy `frontend/.env.example` to `frontend/.env`:
```env
# In development, leave blank to use the Vite reverse proxy (/api)
# In production, set to your deployed Render backend URL:
VITE_API_BASE_URL=https://washhub-api.onrender.com
```

> **Security Guarantee:** Real passwords, database strings, and API keys are NEVER committed to version control. `.env` is strictly ignored by `.gitignore`.

---

## 5. Local Setup & Development

### Prerequisites
- Node.js >= 18.x (tested on v24.19.0)
- npm >= 9.x

### Step 1: Install Dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Step 2: Start Backend Service
```bash
cd backend
npm start
# Server listens on port 5000 (http://localhost:5000)
```

### Step 3: Start Frontend Dev Server
```bash
cd frontend
npm run dev
# Vite server starts on port 5173 (http://localhost:5173)
```

---

## 6. REST API Endpoints

| Method | Endpoint | Description | Response |
|---|---|---|---|
| `GET` | `/api/health` | Service health status & uptime | `{ status: "ok", service: "WashHub Atelier API", uptime: ... }` |
| `POST` | `/api/bookings` | Submit new bay reservation | `{ success: true, message: "Bay slot provisionally locked", data: { referenceCode, ... } }` |
| `GET` | `/api/bookings` | Retrieve recent bookings | `{ success: true, count: N, data: [...] }` |
| `GET` | `/api/services` | Retrieve cataloged services | `{ success: true, count: 6, data: [...] }` |
| `GET` | `/api/packages` | Retrieve cataloged tiers | `{ success: true, count: 3, data: [...] }` |

### Sample Booking Request (`POST /api/bookings`)
```json
{
  "fullName": "Kabir Varma",
  "phoneNumber": "+91 98765 43210",
  "carModel": "Porsche 911 GT3 RS",
  "serviceTier": "ceramic-coating",
  "preferredDate": "2026-10-25",
  "custodyShift": "morning",
  "specialRequirements": "Cleanroom 9H ceramic coating with IR bake"
}
```

---

## 7. Production Deployment

### Backend on Render (Web Service)
1. Link your GitHub repository in the **Render Dashboard**.
2. Select **New Web Service** (or use `render.yaml` blueprint):
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Health Check Path:** `/api/health`
3. Add Environment Variables:
   - `NODE_ENV`: `production`
   - `PORT`: `10000`
   - `MONGODB_URI`: `<Your MongoDB Atlas connection URI>`
   - `FRONTEND_URL`: `<Your Cloudflare Pages domain>`

### Frontend on Cloudflare Pages
1. In Cloudflare Pages, connect your repository.
2. Build Settings:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Environment Variables:
   - `VITE_API_BASE_URL`: `https://your-render-backend-url.onrender.com`
4. Routing: `frontend/public/_redirects` automatically redirects all routes to `index.html` for client-side routing.

---

## 8. Quality Assurance & Testing

- ✅ **No broken links or routes:** `/`, `/services`, `/packages`, `/gallery`, `/contact-booking`, `/booking`, `/contact`
- ✅ **No broken images:** Localized high-res photography in `frontend/public/assets/`
- ✅ **No console errors:** Verified via browser automation & Vite production build
- ✅ **Interactive controls:** Draggable Before/After Splitter, category filters, booking reservation form with validation and reference generation
- ✅ **Security:** Helmet headers, CORS policies, express rate limiting, zero tracked credentials
- ✅ **Faithful Design:** Exact colors, fonts (`Syne`, `Hanken Grotesk`, `JetBrains Mono`), layout, and content from Stitch export
