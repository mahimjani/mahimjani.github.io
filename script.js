// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations with enhanced effects
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Add specific animations based on section
            if (entry.target.id === 'about') {
                const paragraphs = entry.target.querySelectorAll('p');
                paragraphs.forEach((p, index) => {
                    p.style.animationDelay = `${index * 0.2}s`;
                    p.style.opacity = '1';
                });
            }
            
            if (entry.target.id === 'projects') {
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 0.3}s`;
                    card.style.opacity = '1';
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const scroll = window.pageYOffset;
        if (section.hasAttribute('data-parallax')) {
            section.style.backgroundPositionY = `${scroll * 0.5}px`;
        }
    });
});

// Enhanced form handling with animations
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = contactForm.querySelector('button');
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    // Animate button
    button.style.transform = 'scale(0.95)';
    button.style.boxShadow = '0 0 30px rgba(0, 255, 157, 0.5)';
    
    // Animate inputs
    inputs.forEach(input => {
        input.style.borderColor = 'var(--primary-color)';
        input.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.2)';
    });
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
        inputs.forEach(input => {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        });
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    }, 500);
});