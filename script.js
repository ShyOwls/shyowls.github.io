document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const submitButton = document.getElementById('submit-tasks');
  const jumpToTopButton = document.getElementById('jump-to-top');
  const banner = document.getElementById('completion-banner');

  submitButton.addEventListener('click', () => {
    if (Array.from(checkboxes).every(cb => cb.checked)) {
      banner.classList.remove('hidden');
      banner.classList.add('visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      jumpToTopButton.style.display = 'inline-block';
    } else {
      banner.classList.add('hidden');
      banner.classList.remove('visible');
    }
  });

  jumpToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
