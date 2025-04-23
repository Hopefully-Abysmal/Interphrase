 README.md — Interphrase

## Interphrase — Firefox Extension

**Purpose:**
Contextually swap user-defined terms with translations or synonyms while browsing the web.

### Features
- User-controlled translation dictionary
- Replaces matches live on any page
- Simple UI for adding pairs (e.g., "apple" → "manzana")

### Recommended Setup
Uses a **local dictionary** via `chrome.storage.local`.
No external API key required for now — but this can be extended to call:
- Google Translate API (requires billing key)
- LibreTranslate (open-source, self-hostable)

For prototyping: stick with manual pairs via popup UI.

### Install
1. Go to `about:debugging` in Firefox
2. Click "This Firefox" > "Load Temporary Add-on"
3. Select any file inside your Interphrase folder

---
Want contextual auto-detection or external translation API support? Let me know.