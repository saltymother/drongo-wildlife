# DRONGO — Institutional Wildlife & Nature Visual Storytelling
> *"Alta alatis patent"* (The skies lie open to those with wings)

An editorial photography and cinematography digital institution dedicated to documenting the untamed beauty of India's wildlife—from the freshwater river dolphins of the Ganges to the rarest birds of the eastern floodplains and the sal forest tigers of the Himalayan Terai.

---

## Architecture & Visual Standards

Designed with the structural rigor and elegance of institutional sites (White House, FDA, National Geographic):

- **Strict Custom Property System (`:root`):**
  - `--primary-ocean-blue: #0A2B47;`
  - `--pure-white: #FFFFFF;`
  - `--off-white-bg: #F8F9FA;`
  - `--text-dark: #1A1A1A;`
  - `--accent-gold: #C5A059;`
- **Typography Stacks:**
  - Headings & Title: `'Montserrat', sans-serif;` (Bold italic 800)
  - Editorial Prose & Motto: `'Playfair Display', serif;`
  - Navigation & Utility: `'Inter', sans-serif;`
- **Institutional Top Utility Bar:**
  - Full-width White House style bulletin with real-time updates and expedition logs.
- **Main Header (Core Blue Section):**
  - 3-column layout: Slide-in hamburger `MENU`, brand identity vertical stack (Title, Drongo Crest Logo, Latin Motto), and `SEARCH` & `+ UPLOAD` action buttons.
- **Separator & Sub-Navigation:**
  - `GALLERY`, `SHORT FILMS`, `BIRDING GUIDES`, `EXPEDITIONS`, `ABOUT BIHAR`, `CONTACT`.
- **Dynamic Media Grid:**
  - Responsive CSS Grid (`repeat(auto-fit, minmax(300px, 1fr))`) with hover zoom transitions, video play overlays, and camera spec bars.
- **Curator Studio & Upload Portal:**
  - Upload photos and videos from your local device or URLs into specific sections.
  - Automatically captures camera gear, lens, EXIF specs, and ecological field notes.
  - Persistent via `localStorage` with JSON export/import capability.
- **Lightbox & 4K Cinema Theater:**
  - Full-resolution visual inspection with EXIF pane and keyboard navigation.

---

## Running Locally

To launch the local web server:

```bash
cd drongo_wildlife
python3 server.py
```

Then navigate to `http://localhost:8085` in your browser.

---

## Deployment & Verification

Deployable directly to GitHub Pages:
- Static assets use relative paths (`./css/style.css`, `logo for my .png`, `assets/images/...`).
- Includes `.nojekyll` and `.github/workflows/deploy.yml` for automated CI/CD.
