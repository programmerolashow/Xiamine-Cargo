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
        if (currentSlide > maxSlide) currentSlide = 0;
    } else if (direction === 'prev') {
        currentSlide--;
        if (currentSlide < 0) currentSlide = maxSlide;
    }

    let slideWidth = 0;
    for (let i = 0; i < itemsPerSlide; i++) {
        const item = galleryGrid.children[i];
        slideWidth += item.offsetWidth;
    }
    slideWidth += 20 * (itemsPerSlide - 1); // include gaps

    galleryGrid.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}


nextBtn.addEventListener('click', () => slideGallery('next'));
prevBtn.addEventListener('click', () => slideGallery('prev'));


window.addEventListener('resize', () => {
    currentSlide = 0;
    galleryGrid.style.transform = `translateX(0px)`;
});


// FORM VALIDATION

function showLogin() {
    document.getElementById('loginBtn').classList.add('active-btn');
    document.getElementById('registerBtn').classList.remove('active-btn');

    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerBtn').classList.add('active-btn');
    document.getElementById('loginBtn').classList.remove('active-btn');

    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Welcome back! Login successful for ${email}`);
}

function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !phone || !password || !confirmPassword) {
        alert("Please fill out all 5 fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert(`Welcome ${name}! Registration successful.`);
}


// TESTIMONIAL TOGGLE

const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.pagination-dot');
let current = 0;

function showTestimonial(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  current = (current + 1) % cards.length;
  showTestimonial(current);
}

setInterval(nextTestimonial, 5000);

