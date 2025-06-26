function filterImages(category) {
  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => {
    const imgCategory = img.getAttribute('data-category');
    if (category === 'all' || category === imgCategory) {
      img.style.display = 'inline-block';
    } else {
      img.style.display = 'none';
    }
  });
}
