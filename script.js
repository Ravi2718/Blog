// Simple Search Filter
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.search-box');
  const cards = document.querySelectorAll('.blog-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
});
