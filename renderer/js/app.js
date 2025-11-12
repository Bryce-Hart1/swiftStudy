// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const topbarHTML = `
    <div id="topbar">
      <div class="nav-buttons">
        <button id="flashcards-btn">Flashcards</button>
        <button id="ai-btn">AI Practice</button>
        <button id="math-btn">Math Tools</button>
      </div>
    </div>
  `;

  // Only add the topbar if it's not already in the DOM (prevents duplicates)
  if (!document.getElementById('topbar')) {
    document.body.insertAdjacentHTML('afterbegin', topbarHTML);
  }

  // Detect whether we're currently inside the "pages" folder.
  // Use a robust regex to avoid false positives.
  const inPagesFolder = /(^|\/)pages(\/|$)/.test(window.location.pathname);

  // Use path mapping so navigation is correct whether we're at root or in pages/.
  const paths = inPagesFolder
    ? { flashcards: 'flashcards.html', ai: 'aiPractice.html', math: 'mathTools.html' }
    : { flashcards: 'pages/flashcards.html', ai: 'pages/aiPractice.html', math: 'pages/mathTools.html' };

  const goTo = (relPath) => {
    // prefer assigning location.href so browser resolves relative paths correctly
    window.location.href = relPath;
  };

  // Attach navigation event listeners (guard if element missing)
  const flashBtn = document.getElementById('flashcards-btn');
  const aiBtn = document.getElementById('ai-btn');
  const mathBtn = document.getElementById('math-btn');

  if (flashBtn) {
    flashBtn.addEventListener('click', () => goTo(paths.flashcards));
  }
  if (aiBtn) {
    aiBtn.addEventListener('click', () => goTo(paths.ai));
  }

  if (mathBtn) {
    mathBtn.addEventListener('click', () => {
      const content = document.getElementById('content');
      if (content) {
        content.innerHTML = `
          <h2>Math Tools</h2>
          <p>Here’s where your math helper UI will go.</p>
        `;
        // Only animate if anime is available
        if (window.anime && typeof window.anime === 'function') {
          anime({
            targets: '#content h2, #content p',
            translateY: [20, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 800,
            delay: anime.stagger(100)
          });
        }
      } else {
        goTo(paths.math);
      }
    });
  }
});
