document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    header.style.cursor = 'pointer';
    header.addEventListener('click', e => {
      // Don’t hijack clicks on the nav/menu
      if (!e.target.closest('#nav')) {
        window.location.href = 'index.html';
      }
    });
  });
  