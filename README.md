# Agbaje Stephen - Portfolio

A clean, professional portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### 3. Build for Production
```bash
npm run build
```

## 📸 Add Your Profile Picture

1. Save your LinkedIn profile photo in the `public` folder as `profile.jpg`
2. The portfolio will automatically display it in the hero section
3. If no image is found, it shows "AS" as a placeholder

## 🔗 Add Live Demo Links

When you deploy your projects, update the `liveDemo` URLs in `src/page/portfolio.jsx`:

```javascript
// Find your projects array (around line 53) and add your URLs:
liveDemo: 'https://your-deployed-url.com',
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static files (add profile.jpg here)
├── src/
│   ├── page/
│   │   └── portfolio.jsx  # Main portfolio component
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Tailwind CSS
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Technologies Used

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

## 📦 Deploy

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build: `npm run build`
2. Publish directory: `dist`

## ✨ Features

- Clean, minimal dark design
- Fully responsive
- Smooth scroll animations
- Professional layout
- Backend developer focus
- Easy to customize

---

Built by Agbaje Stephen | Backend Developer
