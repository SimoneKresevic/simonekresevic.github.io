// ===========================
// Navigation & Scroll Effects
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize galaxy canvas
    initGalaxyCanvas();
    
    // Elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Navbar scroll effect
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
    
    // Active navigation link on scroll
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
    updateActiveLink(); // Call once on page load
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for just "#" links
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for fade-in animations
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
    
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(
        '.education-item, .experience-item, .project-card, .skill-category, .publication-item, .award-card'
    );
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Year update in footer
    const yearElement = document.querySelector('.footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
    
    // Console message (optional - can be removed)
    console.log('%c👋 Welcome to my website!', 'color: #ff0000; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with EPFL color palette', 'color: #666; font-size: 14px;');
});

// ===========================
// Scroll to top functionality (optional)
// ===========================

// Create scroll to top button
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
        background-color: var(--epfl-red);
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
    
    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// ===========================
// Performance optimization
// ===========================

// Debounce function for scroll events
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

// Contact Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactPopup = document.getElementById('contactPopup');
    const closePopup = document.getElementById('closePopup');
    
    // Apri popup quando si clicca "Contact Me"
    document.querySelector('a[href="contact.html"]').addEventListener('click', function(e) {
        e.preventDefault();
        contactPopup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Previene lo scroll del body
    });
    
    // Chiudi popup
    closePopup.addEventListener('click', function() {
        contactPopup.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Chiudi popup cliccando fuori dal contenuto
    contactPopup.addEventListener('click', function(e) {
        if (e.target === contactPopup) {
            contactPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Chiudi popup con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactPopup.classList.contains('active')) {
            contactPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

const polaroids = [
    { img: "https://picsum.photos/500/500?random=1", caption: "Yale University 2024 🔬" },
    { img: "https://picsum.photos/500/500?random=2", caption: "EMBEC Conference 🎤" },
    { img: "https://picsum.photos/500/500?random=3", caption: "Biomedical Lab 🧬" },
    { img: "https://picsum.photos/500/500?random=4", caption: "EU TalentON 2024 🏆" },
    { img: "https://picsum.photos/500/500?random=5", caption: "Research Project 🧪" },
    { img: "https://picsum.photos/500/500?random=6", caption: "Academic Event 🎓" },
    { img: "https://picsum.photos/500/500?random=7", caption: "Laboratory Work 🔍" },
    { img: "https://picsum.photos/500/500?random=8", caption: "Conference Talk 🎤" },
    { img: "https://picsum.photos/500/500?random=9", caption: "Team Collaboration 👥" },
    { img: "https://picsum.photos/500/500?random=10", caption: "Award Ceremony 🏅" },
    { img: "https://picsum.photos/500/500?random=11", caption: "Data Analysis 📊" },
    { img: "https://picsum.photos/500/500?random=12", caption: "Field Research 🌍" }
];

const corkboard = document.getElementById("corkboard");

polaroids.forEach((polaroid, index) => {
    // Rotazione più contenuta (-8° a +8°)
    const rotation = (Math.random() * 16 - 8).toFixed(2) + "deg";
    
    // Layout fisso per 12 foto: 4 colonne × 3 righe (desktop) / 2 colonne × 6 righe (mobile)
    const positions = calculateGridPosition(index);
    
    const polaroidPin = document.createElement("div");
    polaroidPin.className = "polaroid-pin";
    polaroidPin.style.setProperty("--rotation", rotation);
    polaroidPin.style.setProperty("--x", positions.x);
    polaroidPin.style.setProperty("--y", positions.y);
    polaroidPin.style.setProperty("--index", index);
    polaroidPin.style.zIndex = index + 1;

    polaroidPin.innerHTML = `
        <div class="pin red-pin"></div>
        <div class="polaroid-frame">
            <div class="polaroid-image">
                <img src="${polaroid.img}" alt="${polaroid.caption}" loading="lazy">
            </div>
            <div class="polaroid-caption">${polaroid.caption}</div>
        </div>
    `;

    corkboard.appendChild(polaroidPin);
});

// Funzione per calcolare posizioni in griglia fissa
function calculateGridPosition(index) {
    // Desktop: 4 colonne × 3 righe
    // Mobile: 2 colonne × 6 righe (gestito via CSS)
    const desktopCols = 4;
    const desktopRows = 3;
    
    const col = index % desktopCols;
    const row = Math.floor(index / desktopCols);
    
    // Calcola posizioni con margini adatti
    const horizontalSpacing = 80 / (desktopCols - 1); // 0% a 100%
    const verticalSpacing = 65 / (desktopRows - 1);   // 0% a 100%
    
    const baseX = 0 + (col * horizontalSpacing);
    const baseY = 0 + (row * verticalSpacing);
    
    // Piccola variazione random per look naturale
    const randomOffsetX = (Math.random() * 8 - 4);
    const randomOffsetY = (Math.random() * 8 - 4);
    
    return { 
        x: (baseX + randomOffsetX) + "%", 
        y: (baseY + randomOffsetY) + "%" 
    };
}

// ===========================
// Dynamic Galaxy Canvas
// ===========================

function initGalaxyCanvas() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create canvas element
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
    
    // Track mouse position relative to canvas
    hero.addEventListener('mousemove', function(event) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });
    
    // Reset mouse position when leaving hero section
    hero.addEventListener('mouseleave', function() {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
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