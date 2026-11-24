'use strict';

function updateClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;
  const now = new Date();
  const timeStr = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta', hour12: false });
  clockEl.textContent = `${timeStr} WIB`;
}

setInterval(updateClock, 1000);
updateClock();

const btnCopy = document.getElementById('btn-copy');
if (btnCopy) {
  btnCopy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const original = btnCopy.textContent;
      btnCopy.textContent = '✅ Berhasil Disalin!';
      btnCopy.style.borderColor = 'var(--success)';
      setTimeout(() => {
        btnCopy.textContent = original;
        btnCopy.style.borderColor = 'var(--border)';
      }, 2000);
    } catch {
      alert('Tautan: ' + window.location.href);
    }
  });
}
