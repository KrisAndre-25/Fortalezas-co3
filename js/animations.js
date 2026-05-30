// ── ANIMATIONS MODULE ──
const Animations = {

  // 3D tilt on mouse move
  initTilt(container) {
    container.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const baseRot = parseFloat(card.style.transform?.match(/rotate\(([^)]+)deg\)/)?.[1] || 0);
        card.classList.remove('resetting');
        card.style.transform = `rotate(${baseRot}deg) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale(1.06) translateZ(20px)`;
        card.classList.add('hovered');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.add('resetting');
        const baseRot = card.dataset.baseRot || '0';
        const vOff = card.dataset.vOff || '0';
        card.style.transform = '';
        card.classList.remove('hovered');
        setTimeout(() => card.classList.remove('resetting'), 600);
      });
    });
  },

  // Parallax on mouse move for background
  initParallax(el) {
    if (!el) return;
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.querySelectorAll('.parallax-layer').forEach(layer => {
        const depth = parseFloat(layer.dataset.depth || 0.5);
        layer.style.transform = `translate(${x * depth * 30}px, ${y * depth * 20}px)`;
      });
    });
  },

  // Stagger animate children
  stagger(parent, cls, baseDelay = 0) {
    parent.querySelectorAll(cls).forEach((el, i) => {
      el.style.animationDelay = `${baseDelay + i * 0.08}s`;
      el.style.animationFillMode = 'both';
    });
  },

  // Sparkle trail on cursor
  initSparkleTrail() {
    let lastTime = 0;
    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastTime < 80) return;
      lastTime = now;
      const s = document.createElement('div');
      s.style.cssText = `
        position: fixed; pointer-events: none; z-index: 9999;
        left: ${e.clientX}px; top: ${e.clientY}px;
        width: 6px; height: 6px; border-radius: 50%;
        background: radial-gradient(circle, rgba(168,85,247,0.9), transparent);
        transform: translate(-50%, -50%) scale(1);
        transition: transform 0.6s ease, opacity 0.6s ease;
      `;
      document.body.appendChild(s);
      requestAnimationFrame(() => {
        s.style.transform = 'translate(-50%, -50%) scale(2.5)';
        s.style.opacity = '0';
      });
      setTimeout(() => s.remove(), 600);
    });
  },

  // Generate background stars
  generateStars(container, count = 40) {
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      const size = Math.random() * 2.5 + 0.5;
      s.className = 'star';
      s.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --dur: ${2 + Math.random() * 3}s;
        --delay: -${Math.random() * 4}s;
        opacity: ${0.1 + Math.random() * 0.4};
      `;
      container.appendChild(s);
    }
  },

  // Generate orbiting background elements
  generateOrbs(container, count = 3) {
    const colors = ['rgba(109,40,217,0.3)', 'rgba(59,7,100,0.4)', 'rgba(30,30,80,0.35)'];
    for (let i = 0; i < count; i++) {
      const orb = document.createElement('div');
      orb.className = 'bg-orb';
      const size = 200 + Math.random() * 300;
      orb.style.cssText = `
        width: ${size}px; height: ${size}px;
        background: ${colors[i % colors.length]};
        left: ${Math.random() * 100 - 10}%;
        top: ${Math.random() * 100 - 10}%;
        --drift-dur: ${10 + i * 4}s;
        animation-delay: -${i * 3}s;
      `;
      container.appendChild(orb);
    }
  }
};