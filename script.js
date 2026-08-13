/* ==========================================================================
   BHUKYA SAIDA NAIK - PORTFOLIO INTERACTIVE SCRIPT
   Description: Clean JavaScript for dark/light mode toggle, mobile navigation,
                smooth scrolling, skill animation, modal calculator, & contact form.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. THEME TOGGLE (DARK / LIGHT MODE)
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Check saved theme in localStorage or user preference
    const savedTheme = localStorage.getItem('saida-portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-sun';
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = 'light';

            if (currentTheme === 'light') {
                newTheme = 'dark';
                themeIcon.className = 'fa-solid fa-sun';
            } else {
                newTheme = 'light';
                themeIcon.className = 'fa-solid fa-moon';
            }

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('saida-portfolio-theme', newTheme);
        });
    }

    // ----------------------------------------------------------------------
    // 2. MOBILE NAVIGATION MENU TOGGLE
    // ----------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isOpen = navMenu.classList.contains('active');
            mobileMenuBtn.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        });

        // Close menu when clicking a navigation link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (mobileMenuBtn.querySelector('i')) {
                    mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 3. ACTIVE NAVBAR LINK HIGHLIGHT ON SCROLL
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (correspondingNavLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingNavLink.classList.add('active');
                } else {
                    correspondingNavLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // ----------------------------------------------------------------------
    // 4. BACK TO TOP BUTTON VISIBILITY & SCROLL
    // ----------------------------------------------------------------------
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ----------------------------------------------------------------------
    // 5. DOWNLOAD RESUME BUTTON HANDLER
    // ----------------------------------------------------------------------
    const downloadResumeBtn = document.getElementById('download-resume-btn');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', (e) => {
            const href = downloadResumeBtn.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                alert("📝 Note: Resume PDF placeholder. Replace href='#' in index.html with the link to your resume file e.g., href='resume.pdf'.");
            }
        });
    }

    // ----------------------------------------------------------------------
    // 6. CONTACT FORM SUBMISSION
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('contact-name').value;
            
            // Display friendly success feedback
            if (formResponse) {
                formResponse.className = 'form-response success';
                formResponse.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you <strong>${nameInput}</strong>! Your message has been received. BHUKYA SAIDA NAIK will get back to you soon.`;
                
                // Clear input fields
                contactForm.reset();

                // Hide response after 6 seconds
                setTimeout(() => {
                    formResponse.style.display = 'none';
                }, 6000);
            }
        });
    }

});

// --------------------------------------------------------------------------
// 7. SMART AGRICULTURE INVESTMENT CALCULATOR MODAL FUNCTIONS
// --------------------------------------------------------------------------
function openAgriCalculatorModal() {
    const modal = document.getElementById('agri-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAgriCalculatorModal() {
    const modal = document.getElementById('agri-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking on dark overlay outside content box
window.addEventListener('click', (e) => {
    const modal = document.getElementById('agri-modal');
    if (e.target === modal) {
        closeAgriCalculatorModal();
    }
});

// Calculate total investment logic
function calculateAgriInvestment() {
    const crop = document.getElementById('crop-select').value;
    const acres = parseFloat(document.getElementById('land-acres').value) || 0;
    const fieldType = document.getElementById('field-type').value;
    const labor = parseFloat(document.getElementById('labor-cost').value) || 0;
    const machinery = parseFloat(document.getElementById('machinery-cost').value) || 0;
    const materials = parseFloat(document.getElementById('pesticide-cost').value) || 0;

    // Rates per acre in INR
    let cropRatePerAcre = 25000;
    if (crop === 'paddy') cropRatePerAcre = 25000;
    else if (crop === 'cotton') cropRatePerAcre = 35000;
    else if (crop === 'chilli') cropRatePerAcre = 50000;
    else if (crop === 'maize') cropRatePerAcre = 20000;
    else if (crop === 'other') cropRatePerAcre = 30000;

    let baseCropCost = cropRatePerAcre * acres;

    // Adjust for soil / field type
    if (fieldType === 'dry') baseCropCost *= 1.10; // +10%
    else if (fieldType === 'red') baseCropCost *= 1.05; // +5%

    const operationalCost = labor + machinery;
    const totalMaterialCost = materials;
    const grandTotal = baseCropCost + operationalCost + totalMaterialCost;

    // Update Result Display
    document.getElementById('res-base-cost').textContent = `₹${Math.round(baseCropCost).toLocaleString('en-IN')}`;
    document.getElementById('res-operational-cost').textContent = `₹${Math.round(operationalCost).toLocaleString('en-IN')}`;
    document.getElementById('res-material-cost').textContent = `₹${Math.round(totalMaterialCost).toLocaleString('en-IN')}`;
    document.getElementById('res-total-cost').textContent = `₹${Math.round(grandTotal).toLocaleString('en-IN')}`;

    document.getElementById('agri-result-box').style.display = 'block';
}
