document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const banner = document.getElementById('completion-banner');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (Array.from(checkboxes).every(cb => cb.checked)) {
        banner.classList.remove('hidden');
      } else {
        banner.classList.add('hidden');
      }
    });
  });
});
