// Fidato Ecosystem Interactive Controller

document.addEventListener('DOMContentLoaded', () => {
  // Set Content Creator Profile ('art') as default active tab on load
  switchTab('art');
});

function switchTab(tabId) {
  const allNavBtns = document.querySelectorAll('.nav-btn');
  allNavBtns.forEach(btn => btn.classList.remove('active'));

  const sections = document.querySelectorAll('.tab-section');

  if (tabId === 'all') {
    sections.forEach(sec => {
      if (sec.id === 'tab-art' || sec.id === 'tab-audio' || sec.id === 'tab-it') {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
    document.querySelector('.hero-section').style.display = 'block';
    if (event && event.target) event.target.classList.add('active');
  } else {
    document.querySelector('.hero-section').style.display = tabId === 'resume' || tabId === 'assets' ? 'none' : 'block';
    
    sections.forEach(sec => {
      if (sec.id === 'tab-' + tabId) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });

    // Highlight button
    const targetBtn = document.getElementById('nav-btn-' + tabId);
    if (targetBtn) targetBtn.classList.add('active');
  }
}

let isPlaying = false;
function toggleAudioDemo() {
  const btn = document.querySelector('.play-btn');
  const bars = document.querySelectorAll('.bar');

  if (!isPlaying) {
    isPlaying = true;
    btn.innerHTML = '&#10074;&#10074; Pause Visualizer';
    bars.forEach(bar => bar.style.animation = 'pulseWave 0.6s infinite alternate');
  } else {
    isPlaying = false;
    btn.innerHTML = '&#9654; Play Waveform Visualizer';
    bars.forEach(bar => bar.style.animation = 'none');
  }
}

function handleAssetSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.innerText = '✓ Asset submission notes saved successfully! Your resources are ready to integrate into the Fidato ecosystem.';
}

function openContactModal() {
  alert("Advisory & Creative Commission Booking:\n\nEmail: contact@fidato.art\nArt Portfolio: https://fidatosartportfolio.nxtdev.xyz/\nSuno Audio Profile: https://suno.com/@fidato_warrior");
}
