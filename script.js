// ===== TAB FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding panel
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Initialize scroll animations
    initScrollAnimations();
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .center-card, .tabs-wrapper');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ===== CTA FUNCTIONS =====
function requestConsultation() {
    const phone = '34644291823'; // Cambiar por el número real
    const message = 'Hola, me gustaría solicitar información sobre una consulta neuropsicológica.';
    openWhatsApp(phone, message);
}

function scheduleAppointment() {
    const phone = '34644291823'; // Cambiar por el número real
    const message = 'Hola, me gustaría agendar una cita.';
    openWhatsApp(phone, message);
}

function openWhatsApp(phone, message) {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ===== CENTER FUNCTIONS =====
function openCenter(center) {
    if (center === 'ivann') {
        // Redirigir a la página de IVANN o mostrar modal
        // alert('Redirigiendo a IVANN Instituto Valenciano de Neurociencias...');
        window.open('https://www.ivann.es', '_blank');
    } else if (center === 'clases') {
        // Redirigir a la página de Clases Con Ali
        // alert('Redirigiendo a Clases Con Ali tu Pedagoga...');
        window.open('https://www.clasesconalitupedagoga.es', '_blank');
    }
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});
