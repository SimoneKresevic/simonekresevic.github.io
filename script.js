// ===========================
// Navigation & Scroll Effects
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initGalaxyCanvas();
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); 
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; 
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll(
        '.education-item, .experience-item, .project-card, .skill-category, .publication-item, .award-card'
    );
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    const yearElement = document.querySelector('.footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
    
    console.log('%c👋 Welcome to my website!', 'color: #ff0000; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with favCol color palette', 'color: #666; font-size: 14px;');
});

// ===========================
// Scroll to top functionality (optional)
// ===========================

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.setAttribute('id', 'scrollToTop');
    button.setAttribute('aria-label', 'Scroll to top');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--favCol-red);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}

createScrollToTopButton();


function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const contactPopup = document.getElementById('contactPopup');
    const closePopup = document.getElementById('closePopup');
    
    document.querySelector('a[href="contact.html"]').addEventListener('click', function(e) {
        e.preventDefault();
        contactPopup.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    });
    
    closePopup.addEventListener('click', function() {
        contactPopup.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    contactPopup.addEventListener('click', function(e) {
        if (e.target === contactPopup) {
            contactPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactPopup.classList.contains('active')) {
            contactPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// ===========================
// Dynamic Galaxy Canvas
// ===========================

function initGalaxyCanvas() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '50%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    hero.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouse = { x: null, y: null, radius: 150 };
    
    hero.addEventListener('mousemove', function(event) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });
    
    hero.addEventListener('mouseleave', function() {
        mouse.x = null;
        mouse.y = null;
    });
    
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
        constructor() {
            this.reset();
            this.baseX = this.x;
            this.baseY = this.y;
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.baseX = this.x;
            this.baseY = this.y;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.8 + 0.2;
            this.fadeSpeed = (Math.random() - 0.5) * 0.01;
            this.density = (Math.random() * 30) + 1;
            
            // Color: mostly white, some red
            const isRed = Math.random() < 0.15;
            if (isRed) {
                const redIntensity = Math.floor(Math.random() * 56) + 200; // 200-255
                this.color = `rgba(${redIntensity}, 0, 0, ${this.opacity})`;
            } else {
                this.color = `rgba(255, 255, 255, ${this.opacity})`;
            }
        }
        
        update() {
            // Base movement
            this.baseX += this.speedX;
            this.baseY += this.speedY;
            
            // Fade in and out
            this.opacity += this.fadeSpeed;
            if (this.opacity <= 0.1 || this.opacity >= 1) {
                this.fadeSpeed *= -1;
            }
            
            // Wrap around edges for base position
            if (this.baseX < 0) this.baseX = canvas.width;
            if (this.baseX > canvas.width) this.baseX = 0;
            if (this.baseY < 0) this.baseY = canvas.height;
            if (this.baseY > canvas.height) this.baseY = 0;
            
            // Mouse attraction effect
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.baseX;
                let dy = mouse.y - this.baseY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                
                if (distance < mouse.radius) {
                    this.x = this.baseX + directionX;
                    this.y = this.baseY + directionY;
                } else {
                    // Smooth return to base position
                    this.x += (this.baseX - this.x) * 0.05;
                    this.y += (this.baseY - this.y) * 0.05;
                }
            } else {
                // Smooth return to base position when no mouse
                this.x += (this.baseX - this.x) * 0.05;
                this.y += (this.baseY - this.y) * 0.05;
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, this.opacity + ')');
            ctx.fill();
            
            // Add glow effect for larger particles
            if (this.size > 1.5) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, (this.opacity * 0.2) + ')');
                ctx.fill();
            }
        }
    }
    
    // Create particles
    function createParticles(count) {
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Initialize based on screen size
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    createParticles(particleCount);
    animate();
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
}