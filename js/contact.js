document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input, textarea');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    let isMobileMenuOpen = false;
    let lastScrollY = window.scrollY;

    // Mobile Menu Toggle
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        isMobileMenuOpen = !isMobileMenuOpen;
    });

    // Close mobile menu on click outside
    document.addEventListener('click', (e) => {
        if (isMobileMenuOpen && !e.target.closest('.navbar')) {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
            isMobileMenuOpen = false;
        }
    });

    // Scroll-based navbar hide/show
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.classList.add('hidden'); // Hide navbar on scroll down
        } else {
            navbar.classList.remove('hidden'); // Show navbar on scroll up
        }

        lastScrollY = currentScrollY;
    });

    // Navbar opacity adjustment on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 29, 33, 0.079)'; // Semi-transparent navbar
            navbar.style.padding = '1rem 0';
        } else {
            navbar.style.background = 'rgba(26, 29, 33, 0.079)'; // Adjust opacity when at top
            navbar.style.padding = '1.5rem 0';
        }
    });

    // Form Validation
    form.addEventListener('submit', (e) => {
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valid = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            }
        });

        // Email Validation
        const email = form.querySelector('input[type="email"]');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            valid = false;
            email.style.border = '2px solid red';
        }

        if (!valid) {
            e.preventDefault(); // Prevent form submission if invalid
            alert('Please fill in all required fields correctly.');
        }
    });

    // Checkbox Click Animation
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            checkbox.parentElement.classList.toggle('checked', checkbox.checked);
        });
    });
});
