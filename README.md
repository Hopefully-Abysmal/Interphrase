# README.md — Interphrase

## Interphrase — Firefox Extension (LibreTranslate Enhanced)

**Purpose:**
Contextually swap user-defined terms with translations or auto-translate entire pages using LibreTranslate.

### Features
- Custom dictionary-based term replacement
- Optional full-page auto-translation via LibreTranslate API
- Settings UI for adding pairs and toggling live translation

### API Integration
Uses [LibreTranslate](https://libretranslate.com) for auto-translation. No API key required for basic usage.

If self-hosting LibreTranslate, change the URL in `contentScript.js` from `https://libretranslate.com/translate` to `http://localhost:5000/translate`

### Install
1. Go to `about:debugging` in Firefox
2. Click "This Firefox" > "Load Temporary Add-on"
3. Select any file inside your Interphrase folder

---
Feel free to expand to batch translation, specific elements only, or phrase-based logic.