document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded');
  
  const viewAllButton = document.querySelector('[data-view-all-button]');
  const productContainer = document.querySelector('[data-display-first-four]');
  
  console.log('Button found:', viewAllButton);
  console.log('Container found:', productContainer);
  
  if (viewAllButton && productContainer) {
    viewAllButton.addEventListener('click', () => {
      console.log('Button clicked');
      const hiddenSlides = productContainer.querySelectorAll('.mobile-view-more:nth-child(n + 5)');
      console.log('Hidden slides found:', hiddenSlides.length);
      
      hiddenSlides.forEach(slide => {
        slide.style.display = 'block';
      });
      viewAllButton.style.display = 'none';
    });
  } else {
    console.error('Required elements not found');
  }
});