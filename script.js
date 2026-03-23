Now let me create the JavaScript file and the remaining HTML pages. I'll create them in a compressed format due to length:
Action: file_editor create /app/html-version/script.js --file-text "// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Course Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('[data-category]');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        courseCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'grid';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Form Submission Handler
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div style=\"font-size: 24px;\">${type === 'success' ? '✓' : '✗'}</div>
        <div>
            <div style=\"font-weight: 600; color: #111827; margin-bottom: 5px;\">${type === 'success' ? 'Success!' : 'Error!'}</div>
            <div style=\"font-size: 14px; color: #6b7280;\">${message}</div>
        </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Admission Form Handler
const admissionForm = document.getElementById('admissionForm');
if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            course: document.getElementById('course').value,
            qualification: document.getElementById('qualification').value,
            address: document.getElementById('address').value,
            message: document.getElementById('message').value
        };
        
        console.log('Admission Form Submitted:', formData);
        
        showToast('Application submitted successfully! We will contact you within 24 hours.', 'success');
        
        // Reset form
        admissionForm.reset();
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        console.log('Contact Form Submitted:', formData);
        
        showToast('Message sent successfully! We will get back to you within 24 hours.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Animation on Scroll (Simple Version)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.course-card, .feature-card, .testimonial-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
"
Observation: Create successful: /app/html-version/script.js