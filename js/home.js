document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const testimonialsTrack = document.querySelector('.testimonials-track');
    
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

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
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

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Navbar scroll effect & Opacity Adjustment
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 29, 33, 0.079)'; // Semi-transparent navbar
            navbar.style.padding = '1rem 0';
        } else {
            navbar.style.background = 'rgba(26, 29, 33, 0.079)'; // Adjust opacity when at top
            navbar.style.padding = '1.5rem 0';
        }
    });

    // Testimonials Carousel Logic
    if (testimonialsTrack) {
        // Clone testimonials for infinite loop
        testimonialsTrack.innerHTML += testimonialsTrack.innerHTML;

        // Handle animation reset
        const handleAnimationIteration = () => {
            testimonialsTrack.style.transform = 'translateX(0)';
        };

        testimonialsTrack.addEventListener('animationiteration', handleAnimationIteration);
    }
});
