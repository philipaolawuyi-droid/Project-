/**
 * Frontend script for Project - web interface
 */

(function() {
    'use strict';
    
    /**
     * Initialize the web interface
     */
    function init() {
        setupNavigation();
        setupScrollBehavior();
        logInitialization();
    }
    
    /**
     * Setup smooth navigation
     */
    function setupNavigation() {
        const navLinks = document.querySelectorAll('.navigation a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    /**
     * Setup scroll behavior tracking
     */
    function setupScrollBehavior() {
        let scrollTimeout;
        
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            
            scrollTimeout = setTimeout(function() {
                updateActiveNavigation();
            }, 100);
        });
    }
    
    /**
     * Update active navigation based on scroll position
     */
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.navigation a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    /**
     * Log initialization message
     */
    function logInitialization() {
        console.log('Project - Web Interface Initialized');
        console.log('Version: 1.0.0');
        console.log('Language: JavaScript');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
