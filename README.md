# 🌱 GreenPulse — Eco-Friendly Community Portal

> **Live Production Website:** [https://greenpulse-eco.surge.sh](https://greenpulse-eco.surge.sh)  
> **Status:** 🟢 Production Live (24/7 Global HTTPS)  
> **Architecture:** Single-Page Web Application (Pure HTML5 · Modern CSS3 · Vanilla ES6 JavaScript)  
> **Build Requirements:** Zero build step · No backend required · Zero environment variables

---

## 🌍 Overview

**GreenPulse** is a futuristic, gamified community sustainability web platform that transforms individual eco-habits into collective, measurable neighborhood progress. Combining a sleek Notion/Duolingo-inspired dashboard aesthetic with an interactive Eco Arcade, real-time telemetry charts, an interactive vector impact map, and a complete multi-user demographic profiling engine, GreenPulse empowers citizens of all ages to take climate action.

---

## 🚀 Live Production Deployment

The project is deployed and accessible worldwide 24/7 on any device:

- **Public Production URL:** [https://greenpulse-eco.surge.sh](https://greenpulse-eco.surge.sh)
- **SSL / TLS:** Enforced HTTPS with auto-renewing global edge SSL
- **Content Delivery Network:** Low-latency Anycast CDN (San Francisco, London, Toronto, New York, Amsterdam, Frankfurt, Singapore, Bangalore, Sydney, Tokyo)
- **Single-Page App Routing:** Fully protected with `200.html`, Netlify `_redirects`, and `vercel.json` rewrites to prevent 404s on deep links
- **Environment Variables:** **None required**. GreenPulse is completely client-side and self-contained.

---

## 🔐 Multi-User Authentication & Local Demo System

> [!NOTE]
> GreenPulse utilizes a **Frontend Local Demo Authentication System**. All accounts, progress, action logs, and preferences persist locally on the user's browser device via `localStorage`. It does **not** connect to an external server database.

### 1. 🔑 Authentication Features
- **Welcome / Auth Screen**: Welcome screen featuring the glowing GreenPulse leaf logo, "LOCAL DEMO MODE" indicator, and 1-click sample profile switches.
- **Login**: Authenticate using username or email with password verification.
- **Password UX**: 👁️ Show / Hide password toggle, real-time password strength meter (Weak / Medium / Strong / Very Strong).
- **Web Crypto Hashing**: Passwords are pre-hashed using the browser's native `crypto.subtle.digest('SHA-256')` before comparison or local storage.
- **Remember This Device**: Keeps the active user session persistently across browser reloads.
- **Continue as Guest**: Explore the dashboard, play arcade games, and view community impact without saving permanent personal data.

### 2. 📝 Registration & Demographic Profiling
- **Required Fields**: Full Name, Unique Username, Valid Email, Password, Confirm Password.
- **Age Groups**:
  - 👶 **Child (under 13)**: Automatically sets **Kids Mode** with simplified labels and cheerful badges.
  - 🧑 **Teen / Student / Adult**: Defaults to **Standard Mode** with comprehensive impact telemetry.
  - 👴 **Senior (65+)**: Automatically activates **Senior-Friendly Mode** with high contrast and large text.
- **General Neighborhood**: Collects general district names (e.g. *North Forest*, *Solar Commons*); never requests precise GPS.
- **Eco Interests**: Multi-select pills for *Tree Planting*, *Recycling*, *Cycling/Walking*, *Energy Saving*, *Composting*, *Plastic Reduction*, *Water Saving*, and *Gardening*.
- **Live Validation**: Friendly real-time green/red feedback for unique usernames, valid email formatting, and matching passwords.

### 3. 👥 Preloaded Demo Profiles
GreenPulse comes preloaded with diverse demo stewards for immediate evaluation:
1. 🌿 **Alex Rivera** (`alexgreen`, 1,240 GP) — Level 3: Green Guardian, 7-day streak, 19 actions.
2. 🌳 **Sarah Green** (`sarahg`, 1,580 GP) — Level 4: Eco Champion, rooftop solar & orchard planter.
3. ♻️ **Marcus Lee** (`marcus_eco`, 620 GP) — Level 2: Sprout, zero-waste student & commuter.
4. 🚲 **Priya Kumar** (`priyak`, 1,410 GP) — Level 3: Green Guardian, avid cyclist & youth squad leader.
5. 🍂 **Daniel Thomas** (`dani_eco`, 1,120 GP) — Level 3: Green Guardian, master composter & senior gardener.
6. ☀️ **Maya Wilson** (`mayaw`, 890 GP) — Level 2: Sprout, energy saver in Kids Mode.

*Default demo password for all sample accounts:* `green123` (or use the instant 1-click sample switcher).

---

## 🎮 Complete Feature Ecosystem

1. **Futuristic Green Visual Identity**: Full palette from Deep Forest (`#064E3B`) to Leaf Green (`#4DFF88`), glassmorphism cards, and animated glowing accents.
2. **Impact Telemetry & Chart.js**: Live toggling between **Community Impact** (neighborhood aggregates) and **My Impact** (individual CO₂ saved, actions, trees).
3. **Log Eco-Action**: 6 interactive action cards (*Cycle*, *Recycle*, *Plant Tree*, *Save Energy*, *Compost*, *Reusable Bag*) with live impact preview, confetti, and Web Audio API chimes.
4. **Eco Arcade**: 4 fully playable educational sustainability games:
   - ♻️ **Sort It Right**: Timed drag-and-drop / click waste sorting simulator.
   - 🌳 **Plant a Tree**: Virtual tree growth clicker with watering and sunlight mechanics.
   - 🌍 **Eco Quiz**: Educational climate knowledge challenges.
   - ⚡ **Energy Saver**: Rapid appliance shutdown puzzle.
5. **Impact Map**: Futuristic dark-forest vector map with pulsing pins, district telemetry, and filterable eco-zones.
6. **Audience Accessibility Modes**: 👶 Kids Mode, 🧑 Standard Mode, 👴 Senior-Friendly Mode with contrast toggles, font scaling, and reduced motion.
7. **Social & Gamification**: Weekly community challenges, level badges, streaks, leaderboards, and personal activity history.

---

## 💻 Tech Stack & File Structure

```text
EcoWebDesign/
├── index.html         # Main semantic SPA structure and SVG graphics (~2,180 lines)
├── 200.html           # SPA fallback copy for static routing
├── styles.css         # Complete CSS3 design system and glassmorphism (~4,720 lines)
├── app.js             # Core application controller, state, auth, and games (~3,340 lines)
├── vercel.json        # Static routing and clean URL configuration for Vercel
├── _redirects         # Single-page routing fallback for Netlify
├── CNAME              # Surge custom domain binding (greenpulse-eco.surge.sh)
├── .gitignore         # Clean git exclusion rules
└── README.md          # Project documentation and deployment guide
```

---

## 🛠️ Local Development & Redeployment

### Running Locally
To test locally, open `index.html` in any browser:
```powershell
Start-Process "index.html"
```
Or start a local HTTP server:
```bash
python -m http.server 8000
```

### Redeploying to Production
To push updates to the live site at `greenpulse-eco.surge.sh`:
```powershell
$env:PATH = "C:\Users\Niruthiya Sri G\nodejs;" + $env:PATH
npx surge . greenpulse-eco.surge.sh
```
