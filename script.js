// ============================================================
// Rizwan Vahora — Portfolio interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const iconMenu = document.getElementById('iconMenu');
  const iconClose = document.getElementById('iconClose');

  function closeNav() {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    iconMenu.style.display = '';
    iconClose.style.display = 'none';
  }

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    iconMenu.style.display = isOpen ? 'none' : '';
    iconClose.style.display = isOpen ? '' : 'none';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach((a) => {
            a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((section) => navObserver.observe(section));

  /* ---------- Scroll-reveal for cards ---------- */
  const revealTargets = document.querySelectorAll('.skill-card, .project-card, .bg-card');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = reduceMotion ? 0 : (i % 3) * 70;
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));

  /* ---------- Hero "query console" typewriter ---------- */
  const typedEl = document.getElementById('typedQuery');
  const resultBlock = document.getElementById('resultBlock');

  // Tokens are written as plain text + a class hint; rendered with spans.
  const queryTokens = [
    { t: 'SELECT', c: 'tok-kw' }, { t: ' name, role, location\n', c: '' },
    { t: 'FROM', c: 'tok-kw' }, { t: '   ', c: '' }, { t: 'engineers\n', c: 'tok-fn' },
    { t: 'WHERE', c: 'tok-kw' }, { t: '  stack ', c: '' }, { t: "@>", c: '' }, { t: " ARRAY['Python','SQL','ML']\n", c: 'tok-str' },
    { t: '  AND', c: 'tok-kw' }, { t: '    status = ', c: '' }, { t: "'open_to_work'\n", c: 'tok-str' },
    { t: 'LIMIT', c: 'tok-kw' }, { t: '  1;', c: '' },
    { t: '\n\n-- fetching first match', c: 'tok-cm' },
  ];
  const fullPlainText = queryTokens.map((tok) => tok.t).join('');

  function renderResult() {
    resultBlock.classList.add('is-visible');
  }

  function typeQuery() {
    let charIndex = 0;
    const speed = 16; // ms per character

    function step() {
      charIndex++;
      let remaining = charIndex;
      let html = '';

      for (const tok of queryTokens) {
        if (remaining <= 0) break;
        const slice = tok.t.slice(0, remaining);
        remaining -= tok.t.length;
        html += tok.c ? `<span class="${tok.c}">${escapeHTML(slice)}</span>` : escapeHTML(slice);
      }

      typedEl.innerHTML = html + '<span class="caret"></span>';

      if (charIndex < fullPlainText.length) {
        setTimeout(step, speed);
      } else {
        typedEl.querySelector('.caret')?.remove();
        setTimeout(renderResult, 350);
      }
    }
    step();
  }

  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  if (reduceMotion) {
    // Skip the animation; show the finished state immediately.
    let html = '';
    for (const tok of queryTokens) {
      html += tok.c ? `<span class="${tok.c}">${escapeHTML(tok.t)}</span>` : escapeHTML(tok.t);
    }
    typedEl.innerHTML = html;
    renderResult();
  } else {
    typeQuery();
  }

  /* ---------- Copy-to-clipboard (email / phone) ---------- */
  const toast = document.getElementById('toast');
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }

  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(value);
      } catch (err) {
        // Clipboard API unavailable (e.g. insecure context) — fall back silently.
      }
      btn.classList.add('is-copied');
      showToast(`Copied "${value}" to clipboard`);
      setTimeout(() => btn.classList.remove('is-copied'), 1600);
    });
  });
});
