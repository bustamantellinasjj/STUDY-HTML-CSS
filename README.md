# Fusión Gourmet — Festival Gastronómico de Vanguardia

## Description
Landing page for "Fusión Gourmet", an avant-garde gastronomic festival that celebrates innovative cuisine and culinary experiences. The site is designed to convey elegance, flavor, and modernity, encouraging visitors to reserve tickets for the various tasting events.

## Technologies
- **HTML5** — Semantic structure (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- **CSS3** — Flexbox, CSS Grid, custom properties (variables), animations, media queries

No JavaScript. No frameworks. No libraries.

## Project Structure
```
fusion-gourmet/
│
├── index.html          # Main page
├── styles.css          # All styles
├── README.md           # This file
│
└── imagenes/           # Image folder (add your own)
    ├── hero.jpg        # Hero background
    ├── chef-ana.jpg
    ├── chef-raul.jpg
    ├── chef-sofia.jpg
    └── galeria-1.jpg ... galeria-5.jpg
```

## Sections
1. **Header** — Festival logo + sticky navigation menu
2. **Hero** — Visual impact section with call to action
3. **Horarios** — Tasting schedule in an HTML table (`<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`)
4. **Chefs** — Guest chef cards using CSS Grid
5. **Sobre el Festival** — Concept, philosophy list, and sponsors list
6. **Galería** — Image mosaic using CSS Grid
7. **Footer** — Contact, social media links, copyright

## How to View Locally
1. Download or clone this project
2. Open the folder in **Visual Studio Code**
3. Install the **Live Server** extension
4. Right-click `index.html` → **Open with Live Server**
5. The site will open automatically in your browser

## Adding Images
Replace the placeholder color blocks in CSS with real images:
- In `.foto-chef-1`, `.foto-chef-2`, `.foto-chef-3`: add `background-image: url('imagenes/chef-name.jpg');`
- In `.foto-g1` through `.foto-g5`: add `background-image: url('imagenes/galeria-1.jpg');`
- In `.hero`: uncomment the `background-image: url('imagenes/hero.jpg');` line

## Color Palette
| Name       | Hex       | Usage              |
|------------|-----------|---------------------|
| Dark green | `#356630` | Buttons, accents    |
| Copper     | `#b87333` | Highlights, borders |
| Black      | `#0e0e0e` | Backgrounds         |
| White      | `#ffffff` | Text on dark        |
| Cream      | `#f5f0e8` | Light sections      |

## Author
Juan Jose · RIWI · Module HTML & CSS · 2026
