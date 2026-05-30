// ── AUTH MODULE ──
const Auth = {
  login(email, password) {
    if (!email || !email.includes('@')) return { ok: false, error: 'Email inválido' };
    if (!password || password.length < 3) return { ok: false, error: 'Contraseña muy corta' };
    const user = { email, name: email.split('@')[0], loginAt: Date.now() };
    localStorage.setItem('co3_user', JSON.stringify(user));
    return { ok: true, user };
  },
  logout() {
    localStorage.removeItem('co3_user');
  },
  getUser() {
    try { return JSON.parse(localStorage.getItem('co3_user')); }
    catch { return null; }
  },
  isLoggedIn() { return !!this.getUser(); }
};