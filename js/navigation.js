// ── NAVIGATION MODULE ──
const Nav = {
  currentPage: null,
  history: [],

  go(pageId, params = {}) {
    const next = document.getElementById(pageId);
    if (!next) return;
    if (this.currentPage) {
      const prev = document.getElementById(this.currentPage);
      if (prev) {
        prev.classList.remove('active');
        prev.classList.add('exit');
        setTimeout(() => prev.classList.remove('exit'), 600);
      }
      this.history.push({ page: this.currentPage, params: App.state });
    }
    // Update state
    if (params.categoryId) App.state.categoryId = params.categoryId;
    if (params.cardId) App.state.cardId = params.cardId;

    next.classList.add('active');
    next.classList.remove('exit');
    this.currentPage = pageId;

    // Trigger page render
    if (typeof Pages[pageId] === 'function') {
      requestAnimationFrame(() => Pages[pageId](params));
    }
  },

  back() {
    const prev = this.history.pop();
    if (prev) this.go(prev.page, prev.params);
  }
};