// Fidato Unified Brand — Interactive Controller

document.addEventListener('DOMContentLoaded', () => {
  // Scroll-reveal animations
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.section, .pillar-card, .gallery-card, .badge-card, .stat-card').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });

  // Waveform visualizer toggle
  const playBtn = document.getElementById('playBtn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const bars = document.querySelector('.waveform-bar');
      const playing = bars.classList.toggle('playing');
      playBtn.innerHTML = playing ? '&#10074;&#10074; Pause Visualizer' : '&#9654; Play Waveform Visualizer';
      if (typeof gtag === 'function') gtag('event', 'audio_visualizer_toggle', { state: playing ? 'play' : 'pause' });
    });
  }

  // Asset submission form
  const form = document.getElementById('assetForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('form-msg').innerText =
        '\u2713 Asset submission notes saved successfully! Your resources are ready to integrate into the Fidato ecosystem.';
      if (typeof gtag === 'function') gtag('event', 'form_submit', { form_id: 'asset_submission' });
      form.reset();
    });
  }

  // Smooth scroll with sticky-nav offset fallback (older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
