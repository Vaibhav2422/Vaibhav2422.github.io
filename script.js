// Create cursor spotlight element
const cursorSpotlight = document.createElement('div');
cursorSpotlight.className = 'cursor-spotlight';
document.body.appendChild(cursorSpotlight);

// Track cursor movement
document.addEventListener('mousemove', (e) => {
    cursorSpotlight.style.left = e.clientX + 'px';
    cursorSpotlight.style.top = e.clientY + 'px';
});

// Hide cursor spotlight when leaving window
document.addEventListener('mouseleave', () => {
    cursorSpotlight.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorSpotlight.style.opacity = '1';
});

// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add animated class to elements for entrance animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Initialize animations
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .info-item, .social-link');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
    });
});

// Simple particle effect for background
document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.querySelector('.home-section');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        homeSection.appendChild(particle);
    }
});

// Add CSS for particles dynamically
const particleStyles = `
    .particle {
        position: absolute;
        background: rgba(0, 243, 255, 0.5);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 243, 255, 0.8);
        animation: floatParticle linear infinite;
        z-index: -1;
    }
    
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-100vh) translateX(20vw);
            opacity: 0;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.innerText = particleStyles;
document.head.appendChild(styleSheet);

// Form submission handling (if you add a form later)
function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    document.getElementById('contact-form').reset();
}

// Add scroll to top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '&uarr;';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add CSS for scroll to top button
const scrollTopStyles = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 0 15px rgba(0, 243, 255, 0.4);
        transition: all 0.3s ease;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(0, 243, 255, 0.6);
    }
`;

const scrollTopStyleSheet = document.createElement('style');
scrollTopStyleSheet.innerText = scrollTopStyles;
document.head.appendChild(scrollTopStyleSheet);