// ── APP STATE ──
const App = {
  state: { categoryId: null, cardId: null }
};

// ── SVG LOGO ──
function logoSVG(size = 44, color = 'white') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 3L40 13V31L22 41L4 31V13L22 3Z" stroke="${color}" stroke-width="1.8" fill="none" opacity="0.9"/>
    <path d="M22 10L34 17V31L22 38L10 31V17L22 10Z" stroke="${color}" stroke-width="1" fill="none" opacity="0.4"/>
    <circle cx="22" cy="22" r="4.5" fill="${color}" opacity="0.85"/>
    <circle cx="22" cy="13" r="2" fill="${color}" opacity="0.5"/>
    <circle cx="30" cy="18" r="2" fill="${color}" opacity="0.5"/>
    <circle cx="30" cy="28" r="2" fill="${color}" opacity="0.5"/>
    <circle cx="22" cy="33" r="2" fill="${color}" opacity="0.5"/>
    <circle cx="14" cy="28" r="2" fill="${color}" opacity="0.5"/>
    <circle cx="14" cy="18" r="2" fill="${color}" opacity="0.5"/>
  </svg>`;
}

function sparkleDecoration(color = 'rgba(168,85,247,0.7)') {
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 4V44M4 24H44M9 9L39 39M39 9L9 39" stroke="${color}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
    <circle cx="24" cy="24" r="3" fill="${color}"/>
  </svg>`;
}

function starSVG(color = 'rgba(168,85,247,0.8)') {
  return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 2V30M2 16H30M5.5 5.5L26.5 26.5M26.5 5.5L5.5 26.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="16" cy="16" r="2.5" fill="${color}"/>
  </svg>`;
}

// ── PAGE RENDERERS ──
const Pages = {
  'page-login'(params = {}) {
    // Static page, no dynamic render needed
    const form = document.getElementById('login-form');
    if (!form) return;
    form.onsubmit = null;
    form.onsubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const res = Auth.login(email, password);
      if (res.ok) {
        document.getElementById('login-btn').textContent = 'Ingresando...';
        setTimeout(() => Nav.go('page-home'), 600);
      } else {
        const err = document.getElementById('login-error');
        err.textContent = res.error;
        err.style.display = 'block';
      }
    };
  },

  'page-home'(params = {}) {
    const el = document.getElementById('home-cards');
    if (!el || !Cards.data) return;

    const user = Auth.getUser();
    const welcomeEl = document.getElementById('home-welcome');
    if (welcomeEl && user) {
      const name = user.name.charAt(0).toUpperCase() + user.name.slice(1);
      welcomeEl.textContent = `Bienvenido/a, ${name}`;
    }

    el.innerHTML = Cards.data.categories.map((cat, i) => Cards.renderCategoryCard(cat, i)).join('');

    // Bind clicks
    el.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const catId = card.dataset.category;
        Nav.go('page-category', { categoryId: catId });
      });
    });

    // Init tilt
    setTimeout(() => Animations.initTilt(el), 100);
  },

  'page-category'(params = {}) {
    const catId = params.categoryId || App.state.categoryId;
    const cat = Cards.getCategory(catId);
    if (!cat) return;

    // Update header
    const titleEl = document.getElementById('cat-title');
    const descEl = document.getElementById('cat-description');
    const iconEl = document.getElementById('cat-icon');
    const headerEl = document.getElementById('cat-header');
    const breadcrumbCat = document.getElementById('breadcrumb-cat');

    if (titleEl) titleEl.textContent = cat.title;
    if (descEl) descEl.textContent = cat.description;
    if (iconEl) iconEl.textContent = cat.icon;
    if (breadcrumbCat) breadcrumbCat.textContent = cat.title;
    if (headerEl) headerEl.style.background = cat.gradient;

    // Render subcards
    const gridEl = document.getElementById('cat-grid');
    if (!gridEl) return;
    gridEl.innerHTML = cat.subcards.map((card, i) => Cards.renderSubCard(card, i)).join('');

    gridEl.querySelectorAll('.virtue-card').forEach(cardEl => {
      cardEl.addEventListener('click', () => {
        Nav.go('page-card', { categoryId: catId, cardId: cardEl.dataset.card });
      });
    });
  },

  'page-card'(params = {}) {
    const catId = params.categoryId || App.state.categoryId;
    const cardId = params.cardId || App.state.cardId;
    const card = Cards.getCard(catId, cardId);
    const cat = Cards.getCategory(catId);
    if (!card || !cat) return;

    // Update breadcrumb
    const bcCat = document.getElementById('card-breadcrumb-cat');
    const bcCard = document.getElementById('card-breadcrumb-card');
    if (bcCat) bcCat.textContent = cat.title;
    if (bcCard) bcCard.textContent = card.title;

    // Header accent
    const accentEl = document.getElementById('card-accent-bar');
    if (accentEl) accentEl.style.background = card.gradient;

    // Fill content
    const fields = {
      'card-title': card.title,
      'card-poder': card.poder,
      'card-descripcion': card.descripcion,
      'card-pregunta': card.pregunta,
      'card-micropractica': card.micropractica,
      'card-reflexion': card.reflexion
    };
    Object.entries(fields).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    });

    // Color tag
    const tagEl = document.getElementById('card-category-tag');
    if (tagEl) {
      tagEl.textContent = cat.title;
      tagEl.style.background = `${cat.color}22`;
      tagEl.style.borderColor = `${cat.color}55`;
      tagEl.style.color = cat.accent || cat.color;
    }

    // Visual card background
    const visualEl = document.getElementById('card-visual-bg');
    if (visualEl) visualEl.style.background = card.gradient;

    // Fortalezas tags
    const fortEl = document.getElementById('card-fortalezas');
    if (fortEl && card.fortalezas && card.fortalezas.length > 0) {
      fortEl.innerHTML = card.fortalezas.map(f =>
        `<span class="floating-tag">${f}</span>`
      ).join('');
      fortEl.parentElement.style.display = 'block';
    } else if (fortEl) {
      fortEl.parentElement.style.display = 'none';
    }

    // Animate detail sections
    document.querySelectorAll('.detail-section').forEach((el, i) => {
      el.style.animationDelay = `${i * 0.1}s`;
    });
  }
};

// ── BOOTSTRAP ──
document.addEventListener('DOMContentLoaded', async () => {
  // Load card data
  await Cards.load();

  // Generate stars in all dark pages
  document.querySelectorAll('.stars-container').forEach(c => {
    Animations.generateStars(c, 35);
  });
  document.querySelectorAll('.orbs-container').forEach(c => {
    Animations.generateOrbs(c);
  });

  // Sparkle trail
  Animations.initSparkleTrail();

  // Start at login or home
  const startPage = Auth.isLoggedIn() ? 'page-home' : 'page-login';
  Nav.go(startPage);

  // Logout button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      Auth.logout();
      Nav.history = [];
      Nav.go('page-login');
    });
  }

  // Back buttons (delegated)
  document.querySelectorAll('[data-back]').forEach(btn => {
    btn.addEventListener('click', () => Nav.back());
  });

  // Password toggle
  const pwToggle = document.getElementById('pw-toggle');
  const pwInput = document.getElementById('login-password');
  if (pwToggle && pwInput) {
    pwToggle.addEventListener('click', () => {
      pwInput.type = pwInput.type === 'password' ? 'text' : 'password';
      pwToggle.innerHTML = pwInput.type === 'password'
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
    });
  }
});