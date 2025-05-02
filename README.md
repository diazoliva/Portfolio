# Marcos Díaz Oliva – Portfolio

A single-page portfolio built with **Vite 4**, **Tailwind CSS 4**, and vanilla JavaScript.  
The site showcases my projects, résumé, and contact information, while providing a smooth client-side experience with theme and language switching.



## ✨ Key Features

| Area | What it does |
|------|--------------|
| **Client-side router** | Changes pages without a full reload (Home, About Me, Projects, Contact). |
| **Theme selector** | Light / Dark / System (follows the OS when “System” is chosen). |
| **Language selector** | Real-time switch between Spanish (ES) and English (EN); text and image alt tags update instantly. |
| **Responsive design** | Tailwind utility classes cover mobile → desktop breakpoints. |
| **Font Awesome icons** | Icons are loaded through an SVG sprite (no full FA kit). |
| **Self-hosted Inter font** | Inter 400 & 700 served locally with `font-display:swap`. |
| **Google Tag Manager** | Integrated via asynchronous script, keeping analytics separate from site logic. |



## 🛠 Tech Stack

| Category | Library / Tool |
|----------|----------------|
| **Build tool** | Vite 4 |
| **Styling** | Tailwind CSS 4 (`darkMode: "class"`) |
| **Icons** | Font Awesome 6 (Cherry-picked icons → SVG sprite) |
| **Routing** | Minimal custom router (`src/router.js`) |
| **Deployment** | Netlify (CD + CI) |



## 📁 Folder Structure

```bash
.
├─ public/ # Static assets copied 1-to-1
│ ├─ assets/ # images, fonts (WOFF2), PDFs
│ ├─ robots.txt
│ └─ sitemap.xml
├─ src/ # Everything processed by Vite
│ ├─ components/ # Navbar, Footer, ThemeSwitcher…
│ ├─ pages/ # Home.js, Contact.js …
│ ├─ utils/ # theme.js, language.js, icons.js
│ ├─ styles/
│ │ ├─ input.css # @import "tailwindcss";
│ │ ├─ fonts.css # @font-face Inter
│ │ └─ base.css # custom layers
│ ├─ router.js
│ └─ App.js # entry point (imports input.css)
├─ index.html
├─ vite.config.js
├─ tailwind.config.js
└─ package.json
```



## 🚀 Getting Started

```bash
# 1 Clone the repo
git clone https://github.com/diazoliva/portfolio.git
cd portfolio

# 2 Install dependencies
npm install

# 3 Development server  ➡  http://localhost:3000
npm run dev

# 4 Production build (outputs to ./dist)
npm run build

# 5 Preview the build locally
npm run preview        # http://localhost:4173
```



## 📜 Available NPM Scripts

| Command           | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Launches Vite with hot-module reloading.        |
| `npm run build`   | Creates a production bundle in `dist/`.         |
| `npm run preview` | Serves the production bundle for local testing. |




## 🌐 Deploying to Netlify (Optional)

```bash
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]          # SPA fallback
  from = "/*"
  to   = "/index.html"
  status = 200
```



## 📋 License

The source code is released under the MIT License.

Portfolio content (text, images, CV) -- © Marcos Díaz Oliva.