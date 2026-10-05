# DRONGO — Wildlife & Editorial Photography

> *"Alta alatis patent"* — The sky lies open to the winged.

A modern, responsive, and high-editorial photography platform dedicated to chronicling India's threatened biodiversity across the Gangetic basin and eastern floodplains. Built with institutional rigor, typographic elegance, and real-time field telemetry.

---

## 🦅 Architectural Highlights

1. **Top Utility Bar:** White House-style clean notification bar with real-time field update indicators.
2. **Main Navigation Header:** Deep ocean navy (`#0A2B47`) 3-column layout featuring the Drongo crest emblem, typography stack, Latin motto, and interactive trigger controls.
3. **Sub-Navigation Strip:** Direct access to Gallery, Short Films, Birding Guides, Expeditions, About Bihar, and Contact.
4. **Editorial Intro:** Refined serif typography showcasing field narratives and geographic telemetry.
5. **Dynamic Media Grid:** Responsive CSS Grid (`repeat(auto-fit, minmax(300px, 1fr))`) with smooth 1.05 hover zoom on photo cards, centered SVG play overlays on cinema video cards, and technical camera data bars.
6. **Telemetry & Lightbox Modal:** Full-screen modal inspector displaying high-resolution imagery and EXIF data (shutter, aperture, ISO, focal length, GPS coordinates, conservation status).
7. **Mobile Drawer & Search Overlay:** 100% responsive design with collapsible off-canvas navigation and live keyword search.

---

## 🎨 Design System Variables

```css
:root {
  --primary-ocean-blue: #0A2B47;
  --pure-white: #FFFFFF;
  --off-white-bg: #F8F9FA;
  --text-dark: #1A1A1A;
  --accent-gold: #C5A059;

  --font-sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-serif: 'Playfair Display', 'Merriweather', serif;
  --font-display: 'Montserrat', sans-serif;
}
```

---

## 🚀 Local Development

Launch the local static server:

```bash
python3 server.py
```

Then navigate to `http://localhost:8089` in your web browser.

---

## 🌐 Production & GitHub Pages

- **Live URL:** [https://saltymother.github.io/drongo-wildlife/](https://saltymother.github.io/drongo-wildlife/)
- **Repository:** [https://github.com/saltymother/drongo-wildlife](https://github.com/saltymother/drongo-wildlife)
