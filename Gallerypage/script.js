
function toggleVisibility(category) {
    const allImages = document.querySelectorAll('.image-container');

    allImages.forEach(img => {
        if (category == 'all' || img.classList.contains(category)) {
            img.style.display = 'inline';
        } else {
            img.style.display = 'none';
        }
    });
}
