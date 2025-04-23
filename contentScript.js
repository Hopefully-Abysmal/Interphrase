// Replace target words with translations using stored dictionary
(async () => {
    const { translationPairs = {} } = await chrome.storage.local.get("translationPairs");
  
    function translateWords() {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!node.parentNode || node.parentNode.tagName === 'SCRIPT' || node.parentNode.tagName === 'STYLE') continue;
        for (const [original, translated] of Object.entries(translationPairs)) {
          const regex = new RegExp(`\\b${original}\\b`, 'gi');
          node.textContent = node.textContent.replace(regex, translated);
        }
      }
    }
  
    translateWords();
    const observer = new MutationObserver(translateWords);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  })();