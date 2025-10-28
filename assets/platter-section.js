document.addEventListener('DOMContentLoaded', () => {
  const viewAllButton = document.querySelector('[data-view-all-button]');
  const productContainer = document.querySelector('[data-display-first-four]');
  
  if (viewAllButton && productContainer) {
    viewAllButton.addEventListener('click', () => {
      const hiddenSlides = productContainer.querySelectorAll('.mobile-view-more:nth-child(n + 5)');

      hiddenSlides.forEach(slide => {
        slide.style.display = 'block';
      });
      viewAllButton.style.display = 'none';
    });
  }
});