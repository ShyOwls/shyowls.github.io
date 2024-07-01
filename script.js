document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const submitButton = document.getElementById('submit-tasks');
  const banner = document.getElementById('completion-banner');

  submitButton.addEventListener('click', () => {
    if (Array.from(checkboxes).every(cb => cb.checked)) {
      banner.classList.remove('hidden');
      banner.classList.add('visible');
    } else {
      banner.classList.add('hidden');
      banner.classList.remove('visible');
    }
  });
});
