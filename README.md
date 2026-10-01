# Manish Sakhakarmy · Portfolio

An interactive portfolio site: a career timeline, filterable publications, a skills explorer, side projects, a dark/light theme and a printable CV. It's plain HTML, CSS and JavaScript with no build step, hosted on GitHub Pages.

## Editing content

All content (jobs, education, publications, skills, awards, projects and contact links) lives in **`assets/js/data.js`**. Edit that file and push. The page, the stats and the printable CV update automatically.

- **New job or degree:** add an entry at the top of `timeline`, with `type: "work"` or `type: "education"`.
- **New paper:** add it to `publications`. Its `topics` create the filter chips automatically.
- **Photo:** replace `assets/portfolio_image.png`.

## Files

```
index.html           page structure
assets/css/style.css styles (light/dark themes, print CV layout)
assets/js/main.js    rendering and interactions
assets/js/data.js    all content
.nojekyll            serve files as-is (no Jekyll theme)
```

## Preview locally

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```
