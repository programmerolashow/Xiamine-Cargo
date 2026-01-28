const galleryGrid = document.getElementById('galleryGrid');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentSlide = 0;

function getItemsPerSlide() {
    const width = window.innerWidth;
    if (width <= 768) return 1;
    if (width <= 992) return 2;
    return 3;
}

function slideGallery(direction) {
    const itemsPerSlide = getItemsPerSlide();
    const totalItems = galleryGrid.children.length;
    const maxSlide = Math.ceil(totalItems / itemsPerSlide) - 1;

    if (direction === 'next') {
        currentSlide++;
        if (currentSlide > maxSlide) currentSlide = 0; // loop
    } else if (direction === 'prev') {
        currentSlide--;
        if (currentSlide < 0) currentSlide = maxSlide; // loop
    }

    // Calculate total width to slide
    let slideWidth = 0;
    for (let i = 0; i < itemsPerSlide; i++) {
        const item = galleryGrid.children[i];
        slideWidth += item.offsetWidth;
    }
    slideWidth += 20 * (itemsPerSlide - 1); // include gaps

    galleryGrid.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

// Button events
nextBtn.addEventListener('click', () => slideGallery('next'));
prevBtn.addEventListener('click', () => slideGallery('prev'));

// Reset on resize
window.addEventListener('resize', () => {
    currentSlide = 0;
    galleryGrid.style.transform = `translateX(0px)`;
});
