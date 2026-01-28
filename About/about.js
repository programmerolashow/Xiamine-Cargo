const btn = document.getElementById('showMoreBtn');
const hiddenItems = document.querySelectorAll('gallery-item.hidden');

btn.addEventListener('click', () => {
    hiddenItems.forEach(item => {
        item.classList.toggle('hidden');
    });
    // Toggle arrow direction for feedback
    btn.querySelector('i').classList.toggle('ph-arrow-left');
});