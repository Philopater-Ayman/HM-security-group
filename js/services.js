document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const revealElements = document.querySelectorAll('.reveal');
    const learnMoreButtons = document.querySelectorAll('.cta-btn');

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

    // Reveal animations on scroll
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

    // Learn More Buttons - Navigate to Service Pages
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const servicePage = button.getAttribute('data-service');
            if (servicePage) {
                window.location.href = `services/${servicePage}.html`;
            }
        });
    });
});
