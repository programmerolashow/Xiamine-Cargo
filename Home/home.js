function showLogin() {
    // Buttons Styling
    document.getElementById('loginBtn').classList.add('active-btn');
    document.getElementById('registerBtn').classList.remove('active-btn');

    // Content Display
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
    // Buttons Styling
    document.getElementById('registerBtn').classList.add('active-btn');
    document.getElementById('loginBtn').classList.remove('active-btn');

    // Content Display
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

// Login Validation
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

// Register Validation
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
