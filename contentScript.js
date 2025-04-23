// Replace target words with translations using LibreTranslate API
(async () => {
  const { translationPairs = {}, autoTranslate = false, targetLang = "es" } = await chrome.storage.local.get(["translationPairs", "autoTranslate", "targetLang"]);

  async function translateTextViaAPI(text, source = "auto", target = targetLang) {
    const response = await fetch("http://localhost:5000/translate", { 
      method: "POST",
      body: JSON.stringify({ q: text, source, target }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data.translatedText;
  }

  async function translateWords() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentNode || node.parentNode.tagName === 'SCRIPT' || node.parentNode.tagName === 'STYLE') continue;

      if (autoTranslate) {
        node.textContent = await translateTextViaAPI(node.textContent);
      } else {
        for (const [original, translated] of Object.entries(translationPairs)) {
          const regex = new RegExp(`\\b${original}\\b`, 'gi');
          node.textContent = node.textContent.replace(regex, translated);
        }
      }
    }
  }

  translateWords();
  const observer = new MutationObserver(translateWords);
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
