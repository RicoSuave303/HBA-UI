# HBA-UI — Hoodle HBA Presence Page prototype

Click-through prototype of the HBA Presence Page for the HBA of Metro Denver: Presence Page → member builder page → Parade of Homes → model-home sheet → buyer account.

## Open it
- **Quick look:** open `Hoodle HBA Presence Page.html` (single offline file; photos load from the web).
- **Source:** serve the repo root with any static server (`npx serve .` or `python3 -m http.server`) and open `ui_kits/hba-presence/index.html`. The page loads `../../styles.css` and `../../_ds_bundle.js`, so keep the folder layout.

## Layout
- `ui_kits/hba-presence/` — prototype (`index.html`, `data.js` sample data, `*.jsx` screens)
- `styles.css`, `tokens/`, `fonts/` — Hoodle design tokens and Poppins webfonts
- `_ds_bundle.js` — compiled Hoodle component library
- `assets/` — Hoodle logo
- `docs/hba-context.md` — summary of the HBA briefs

All builders, members, stats and events are sample data. Photos are stock stand-ins. HBA, builder and sponsor logos are placeholders.
