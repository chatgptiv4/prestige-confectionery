/**
 * Prestige Confectionery - Animations Module
 * Additional GSAP animations and scroll effects
 */

// Wait for GSAP to be available
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Advanced scroll animations
    document.addEventListener('DOMContentLoaded', () => {
        initAdvancedAnimations();
    });
}

function initAdvancedAnimations() {
    // Text reveal animation for headings
    const revealHeadings = document.querySelectorAll('.section-title');
    
    revealHeadings.forEach(heading => {
        // Split text into characters
        const text = heading.textContent;
        heading.innerHTML = text.split('').map(char => 
            char === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; transform: translateY(20px)">${char}</span>`
        ).join('');

        gsap.to(heading.querySelectorAll('span'), {
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.03,
            ease: 'power3.out'
        });
    });

    // Menu card hover parallax
    const menuCards = document.querySelectorAll('.menu-card');
    
    menuCards.forEach(card => {
        const img = card.querySelector('img');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            gsap.to(img, {
                x: x * 20,
                y: y * 20,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(img, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });

    // Gallery items staggered reveal
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            delay: (i % 4) * 0.1,
            ease: 'power3.out'
        });
    });

    // Testimonial quote animation
    const testimonialQuotes = document.querySelectorAll('.testimonial-quote');
    
    testimonialQuotes.forEach(quote => {
        gsap.from(quote, {
            scrollTrigger: {
                trigger: quote,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 0,
            rotation: -180,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    });

    // About badge bounce
    const aboutBadge = document.querySelector('.about-badge');
    
    if (aboutBadge) {
        gsap.from(aboutBadge, {
            scrollTrigger: {
                trigger: aboutBadge,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    }

    // Surprises badge pulse
    const surprisesBadge = document.querySelector('.surprises-badge');
    
    if (surprisesBadge) {
        gsap.to(surprisesBadge, {
            scale: 1.05,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }

    // Floating cards continuous animation
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, i) => {
        gsap.to(card, {
            y: i % 2 === 0 ? -15 : 15,
            duration: 2 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    });

    // Hero stats counter animation
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Contact methods stagger
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach((method, i) => {
        gsap.from(method, {
            scrollTrigger: {
                trigger: method,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            x: -30,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });

    // Footer content reveal
    const footerContent = document.querySelector('.footer-content');
    
    if (footerContent) {
        gsap.from(footerContent.children, {
            scrollTrigger: {
                trigger: footerContent,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }

    // Smooth scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });

    // Parallax for section backgrounds
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const bg = section.querySelector('.section-bg');
        if (bg) {
            gsap.to(bg, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    });

    // Magnetic effect for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            const rect = icon.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(icon, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Step number animation
    const stepNumbers = document.querySelectorAll('.step-number');
    
    stepNumbers.forEach((num, i) => {
        gsap.from(num, {
            scrollTrigger: {
                trigger: num,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            scale: 0,
            rotation: -360,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'back.out(1.7)'
        });
    });

    // Value items animation
    const valueItems = document.querySelectorAll('.value-item');
    
    valueItems.forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            x: -20,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Catering features animation
    const cateringFeatures = document.querySelectorAll('.catering-features li');
    
    cateringFeatures.forEach((feature, i) => {
        gsap.from(feature, {
            scrollTrigger: {
                trigger: feature,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            x: -20,
            opacity: 0,
            duration: 0.4,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Benefits animation
    const benefits = document.querySelectorAll('.benefit-item');
    
    benefits.forEach((benefit, i) => {
        gsap.from(benefit, {
            scrollTrigger: {
                trigger: benefit,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            x: -20,
            opacity: 0,
            duration: 0.4,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Menu filter buttons animation
    const filterBtns = document.querySelectorAll('.filter-btn, .gallery-filter');
    
    filterBtns.forEach((btn, i) => {
        gsap.from(btn, {
            scrollTrigger: {
                trigger: btn.parentElement,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 20,
            opacity: 0,
            duration: 0.4,
            delay: i * 0.05,
            ease: 'power3.out'
        });
    });
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initAdvancedAnimations };
}
