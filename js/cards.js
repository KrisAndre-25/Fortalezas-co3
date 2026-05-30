// ── CARDS MODULE ──
const Cards = {
  data: null,

  async load() {
    if (this.data) return this.data;
    const r = await fetch('data/cards.json');
    this.data = await r.json();
    return this.data;
  },

  getCategory(id) {
    return this.data?.categories.find(c => c.id === id);
  },

  getCard(categoryId, cardId) {
    const cat = this.getCategory(categoryId);
    return cat?.subcards?.find(c => c.id === cardId);
  },

  // Build category card HTML
  renderCategoryCard(cat, index) {
    const floatClass = `home-card-${index + 1}`;
    const rotations = [-8, -3, 2, 6, -5];
    const rot = rotations[index % rotations.length];
    const verticals = [20, 10, 0, 10, 20];
    const vOff = verticals[index % verticals.length];

    return `
      <div class="category-card tilt-card ${floatClass} animate-fadeUp stagger-${index + 1}"
           data-category="${cat.id}"
           style="background: ${cat.gradient}; transform: rotate(${rot}deg) translateY(${vOff}px); margin-bottom: ${vOff}px;">
        <div>
          <div class="card-icon">${cat.icon}</div>
          <div class="card-title">${cat.title}</div>
          <div class="card-subtitle">${cat.subtitle}</div>
        </div>
        <div class="card-corner-logo">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" stroke="white" stroke-width="2" fill="none"/>
            <circle cx="20" cy="20" r="5" fill="white" opacity="0.6"/>
          </svg>
        </div>
        <div class="card-glow"></div>
      </div>`;
  },

  // Build virtue/sub card
  renderSubCard(card, index) {
    return `
      <div class="virtue-card animate-fadeUp stagger-${(index % 6) + 1}"
           data-card="${card.id}"
           style="background: ${card.gradient}; animation-delay: ${index * 0.07}s;">
        <div>
          <div class="virtue-title">${card.title}</div>
          <div class="virtue-power">${card.poder}</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" opacity="0.3" style="align-self:flex-end">
          <path d="M7 10h6M10 7l3 3-3 3" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>`;
  }
};