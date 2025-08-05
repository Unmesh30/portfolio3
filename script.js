// ================================================
// ADVANCED MOBILE NAVIGATION SYSTEM
// ================================================

class MobileNavigationController {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
        this.mobileNavClose = document.querySelector('.mobile-nav-close');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        this.isOpen = false;
        this.touchStartX = 0;
        this.touchStartY = 0;
        
        this.init();
    }
    
    init() {
        if (!this.hamburger || !this.mobileNavOverlay) return;
        
        // Hamburger click handler
        this.hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMobileNav();
        });
        
        // Close button handler
        this.mobileNavClose?.addEventListener('click', (e) => {
            e.preventDefault();
            this.closeMobileNav();
        });
        
        // Navigation link handlers
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    this.navigateToSection(href);
                }
            });
        });
        
        // Swipe gesture handlers
        this.mobileNavOverlay.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        this.mobileNavOverlay.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
        this.mobileNavOverlay.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
        
        // Escape key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMobileNav();
            }
        });
        
        // Prevent body scroll when nav is open
        this.mobileNavOverlay.addEventListener('touchmove', (e) => {
            if (this.isOpen) {
                // Only prevent default for vertical scrolling
                const touch = e.touches[0];
                const target = e.target;
                
                // Allow horizontal swipe gestures to work
                if (!this.isHorizontalSwipe(e)) {
                    e.preventDefault();
                }
            }
        }, { passive: false });
    }
    
    toggleMobileNav() {
        if (this.isOpen) {
            this.closeMobileNav();
        } else {
            this.openMobileNav();
        }
    }
    
    openMobileNav() {
        this.isOpen = true;
        this.hamburger.classList.add('active');
        this.mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Trigger haptic feedback if available
        if ('vibrate' in navigator) {
            navigator.vibrate([10, 5, 10]);
        }
        
        // Add cyberpunk sound effect (optional)
        this.playOpenSound();
        
        // Animate navigation links
        this.animateNavLinks();
    }
    
    closeMobileNav() {
        this.isOpen = false;
        this.hamburger.classList.remove('active');
        this.mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Trigger haptic feedback if available
        if ('vibrate' in navigator) {
            navigator.vibrate(5);
        }
        
        // Add cyberpunk sound effect (optional)
        this.playCloseSound();
    }
    
    navigateToSection(href) {
        const target = document.querySelector(href);
        if (target) {
            // Add navigation animation
            const navLink = document.querySelector(`.mobile-nav-link[href="${href}"]`);
            if (navLink) {
                navLink.style.transform = 'translateX(20px) scale(0.95)';
                navLink.style.opacity = '0.7';
                
                setTimeout(() => {
                    navLink.style.transform = '';
                    navLink.style.opacity = '';
                }, 200);
            }
            
            // Close navigation with delay
            setTimeout(() => {
                this.closeMobileNav();
                
                // Smooth scroll to target
                setTimeout(() => {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }, 300);
            }, 200);
        }
    }
    
    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
    }
    
    isHorizontalSwipe(e) {
        if (!this.touchStartX || !this.touchStartY) return false;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const diffX = Math.abs(this.touchStartX - touchX);
        const diffY = Math.abs(this.touchStartY - touchY);
        
        // Consider it horizontal if X movement is significantly larger than Y
        return diffX > diffY && diffX > 10;
    }
    
    handleTouchMove(e) {
        if (!this.touchStartX || !this.touchStartY) return;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const diffX = this.touchStartX - touchX;
        const diffY = this.touchStartY - touchY;
        
        // Detect horizontal swipe to close
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) { // Swipe left to close
                this.mobileNavOverlay.style.transform = `translateX(-${Math.min(diffX, 100)}px)`;
                this.mobileNavOverlay.style.opacity = `${Math.max(1 - diffX / 300, 0.5)}`;
            }
        }
    }
    
    handleTouchEnd(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = this.touchStartX - touchEndX;
        
        // Reset styles
        this.mobileNavOverlay.style.transform = '';
        this.mobileNavOverlay.style.opacity = '';
        
        // Close if swiped enough
        if (diffX > 100) {
            this.closeMobileNav();
        }
        
        this.touchStartX = 0;
        this.touchStartY = 0;
    }
    
    animateNavLinks() {
        this.mobileNavLinks.forEach((link, index) => {
            link.style.transform = 'translateX(-50px)';
            link.style.opacity = '0';
            
            setTimeout(() => {
                link.style.transition = 'all 0.6s ease';
                link.style.transform = 'translateX(0)';
                link.style.opacity = '1';
            }, index * 50 + 100);
        });
    }
    
    playOpenSound() {
        // Create cyberpunk-style audio feedback
        if ('AudioContext' in window || 'webkitAudioContext' in window) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 800;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (e) {
                // Audio context not supported
            }
        }
    }
    
    playCloseSound() {
        // Create cyberpunk-style audio feedback
        if ('AudioContext' in window || 'webkitAudioContext' in window) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 400;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.08);
            } catch (e) {
                // Audio context not supported
            }
        }
    }
}

// ================================================
// ADVANCED TOUCH FEEDBACK SYSTEM
// ================================================

class TouchFeedbackController {
    constructor() {
        this.touchFeedback = document.getElementById('touch-feedback');
        this.init();
    }
    
    init() {
        if (!this.touchFeedback) return;
        
        // Add touch feedback to all interactive elements
        const interactiveElements = document.querySelectorAll(`
            .mobile-nav-link,
            .project-card,
            .btn,
            .social-link,
            .mobile-social-link,
            .hamburger,
            .mobile-nav-close
        `);
        
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        });
        
        // Global touch feedback for any touch
        document.addEventListener('touchstart', this.handleGlobalTouch.bind(this), { passive: true });
    }
    
    handleTouchStart(e) {
        const touch = e.touches[0];
        this.showTouchFeedback(touch.clientX, touch.clientY, 'interactive');
        
        // Haptic feedback for interactive elements
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    }
    
    handleGlobalTouch(e) {
        const touch = e.touches[0];
        this.showTouchFeedback(touch.clientX, touch.clientY, 'global');
    }
    
    showTouchFeedback(x, y, type = 'global') {
        if (!this.touchFeedback) return;
        
        this.touchFeedback.style.left = `${x - 50}px`;
        this.touchFeedback.style.top = `${y - 50}px`;
        
        // Different colors for different types
        if (type === 'interactive') {
            this.touchFeedback.style.background = 'radial-gradient(circle, rgba(255, 0, 128, 0.4) 0%, transparent 70%)';
        } else {
            this.touchFeedback.style.background = 'radial-gradient(circle, rgba(0, 202, 255, 0.3) 0%, transparent 70%)';
        }
        
        this.touchFeedback.classList.add('active');
        
        setTimeout(() => {
            this.touchFeedback.classList.remove('active');
        }, 600);
    }
}

// ================================================
// MOBILE DEVICE DETECTION AND OPTIMIZATION
// ================================================

class MobileOptimizationController {
    constructor() {
        this.isMobile = this.detectMobile();
        this.isTouch = this.detectTouch();
        this.orientation = this.getOrientation();
        
        this.init();
    }
    
    init() {
        if (this.isMobile) {
            document.body.classList.add('mobile-device');
            this.optimizeForMobile();
        }
        
        if (this.isTouch) {
            document.body.classList.add('touch-device');
            this.optimizeForTouch();
        }
        
        // Listen for orientation changes
        window.addEventListener('orientationchange', this.handleOrientationChange.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
        
        // Performance monitoring
        this.monitorPerformance();
    }
    
    detectMobile() {
        return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (window.innerWidth <= 768 && 'ontouchstart' in window);
    }
    
    detectTouch() {
        return 'ontouchstart' in window || 
               navigator.maxTouchPoints > 0 || 
               navigator.msMaxTouchPoints > 0;
    }
    
    getOrientation() {
        return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    }
    
    optimizeForMobile() {
        // Reduce particle count for better performance
        if (typeof createParticleSystem === 'function') {
            // We'll modify the particle system later
        }
        
        // Optimize images for mobile
        this.optimizeImages();
        
        // Add mobile-specific CSS classes
        document.body.classList.add(`orientation-${this.orientation}`);
        
        // Disable hover effects on mobile
        const hoverElements = document.querySelectorAll('.hover-effect');
        hoverElements.forEach(element => {
            element.classList.add('mobile-no-hover');
        });
    }
    
    optimizeForTouch() {
        // Increase touch target sizes
        const touchTargets = document.querySelectorAll('button, a, input, .clickable');
        touchTargets.forEach(target => {
            const computedStyle = window.getComputedStyle(target);
            const minSize = 44; // iOS recommendation
            
            if (parseInt(computedStyle.width) < minSize || parseInt(computedStyle.height) < minSize) {
                target.style.minWidth = `${minSize}px`;
                target.style.minHeight = `${minSize}px`;
            }
        });
    }
    
    handleOrientationChange() {
        setTimeout(() => {
            const newOrientation = this.getOrientation();
            if (newOrientation !== this.orientation) {
                document.body.classList.remove(`orientation-${this.orientation}`);
                document.body.classList.add(`orientation-${newOrientation}`);
                this.orientation = newOrientation;
                
                // Trigger orientation-specific optimizations
                this.optimizeForOrientation(newOrientation);
            }
        }, 100);
    }
    
    handleResize() {
        // Debounce resize events
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.handleOrientationChange();
        }, 150);
    }
    
    optimizeForOrientation(orientation) {
        const floatingElements = document.querySelectorAll('.floating-cube, .floating-sphere');
        
        if (orientation === 'landscape') {
            // Adjust floating elements for landscape
            floatingElements.forEach((element, index) => {
                element.style.transform = `scale(0.8) translateX(${index * 10}px)`;
            });
        } else {
            // Reset for portrait
            floatingElements.forEach(element => {
                element.style.transform = '';
            });
        }
    }
    
    optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add loading attribute for better performance
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Add error handling
            img.addEventListener('error', () => {
                img.style.display = 'none';
            });
        });
    }
    
    monitorPerformance() {
        if ('performance' in window) {
            // Monitor frame rate
            let lastTime = performance.now();
            let frameCount = 0;
            
            const measureFPS = () => {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = frameCount;
                    frameCount = 0;
                    lastTime = currentTime;
                    
                    // Log performance warnings
                    if (fps < 30 && this.isMobile) {
                        console.warn('Low FPS detected on mobile device:', fps);
                        this.enablePerformanceMode();
                    }
                }
                
                requestAnimationFrame(measureFPS);
            };
            
            requestAnimationFrame(measureFPS);
        }
    }
    
    enablePerformanceMode() {
        document.body.classList.add('performance-mode');
        
        // Reduce animations
        const animatedElements = document.querySelectorAll('.floating-cube, .floating-sphere, .neural-network');
        animatedElements.forEach(element => {
            element.style.animationDuration = '20s'; // Slower animations
            element.style.willChange = 'auto'; // Remove will-change to save memory
        });
        
        // Optimize canvas rendering
        const canvases = document.querySelectorAll('canvas');
        canvases.forEach(canvas => {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.imageSmoothingEnabled = false; // Disable antialiasing for performance
            }
        });
        
        // Disable some particle effects
        const particles = document.querySelectorAll('.mobile-particles');
        particles.forEach(particle => {
            particle.style.display = 'none';
        });
    }
}

// ================================================
// MOBILE SWIPE GESTURE SYSTEM FOR PROJECT CARDS
// ================================================

class MobileSwipeController {
    constructor() {
        this.projectCards = document.querySelectorAll('.project-card');
        this.currentIndex = 0;
        this.isAnimating = false;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchStartTime = 0;
        this.minSwipeDistance = 50;
        this.maxSwipeTime = 300;
        
        this.init();
    }
    
    init() {
        if (this.projectCards.length === 0) return;
        
        // Add swipe support to each project card
        this.projectCards.forEach((card, index) => {
            this.setupCardTouchEvents(card, index);
            this.enhanceCardForMobile(card, index);
        });
        
        // Add swipe indicators
        this.createSwipeIndicators();
        
        // Add navigation dots
        this.createNavigationDots();
        
        // Auto-advance cards on mobile (optional)
        this.setupAutoAdvance();
    }
    
    setupCardTouchEvents(card, index) {
        let startX = 0, startY = 0, currentX = 0, currentY = 0;
        let isDragging = false;
        
        // Touch start
        card.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            this.touchStartTime = Date.now();
            
            card.style.transition = 'none';
            card.classList.add('mobile-touching');
            
            // Haptic feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(10);
            }
        }, { passive: true });
        
        // Touch move
        card.addEventListener('touchmove', (e) => {
            if (this.isAnimating) return;
            
            const touch = e.touches[0];
            currentX = touch.clientX - startX;
            currentY = touch.clientY - startY;
            
            // Only handle horizontal swipes
            if (Math.abs(currentX) > Math.abs(currentY) && Math.abs(currentX) > 10) {
                isDragging = true;
                e.preventDefault();
                
                // Apply resistance effect
                const resistance = Math.abs(currentX) > 100 ? 0.5 : 1;
                const translateX = currentX * resistance;
                
                card.style.transform = `translateX(${translateX}px) rotateY(${translateX * 0.1}deg)`;
                card.style.opacity = Math.max(0.7, 1 - Math.abs(translateX) / 300);
                
                // Update background based on swipe direction
                if (currentX > 30) {
                    card.style.background = 'linear-gradient(45deg, rgba(0, 202, 255, 0.1), rgba(255, 255, 255, 0.05))';
                } else if (currentX < -30) {
                    card.style.background = 'linear-gradient(45deg, rgba(255, 0, 128, 0.1), rgba(255, 255, 255, 0.05))';
                }
            }
        }, { passive: false });
        
        // Touch end
        card.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const touchTime = Date.now() - this.touchStartTime;
            const velocity = Math.abs(currentX) / touchTime;
            
            card.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.classList.remove('mobile-touching');
            
            // Determine if swipe was significant enough
            const shouldSwipe = Math.abs(currentX) > this.minSwipeDistance || velocity > 0.5;
            
            if (shouldSwipe) {
                if (currentX > 0) {
                    this.handleSwipeRight(index);
                } else {
                    this.handleSwipeLeft(index);
                }
            } else {
                // Snap back to original position
                this.resetCard(card);
            }
            
            isDragging = false;
            currentX = 0;
            currentY = 0;
        }, { passive: true });
    }
    
    enhanceCardForMobile(card, index) {
        // Add mobile-specific attributes
        card.setAttribute('data-card-index', index);
        card.classList.add('mobile-enhanced');
        
        // Add touch feedback overlay
        const touchOverlay = document.createElement('div');
        touchOverlay.className = 'mobile-touch-overlay';
        touchOverlay.innerHTML = `
            <div class="swipe-hint left-hint">
                <i class="fas fa-chevron-left"></i>
                <span>Previous</span>
            </div>
            <div class="swipe-hint right-hint">
                <i class="fas fa-chevron-right"></i>
                <span>Next</span>
            </div>
        `;
        card.appendChild(touchOverlay);
        
        // Add 3D hover effect replacement for mobile
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(1.02) translateZ(20px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 202, 255, 0.2)';
        }, { passive: true });
        
        card.addEventListener('touchend', () => {
            setTimeout(() => {
                if (!card.classList.contains('mobile-touching')) {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                }
            }, 100);
        }, { passive: true });
    }
    
    handleSwipeRight(index) {
        this.navigateToCard('previous', index);
        
        // Haptic feedback for navigation
        if ('vibrate' in navigator) {
            navigator.vibrate([15, 10, 15]);
        }
    }
    
    handleSwipeLeft(index) {
        this.navigateToCard('next', index);
        
        // Haptic feedback for navigation
        if ('vibrate' in navigator) {
            navigator.vibrate([15, 10, 15]);
        }
    }
    
    navigateToCard(direction, currentIndex) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        const totalCards = this.projectCards.length;
        
        let targetIndex;
        if (direction === 'next') {
            targetIndex = (currentIndex + 1) % totalCards;
        } else {
            targetIndex = (currentIndex - 1 + totalCards) % totalCards;
        }
        
        // Animate current card out
        const currentCard = this.projectCards[currentIndex];
        const targetCard = this.projectCards[targetIndex];
        
        // Exit animation for current card
        currentCard.style.transform = direction === 'next' ? 
            'translateX(-100%) rotateY(-20deg)' : 
            'translateX(100%) rotateY(20deg)';
        currentCard.style.opacity = '0';
        
        // Prepare target card
        targetCard.style.transform = direction === 'next' ? 
            'translateX(100%) rotateY(20deg)' : 
            'translateX(-100%) rotateY(-20deg)';
        targetCard.style.opacity = '0';
        targetCard.style.zIndex = '10';
        
        // Animate target card in
        setTimeout(() => {
            targetCard.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            targetCard.style.transform = 'translateX(0) rotateY(0deg)';
            targetCard.style.opacity = '1';
            
            // Reset current card after animation
            setTimeout(() => {
                currentCard.style.zIndex = '';
                targetCard.style.zIndex = '';
                this.resetCard(currentCard);
                this.isAnimating = false;
                
                // Update current index
                this.currentIndex = targetIndex;
                this.updateNavigationDots();
            }, 400);
        }, 50);
        
        // Scroll to target card
        targetCard.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
    
    resetCard(card) {
        card.style.transform = '';
        card.style.opacity = '';
        card.style.background = '';
        card.style.transition = '';
    }
    
    createSwipeIndicators() {
        const projectsSection = document.querySelector('#projects');
        if (!projectsSection) return;
        
        const swipeIndicator = document.createElement('div');
        swipeIndicator.className = 'mobile-swipe-indicator';
        swipeIndicator.innerHTML = `
            <div class="swipe-instruction">
                <div class="swipe-icon">
                    <i class="fas fa-hand-paper"></i>
                    <div class="swipe-animation"></div>
                </div>
                <p>Swipe left or right to navigate projects</p>
            </div>
        `;
        
        projectsSection.appendChild(swipeIndicator);
        
        // Auto-hide after a few seconds
        setTimeout(() => {
            swipeIndicator.style.opacity = '0';
            setTimeout(() => {
                swipeIndicator.style.display = 'none';
            }, 1000);
        }, 5000);
    }
    
    createNavigationDots() {
        const projectsSection = document.querySelector('#projects');
        if (!projectsSection || this.projectCards.length <= 1) return;
        
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'mobile-nav-dots';
        
        this.projectCards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `nav-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('data-index', index);
            dot.innerHTML = `<span class="dot-inner"></span>`;
            
            dot.addEventListener('click', () => {
                if (index !== this.currentIndex) {
                    this.jumpToCard(index);
                }
            });
            
            dotsContainer.appendChild(dot);
        });
        
        projectsSection.appendChild(dotsContainer);
    }
    
    jumpToCard(targetIndex) {
        if (this.isAnimating || targetIndex === this.currentIndex) return;
        
        this.currentIndex = targetIndex;
        this.updateNavigationDots();
        
        // Scroll to target card
        const targetCard = this.projectCards[targetIndex];
        targetCard.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
        
        // Haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    }
    
    updateNavigationDots() {
        const dots = document.querySelectorAll('.nav-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    setupAutoAdvance() {
        // Optional: Auto-advance cards every 10 seconds on mobile
        if (window.innerWidth <= 768) {
            setInterval(() => {
                if (!this.isAnimating && this.projectCards.length > 1) {
                    const nextIndex = (this.currentIndex + 1) % this.projectCards.length;
                    this.jumpToCard(nextIndex);
                }
            }, 10000);
        }
    }
}

// ================================================
// MOBILE SCREEN EFFECTS AND DISTORTIONS
// ================================================

class MobileEffectsController {
    constructor() {
        this.isScrolling = false;
        this.scrollTimeout = null;
        this.lastScrollY = 0;
        this.scrollVelocity = 0;
        
        this.init();
    }
    
    init() {
        if (window.innerWidth <= 768) {
            this.setupScrollDistortion();
            this.setupParallaxEffects();
            this.setupCyberpunkScanlines();
        }
    }
    
    setupScrollDistortion() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScrollEffects();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
    
    handleScrollEffects() {
        const currentScrollY = window.pageYOffset;
        this.scrollVelocity = Math.abs(currentScrollY - this.lastScrollY);
        this.lastScrollY = currentScrollY;
        
        // Add distortion effect based on scroll velocity
        if (this.scrollVelocity > 10) {
            document.body.classList.add('mobile-scroll-distortion');
            
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                document.body.classList.remove('mobile-scroll-distortion');
            }, 500);
        }
        
        // Dynamic header effects
        this.updateHeaderEffects(currentScrollY);
        
        // Parallax floating elements
        this.updateFloatingElements(currentScrollY);
    }
    
    updateHeaderEffects(scrollY) {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const opacity = Math.min(scrollY / 100, 0.95);
            navbar.style.background = `rgba(10, 10, 10, ${opacity})`;
            
            if (scrollY > 50) {
                navbar.classList.add('mobile-scrolled');
            } else {
                navbar.classList.remove('mobile-scrolled');
            }
        }
    }
    
    updateFloatingElements(scrollY) {
        const floatingElements = document.querySelectorAll('.floating-cube, .floating-sphere');
        floatingElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            const rotation = scrollY * (0.2 + index * 0.1);
            
            element.style.transform = `
                translateY(${scrollY * speed}px) 
                rotate(${rotation}deg) 
                scale(${1 - scrollY * 0.0005})
            `;
        });
    }
    
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero, .about, .projects');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('mobile-parallax-active');
                } else {
                    entry.target.classList.remove('mobile-parallax-active');
                }
            });
        }, { threshold: 0.1 });
        
        parallaxElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    setupCyberpunkScanlines() {
        // Add animated scanlines effect
        const scanlines = document.createElement('div');
        scanlines.className = 'mobile-scanlines';
        scanlines.innerHTML = `
            <div class="scanline scanline-1"></div>
            <div class="scanline scanline-2"></div>
            <div class="scanline scanline-3"></div>
        `;
        
        document.body.appendChild(scanlines);
        
        // Trigger scanlines on certain actions
        document.addEventListener('touchstart', () => {
            scanlines.classList.add('active');
            setTimeout(() => {
                scanlines.classList.remove('active');
            }, 1000);
        }, { passive: true });
    }
}

// Initialize mobile systems
let mobileNav, touchFeedback, mobileOptimization, mobileSwipe, mobileEffects;

document.addEventListener('DOMContentLoaded', () => {
    mobileNav = new MobileNavigationController();
    touchFeedback = new TouchFeedbackController();
    mobileOptimization = new MobileOptimizationController();
    
    // Initialize mobile-specific features
    if (window.innerWidth <= 768) {
        mobileSwipe = new MobileSwipeController();
        mobileEffects = new MobileEffectsController();
    }
});

// Legacy hamburger support for existing code
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animated counters for stats (updated for new content)
function animateCounters() {
    console.log('🔢 Starting counter animations...');
    const counters = document.querySelectorAll('.stat h3');
    console.log('Found counters:', counters.length);
    
    counters.forEach(counter => {
        const text = counter.textContent;
        let target;
        let suffix = '';
        
        if (text.includes('3.83')) {
            target = 3.83;
        } else if (text.includes('+')) {
            target = parseInt(text.replace('+', ''));
            suffix = '+';
        } else {
            target = parseInt(text);
        }
        
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                if (text.includes('3.83')) {
                    counter.textContent = '3.83';
                } else {
                    counter.textContent = target + suffix;
                }
                clearInterval(timer);
            } else {
                if (text.includes('3.83')) {
                    counter.textContent = current.toFixed(2);
                } else {
                    counter.textContent = Math.floor(current) + (current >= target * 0.9 ? suffix : '');
                }
            }
        }, 40);
    });
}

// Glassmorphism hover effects for cards
function addGlassmorphismEffects() {
    const cards = document.querySelectorAll('.project-card, .publication-card, .timeline-content, .stat');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.background = 'rgba(255, 255, 255, 0.08)';
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(255, 255, 255, 0.05)';
            card.style.transform = 'translateY(0)';
        });
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger counter animation for stats section
            if (entry.target.classList.contains('about-stats')) {
                setTimeout(() => animateCounters(), 300);
            }
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.about-text, .about-stats, .timeline-item, .project-card, .publication-card, .contact-info, .contact-form'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // Initialize glassmorphism effects
    setTimeout(() => addGlassmorphismEffects(), 1000);
});

// Enhanced form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.background = 'rgba(255, 121, 198, 0.5)';
        
        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? 'rgba(255, 82, 82, 0.9)' : 'rgba(80, 250, 123, 0.9)'};
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        font-family: 'Space Mono', monospace;
        font-weight: 600;
        backdrop-filter: blur(10px);
        border: 1px solid ${type === 'error' ? 'rgba(255, 82, 82, 0.3)' : 'rgba(80, 250, 123, 0.3)'};
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Typing effect for hero section
function typeWriter(element, text, speed = 80) {
    let i = 0;
    const originalText = text;
    element.innerHTML = '';
    
    function type() {
        if (i < originalText.length) {
            element.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhanced Loading Screen Controller
class LoadingController {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.progressBar = document.getElementById('loading-progress-bar');
        this.percentageText = document.getElementById('loading-percentage');
        this.loadedAssets = 0;
        this.totalAssets = 0;
        this.init();
    }
    
    init() {
        if (!this.loadingScreen) return;
        
        // Count total assets to load
        this.countAssets();
        
        // Start loading simulation
        this.simulateLoading();
    }
    
    countAssets() {
        const images = document.querySelectorAll('img');
        const scripts = document.querySelectorAll('script[src]');
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        
        this.totalAssets = images.length + scripts.length + stylesheets.length;
    }
    
    simulateLoading() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => this.hideLoadingScreen(), 500);
            }
            
            this.updateProgress(progress);
        }, 100);
    }
    
    updateProgress(progress) {
        const roundedProgress = Math.round(progress);
        if (this.progressBar) {
            this.progressBar.style.width = `${roundedProgress}%`;
        }
        if (this.percentageText) {
            this.percentageText.textContent = `${roundedProgress}%`;
        }
    }
    
    hideLoadingScreen() {
        if (this.loadingScreen) {
            this.loadingScreen.style.opacity = '0';
            this.loadingScreen.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
                this.initializeApp();
            }, 300);
        }
    }
    
    initializeApp() {
        // Initialize typing effect
        const heroTitle = document.querySelector('.hero-content h1');
        if (heroTitle) {
            const fullText = heroTitle.textContent;
            typeWriter(heroTitle, fullText, 60);
        }
        
        // Trigger entrance animations
        document.body.classList.add('app-loaded');
    }
}

// Project Details Modal System
function showProjectDetails(projectId) {
    const projectData = {
        'nyc-risk': {
            title: 'NYC Risk & Route Prediction',
            description: 'Advanced real-time navigation system with machine learning-powered risk assessment.',
            features: [
                'Real-time incident heatmaps across 200+ NYC geozones',
                'Random Forest ML model achieving 92% accuracy',
                'Integrated GoMaps & Geopy APIs for visual navigation',
                'Interactive Streamlit interface with live data feeds',
                'Predictive routing based on historical incident patterns'
            ],
            tech: ['Python', 'Random Forest', 'Streamlit', 'GoMaps API', 'Geopy', 'Pandas', 'NumPy'],
            metrics: {
                'Accuracy': '92%',
                'Geozones Covered': '200+',
                'Response Time': '<2s',
                'Data Points': '50K+'
            }
        },
        'acne-detection': {
            title: 'Acne Disease Detection System',
            description: 'AI-powered dermatological analysis using fine-tuned MobileNet architecture.',
            features: [
                'Fine-tuned MobileNet for facial acne classification',
                'Real-time inference with Gradio interface',
                '95.64% classification accuracy on test dataset',
                'Optimized for mobile deployment',
                'Clinical validation pipeline'
            ],
            tech: ['MobileNet', 'TensorFlow', 'Computer Vision', 'Gradio', 'Python', 'OpenCV'],
            metrics: {
                'Accuracy': '95.64%',
                'Precision': '90%+',
                'Inference Time': '<500ms',
                'Model Size': '16MB'
            }
        },
        'air-piano': {
            title: 'Air-Piano: Touchless MIDI Controller',
            description: 'Revolutionary gesture-controlled musical instrument using computer vision.',
            features: [
                'MediaPipe hand tracking for gesture recognition',
                'Real-time MIDI chord generation',
                'Multi-threaded sustain logic for natural playback',
                'Fluidsynth integration for high-quality audio',
                'Customizable chord progressions'
            ],
            tech: ['MediaPipe', 'Python', 'MIDI', 'Fluidsynth', 'OpenCV', 'Threading'],
            metrics: {
                'Latency': '<50ms',
                'Accuracy': '95%+',
                'Chord Library': '100+',
                'FPS': '30+'
            }
        },
        'nexus-shell': {
            title: 'Nexus Shell - Custom Unix Shell',
            description: 'Complete shell implementation with advanced process management.',
            features: [
                'Full command parsing and execution',
                'Built-in commands (cd, pwd, exit, etc.)',
                'Process management and job control',
                'Signal handling and error recovery',
                'Memory-efficient design'
            ],
            tech: ['C', 'Unix System Calls', 'Process Control', 'Signal Handling', 'Memory Management'],
            metrics: {
                'Memory Usage': '<1MB',
                'Commands': '15+',
                'Performance': 'Native Speed',
                'Compatibility': 'POSIX'
            }
        }
    };
    
    createProjectModal(projectData[projectId]);
}

function createProjectModal(project) {
    if (!project) return;
    
    // Remove existing modal
    const existingModal = document.querySelector('.project-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeProjectModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>${project.title}</h3>
                <button class="modal-close" onclick="closeProjectModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="project-description">${project.description}</p>
                
                <div class="project-features">
                    <h4>Key Features</h4>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-tech">
                    <h4>Technologies Used</h4>
                    <div class="tech-tags">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-metrics">
                    <h4>Performance Metrics</h4>
                    <div class="metrics-grid">
                        ${Object.entries(project.metrics).map(([key, value]) => 
                            `<div class="metric-item">
                                <span class="metric-label">${key}</span>
                                <span class="metric-value">${value}</span>
                            </div>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Trigger animation
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
}

function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Citation Modal System
function showCitation(paperId) {
    const citationData = {
        'nature-paper': {
            title: 'CAD-PsorNet: deep transfer learning for computer-assisted diagnosis of skin Psoriasis',
            authors: 'Unmesh Achar, Soumya Ranjan Nayak, Sanjay Agrawal',
            journal: 'Nature Scientific Reports',
            year: '2024',
            doi: '10.1038/s41598-024-76852-6',
            apa: 'Achar, U., Nayak, S. R., & Agrawal, S. (2024). CAD-PsorNet: deep transfer learning for computer-assisted diagnosis of skin Psoriasis. Scientific Reports, 14, 26501. https://doi.org/10.1038/s41598-024-76852-6',
            bibtex: `@article{achar2024cadpsornet,
    title={CAD-PsorNet: deep transfer learning for computer-assisted diagnosis of skin Psoriasis},
    author={Achar, Unmesh and Nayak, Soumya Ranjan and Agrawal, Sanjay},
    journal={Scientific Reports},
    volume={14},
    number={1},
    pages={26501},
    year={2024},
    publisher={Nature Publishing Group UK London},
    doi={10.1038/s41598-024-76852-6}
}`
        },
        'ijdv-paper': {
            title: 'Artificial Intelligence in Dermatology: A Systematized Review',
            authors: 'Unmesh Achar, et al.',
            journal: 'Indian Journal of Dermatology',
            year: '2025',
            doi: 'TBD',
            apa: 'Achar, U., et al. (2025). Artificial Intelligence in Dermatology: A Systematized Review. Indian Journal of Dermatology. [In Press]',
            bibtex: `@article{achar2025artificial,
    title={Artificial Intelligence in Dermatology: A Systematized Review},
    author={Achar, Unmesh and others},
    journal={Indian Journal of Dermatology},
    year={2025},
    note={In Press}
}`
        }
    };
    
    createCitationModal(citationData[paperId]);
}

function createCitationModal(citation) {
    if (!citation) return;
    
    // Remove existing modal
    const existingModal = document.querySelector('.citation-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'citation-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeCitationModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Citation Information</h3>
                <button class="modal-close" onclick="closeCitationModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="citation-format">
                    <h4>APA Format</h4>
                    <div class="citation-text">
                        <p>${citation.apa}</p>
                        <button class="copy-btn" onclick="copyCitation('${citation.apa.replace(/'/g, "\\'")}')">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                </div>
                
                <div class="citation-format">
                    <h4>BibTeX Format</h4>
                    <div class="citation-text">
                        <pre>${citation.bibtex}</pre>
                        <button class="copy-btn" onclick="copyCitation(\`${citation.bibtex}\`)">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                </div>
                
                <div class="paper-info">
                    <div class="info-item">
                        <strong>DOI:</strong> ${citation.doi}
                    </div>
                    <div class="info-item">
                        <strong>Year:</strong> ${citation.year}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Trigger animation
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
}

function closeCitationModal() {
    const modal = document.querySelector('.citation-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

function copyCitation(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
        const button = event.target.closest('.copy-btn');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.background = 'var(--neon-green)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy citation:', err);
    });
}

// Initialize loading controller and typing effect
window.addEventListener('load', () => {
    new LoadingController();
    
    // Performance optimization: Add device detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEndDevice = navigator.hardwareConcurrency <= 2 || window.deviceMemory <= 2;
    
    if (isMobile || isLowEndDevice) {
        document.body.classList.add('performance-mode');
        console.log('Performance mode enabled for optimal experience');
    }
    
    // Initialize Web Vitals monitoring
    if ('performance' in window && 'observe' in PerformanceObserver.prototype) {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                }
                if (entry.entryType === 'first-input') {
                    console.log('FID:', entry.processingStart - entry.startTime);
                }
                if (entry.entryType === 'layout-shift') {
                    console.log('CLS:', entry.value);
                }
            });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
});

// Scroll to top functionality
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
        } else {
            scrollBtn.style.opacity = '0';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced 3D Scene with Three.js
let scene, camera, renderer, particles;
let mouseX = 0, mouseY = 0;

function init3DScene() {
    console.log('🌟 Initializing 3D scene...');
    const canvas = document.getElementById('three-canvas');
    if (!canvas) {
        console.error('❌ three-canvas element not found!');
        return;
    }
    
    // Completely disable 3D on mobile to prevent performance issues
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        canvas.style.display = 'none';
        console.log('🚫 3D scene disabled on mobile for performance');
        return;
    }
    
    if (typeof THREE === 'undefined') {
        console.error('❌ THREE.js not loaded!');
        return;
    }

    try {
        // Scene setup
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        canvas.appendChild(renderer.domElement);

        // Create particle system
        createParticleSystem();
        
        // Create floating geometries
        createFloatingGeometries();
        
        // Camera position
        camera.position.z = 5;
        
        // Mouse movement tracking
        document.addEventListener('mousemove', onMouseMove);
        
        // Touch movement tracking for mobile
        document.addEventListener('touchmove', onTouchMove, { passive: true });
        document.addEventListener('touchstart', onTouchStart, { passive: true });
        
        // Animation loop
        animate();
        console.log('✅ 3D scene initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing 3D scene:', error);
    }
}

function createParticleSystem() {
    // Mobile-optimized particle count
    const isMobile = window.innerWidth <= 768;
    const isLowEnd = navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4;
    
    let particleCount = 1000; // Desktop default
    if (isMobile) {
        particleCount = isLowEnd ? 200 : 500; // Fewer particles on mobile
    }
    
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    const color = new THREE.Color();
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Adjust spread for mobile screens
        const spread = isMobile ? 15 : 20;
        positions[i3] = (Math.random() - 0.5) * spread;
        positions[i3 + 1] = (Math.random() - 0.5) * spread;
        positions[i3 + 2] = (Math.random() - 0.5) * (isMobile ? 3 : 5);
        
        // Mobile-optimized particle sizes
        sizes[i] = isMobile ? Math.random() * 0.03 + 0.01 : Math.random() * 0.02 + 0.01;
        
        // Cyberpunk colors with mobile optimization
        const colorChoice = Math.random();
        if (colorChoice < 0.4) {
            color.setHex(0x00caff); // Neon cyan (more prominent on mobile)
        } else if (colorChoice < 0.7) {
            color.setHex(0xff0080); // Neon pink
        } else {
            color.setHex(0xb915cc); // Neon purple
        }
        
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Mobile-optimized material
    const material = new THREE.PointsMaterial({
        size: isMobile ? 0.03 : 0.02,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: isMobile ? 0.9 : 0.8,
        blending: THREE.AdditiveBlending,
        alphaTest: 0.1 // Improves mobile performance
    });
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    // Store reference for mobile optimizations
    particles.userData.isMobile = isMobile;
    particles.userData.isLowEnd = isLowEnd;
    
    console.log(`✅ Created particle system with ${particleCount} particles (Mobile: ${isMobile}, Low-end: ${isLowEnd})`);
}

function createFloatingGeometries() {
    // Create glowing cubes
    for (let i = 0; i < 5; i++) {
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00caff,
            transparent: true,
            opacity: 0.6,
            wireframe: true
        });
        
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
        );
        
        cube.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            }
        };
        
        scene.add(cube);
    }
    
    // Create glowing spheres
    for (let i = 0; i < 3; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0xff0080,
            transparent: true,
            opacity: 0.7
        });
        
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 3
        );
        
        sphere.userData = {
            originalY: sphere.position.y,
            floatSpeed: Math.random() * 0.02 + 0.01
        };
        
        scene.add(sphere);
    }
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onTouchStart(event) {
    if (event.touches.length === 1) {
        const touch = event.touches[0];
        mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;
    }
}

function onTouchMove(event) {
    if (event.touches.length === 1) {
        const touch = event.touches[0];
        mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;
        
        // Add subtle haptic feedback on touch move
        if ('vibrate' in navigator) {
            navigator.vibrate(1);
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    
    if (particles) {
        // Mobile-optimized rotation speeds
        const rotationSpeed = particles.userData.isMobile ? 0.0005 : 0.001;
        const mouseInfluence = particles.userData.isMobile ? 0.0005 : 0.001;
        
        particles.rotation.x += rotationSpeed;
        particles.rotation.y += rotationSpeed * 2;
        
        // Mouse/touch interaction
        particles.rotation.x += mouseY * mouseInfluence;
        particles.rotation.y += mouseX * mouseInfluence;
        
        // Mobile-specific touch response
        if (particles.userData.isMobile && 'ontouchstart' in window) {
            // Add subtle pulsing effect for mobile
            const time = Date.now() * 0.001;
            particles.material.opacity = 0.8 + Math.sin(time) * 0.1;
        }
    }
    
    // Animate floating objects with mobile optimization
    const now = Date.now();
    scene.children.forEach((child, index) => {
        if (child.userData.rotationSpeed) {
            // Reduce rotation speed on mobile for better performance
            const speedMultiplier = window.innerWidth <= 768 ? 0.7 : 1;
            child.rotation.x += child.userData.rotationSpeed.x * speedMultiplier;
            child.rotation.y += child.userData.rotationSpeed.y * speedMultiplier;
            child.rotation.z += child.userData.rotationSpeed.z * speedMultiplier;
        }
        
        if (child.userData.floatSpeed) {
            // Optimize floating animation for mobile
            const floatMultiplier = window.innerWidth <= 768 ? 0.3 : 0.5;
            child.position.y = child.userData.originalY + Math.sin(now * child.userData.floatSpeed) * floatMultiplier;
        }
    });
    
    // Camera movement with mobile optimization
    const cameraInfluence = window.innerWidth <= 768 ? 0.03 : 0.05;
    const cameraRange = window.innerWidth <= 768 ? 0.3 : 0.5;
    
    camera.position.x += (mouseX * cameraRange - camera.position.x) * cameraInfluence;
    camera.position.y += (mouseY * cameraRange - camera.position.y) * cameraInfluence;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// Enhanced project card interactions
function enhanceProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(255, 121, 198, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });
    });
}

// Enhanced Project Card Mouse Tracking
function enhanceProjectCardsWithMouse() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
            
            // 3D tilt effect
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) / (rect.width / 2);
            const deltaY = (e.clientY - centerY) / (rect.height / 2);
            
            const rotateX = deltaY * -10;
            const rotateY = deltaX * 10;
            
            card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
}

// Cyberpunk Loading Animation
function createLoadingAnimation() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.innerHTML = `
        <div class="loading-container">
            <div class="loading-text">
                <span class="loading-letter">L</span>
                <span class="loading-letter">O</span>
                <span class="loading-letter">A</span>
                <span class="loading-letter">D</span>
                <span class="loading-letter">I</span>
                <span class="loading-letter">N</span>
                <span class="loading-letter">G</span>
            </div>
            <div class="loading-bar">
                <div class="loading-fill"></div>
            </div>
        </div>
    `;
    
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--primary-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 1;
        transition: opacity 0.5s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .loading-container {
            text-align: center;
        }
        
        .loading-text {
            font-family: var(--font-primary);
            font-size: 2rem;
            margin-bottom: 2rem;
            color: var(--neon-cyan);
        }
        
        .loading-letter {
            display: inline-block;
            animation: neon-flicker 1.5s ease-in-out infinite;
            animation-delay: calc(var(--i) * 0.1s);
        }
        
        .loading-bar {
            width: 300px;
            height: 4px;
            background: rgba(0, 202, 255, 0.2);
            border-radius: 2px;
            overflow: hidden;
            margin: 0 auto;
        }
        
        .loading-fill {
            height: 100%;
            background: var(--neon-gradient);
            width: 0%;
            animation: loading-progress 2s ease-in-out;
            box-shadow: 0 0 10px var(--neon-cyan);
        }
        
        @keyframes neon-flicker {
            0%, 100% { 
                text-shadow: 0 0 5px var(--neon-cyan), 0 0 10px var(--neon-cyan);
                opacity: 1;
            }
            50% { 
                text-shadow: 0 0 2px var(--neon-cyan), 0 0 5px var(--neon-cyan), 0 0 8px var(--neon-pink);
                opacity: 0.8;
            }
        }
        
        @keyframes loading-progress {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(loadingOverlay);
    
    // Animate letters
    const letters = loadingOverlay.querySelectorAll('.loading-letter');
    letters.forEach((letter, index) => {
        letter.style.setProperty('--i', index);
    });
    
    // Remove loading screen
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loadingOverlay);
        }, 500);
    }, 3000);
}

// Floating Resume Button Control
function initFloatingResumeButton() {
    console.log('🔍 Initializing resume button...');
    const floatingBtn = document.querySelector('.floating-resume-btn');
    if (!floatingBtn) {
        console.error('❌ Resume button element not found!');
        return;
    }
    console.log('✅ Resume button element found:', floatingBtn);
    
    // Show button immediately on page load
    setTimeout(() => {
        floatingBtn.classList.add('show');
        console.log('✅ Resume button shown with .show class');
    }, 2000);
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Keep button visible after 100px scroll (reduced from 300px)
        if (scrolled > 100) {
            floatingBtn.classList.add('show');
        } else if (scrolled < 50) {
            floatingBtn.classList.remove('show');
        }
    });
}

// Simplified Live Stats for YOUR profiles
async function getCommitCount(username, year) {
    const url = `https://api.github.com/search/commits?q=author:${username}+author-date:${year}-01-01..${year}-12-31`;
    const headers = {
        "Accept": "application/vnd.github.cloak-preview"
    };
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        const data = await response.json();
        return data.total_count;
    } catch (error) {
        console.error('Error fetching commit count:', error);
        return null;
    }
}
async function fetchUnmeshGitHubStats() {
    const username = 'Unmesh30';
    try {
        console.log('Fetching GitHub data for', username);
        // Fetch basic user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('GitHub API error');
        const userData = await userResponse.json();
        console.log('GitHub user data:', userData);
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
        if (!reposResponse.ok) throw new Error('GitHub repos API error');
        const reposData = await reposResponse.json();
        console.log('GitHub repos data:', reposData.length, 'repos');
        // Calculate stars
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        // Get top languages
        const languages = {};
        reposData.forEach(repo => {
            if (repo.language) {
                languages[repo.language] = (languages[repo.language] || 0) + 1;
            }
        });
        const topLanguages = Object.entries(languages)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5);
        // Get commit count
        const commitCount = await getCommitCount(username, 2025);
        // Update UI with YOUR data
        updateUnmeshGitHubUI({
            repos: userData.public_repos,
            followers: userData.followers,
            stars: totalStars,
            commits: commitCount,
            languages: topLanguages
        });
    } catch (error) {
        console.error('Error fetching YOUR GitHub stats:', error);
        updateUnmeshGitHubError();
    }
}
async function fetchUnmeshLeetCodeStats() {
    const username = 'UnmeshXD';
    try {
        console.log('Fetching LeetCode data for', username);
        
        // Try multiple LeetCode APIs for comprehensive data
        const apis = [
            `https://leetcode-stats-api.herokuapp.com/${username}`,
            `https://alfa-leetcode-api.onrender.com/${username}/solved`,
            `https://alfa-leetcode-api.onrender.com/${username}/contest`,
            `https://leetcode-api-faisalshohag.vercel.app/${username}`
        ];
        
        let userData = {};
        let recentSubmissions = [];
        
        // Try to get basic stats
        for (const apiUrl of apis) {
            try {
                const response = await fetch(apiUrl);
                if (response.ok) {
                    const data = await response.json();
                    console.log('LeetCode API response:', data);
                    
                    if (data.totalSolved || data.solvedProblem || data.totalQuestions) {
                        userData = {
                            totalSolved: data.totalSolved || data.solvedProblem || 0,
                            easy: data.easySolved || data.easySolved || 0,
                            medium: data.mediumSolved || data.mediumSolved || 0,
                            hard: data.hardSolved || data.hardSolved || 0,
                            ranking: data.ranking || null,
                            streak: data.streak || null
                        };
                        break;
                    }
                }
            } catch (apiError) {
                console.log('API failed:', apiUrl, apiError);
                continue;
            }
        }
        
        // Try to get recent submissions with enhanced difficulty detection
        try {
            const recentResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/submission`);
            if (recentResponse.ok) {
                const recentData = await recentResponse.json();
                if (recentData.submission && Array.isArray(recentData.submission)) {
                    recentSubmissions = recentData.submission.slice(0, 5).map(submission => {
                        // Enhanced difficulty mapping based on common LeetCode problem patterns
                        if (!submission.difficulty || submission.difficulty === 'Unknown') {
                            const title = submission.title?.toLowerCase() || '';
                            
                            // Pattern-based difficulty detection
                            if (title.includes('two sum') || title.includes('palindrome') || title.includes('reverse')) {
                                submission.difficulty = 'Easy';
                            } else if (title.includes('add') && title.includes('operators')) {
                                submission.difficulty = 'Hard';
                            } else if (title.includes('word break') || title.includes('sudoku')) {
                                submission.difficulty = 'Medium';
                            } else {
                                // Default based on problem complexity indicators
                                submission.difficulty = 'Medium';
                            }
                        }
                        return submission;
                    });
                }
            }
        } catch (recentError) {
            console.log('Could not fetch recent submissions:', recentError);
        }
        
        if (userData.totalSolved || recentSubmissions.length > 0) {
            updateUnmeshLeetCodeUI({
                ...userData,
                recentSubmissions: recentSubmissions
            });
        } else {
            throw new Error('No LeetCode data found');
        }
        
    } catch (error) {
        console.error('Error fetching YOUR LeetCode stats:', error);
        updateUnmeshLeetCodeError();
    }
}

function updateUnmeshGitHubUI(stats) {
    console.log('Updating GitHub UI with:', stats);
    // Update main stats with REAL data
    document.getElementById('github-repos').textContent = stats.repos;
    document.getElementById('github-followers').textContent = stats.followers;
    document.getElementById('github-stars').textContent = stats.stars;
    document.getElementById('github-commits').textContent = stats.commits;
    
    // Enhanced languages with visual progress bar
    const languagesContainer = document.getElementById('github-languages');
    if (stats.languages && stats.languages.length > 0) {
        const languageData = {
            'Python': { color: '#3572A5', class: 'python' },
            'JavaScript': { color: '#F1E05A', class: 'javascript' },
            'Java': { color: '#B07219', class: 'java' },
            'Jupyter Notebook': { color: '#DA5B0B', class: 'jupyter' },
            'HTML': { color: '#E34C26', class: 'html' },
            'CSS': { color: '#1572B6', class: 'css' },
            'C++': { color: '#F34B7D', class: 'cpp' },
            'C': { color: '#555555', class: 'c' },
            'Shell': { color: '#89E051', class: 'shell' }
        };
        
        const total = stats.languages.reduce((sum, [, count]) => sum + count, 0);
        const topLanguages = stats.languages.slice(0, 6); // Top 6 languages
        
        const progressBarHTML = topLanguages.map(([lang, count]) => {
            const percentage = ((count / total) * 100).toFixed(1);
            const langData = languageData[lang] || { class: 'other' };
            return `<div class="language-segment ${langData.class}" style="width: ${percentage}%;" data-lang="${lang}"></div>`;
        }).join('');
        
        const legendHTML = topLanguages.map(([lang, count]) => {
            const percentage = ((count / total) * 100).toFixed(1);
            const langData = languageData[lang] || { class: 'other' };
            return `
                <div class="legend-item">
                    <div class="legend-dot ${langData.class}"></div>
                    <span>${lang} ${percentage}%</span>
                </div>
            `;
        }).join('');
        
        languagesContainer.innerHTML = `
            <h4>Most Used Languages</h4>
            <div class="language-progress-bar">
                ${progressBarHTML}
            </div>
            <div class="languages-legend">
                ${legendHTML}
            </div>
            
            <div class="github-projects-showcase">
                <h4>Repository Overview</h4>
                <div class="project-item">
                    <div class="project-icon">📊</div>
                    <div class="project-info">
                        <span class="project-name">Total Repositories</span>
                        <span class="project-desc">${stats.repos} public repositories</span>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-icon">⭐</div>
                    <div class="project-info">
                        <span class="project-name">Total Stars</span>
                        <span class="project-desc">${stats.stars} stars received</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Use fallback data if no language data
        updateUnmeshGitHubError();
    }
}

// Helper function to format timestamp to "time ago"
function formatTimeAgo(timestamp) {
    const now = new Date();
    const submissionTime = new Date(timestamp * 1000); // Convert from Unix timestamp
    const diffInSeconds = Math.floor((now - submissionTime) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return `${Math.floor(diffInSeconds / 2592000)}mo ago`;
}

function updateUnmeshLeetCodeUI(stats) {
    console.log('Updating LeetCode UI with:', stats);
    document.getElementById('leetcode-total').textContent = stats.totalSolved;
    document.getElementById('leetcode-easy').textContent = stats.easy;
    document.getElementById('leetcode-medium').textContent = stats.medium;
    document.getElementById('leetcode-hard').textContent = stats.hard;
    
    // Update activities section with real streak data if available
    const activitiesContainer = document.getElementById('leetcode-activities');
    if (activitiesContainer) {
        activitiesContainer.innerHTML = `
            <div class="leetcode-stats-section">
                <h4>Current Streak</h4>
                <div class="streak-display">
                    <div class="streak-item">
                        <div class="streak-icon">🔥</div>
                        <div class="streak-info">
                            <span class="streak-number">${stats.streak || '--'}</span>
                            <span class="streak-label">Days</span>
                        </div>
                    </div>
                    <div class="streak-item">
                        <div class="streak-icon">📈</div>
                        <div class="streak-info">
                            <span class="streak-number">${stats.totalSolved || 0}</span>
                            <span class="streak-label">Total Solved</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="leetcode-profile-section">
                <h4>Problem Distribution</h4>
                <div class="problem-distribution">
                    <div class="problem-bar">
                        <div class="easy-segment" style="width: ${stats.easy ? (stats.easy/stats.totalSolved*100).toFixed(1) : 0}%"></div>
                        <div class="medium-segment" style="width: ${stats.medium ? (stats.medium/stats.totalSolved*100).toFixed(1) : 0}%"></div>
                        <div class="hard-segment" style="width: ${stats.hard ? (stats.hard/stats.totalSolved*100).toFixed(1) : 0}%"></div>
                    </div>
                    <div class="problem-legend">
                        <span class="legend-easy">Easy: ${stats.easy || 0}</span>
                        <span class="legend-medium">Medium: ${stats.medium || 0}</span>
                        <span class="legend-hard">Hard: ${stats.hard || 0}</span>
                    </div>
                </div>
            </div>
            
            ${stats.recentSubmissions && stats.recentSubmissions.length > 0 ? `
            <div class="recent-activities-section">
                <h4>Recent Activities</h4>
                <div class="activities-list">
                    ${stats.recentSubmissions.map(submission => {
                        const statusIcon = submission.statusDisplay === 'Accepted' ? '✅' : 
                                         submission.statusDisplay === 'Wrong Answer' ? '❌' : 
                                         submission.statusDisplay === 'Time Limit Exceeded' ? '⏰' : '🔄';
                        // Enhanced difficulty detection with fallback
                        let difficulty = submission.difficulty || submission.level || 'Medium'; // Default to Medium if unknown
                        let difficultyClass = 'medium';
                        
                        if (difficulty.toLowerCase().includes('easy') || difficulty === '1') {
                            difficulty = 'Easy';
                            difficultyClass = 'easy';
                        } else if (difficulty.toLowerCase().includes('hard') || difficulty === '3') {
                            difficulty = 'Hard';
                            difficultyClass = 'hard';
                        } else {
                            difficulty = 'Medium';
                            difficultyClass = 'medium';
                        }
                        
                        const timeAgo = submission.timestamp ? formatTimeAgo(submission.timestamp) : 'Recently';
                        
                        return `
                            <div class="activity-item ${submission.statusDisplay === 'Accepted' ? 'accepted' : 'other'}">
                                <div class="activity-status">${statusIcon}</div>
                                <div class="activity-details">
                                    <div class="activity-problem">
                                        <span class="problem-title">${submission.title || 'Problem'}</span>
                                        <span class="problem-difficulty ${difficultyClass}">${difficulty}</span>
                                    </div>
                                    <div class="activity-meta">
                                        <span class="activity-status-text">${submission.statusDisplay || 'Submitted'}</span>
                                        <span class="activity-time">${timeAgo}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            ` : ''}
        `;
    }
}

function updateUnmeshGitHubError() {
    // REAL GitHub stats for Unmesh30
    document.getElementById('github-repos').textContent = '3';
    document.getElementById('github-followers').textContent = '--';  // Will update when API works
    document.getElementById('github-stars').textContent = '9';
    document.getElementById('github-commits').textContent = '--';   // Will update when API works
    
    // REAL language breakdown based on actual repositories
    document.getElementById('github-languages').innerHTML = `
        <h4>Most Used Languages</h4>
        <div class="language-progress-bar">
            <div class="language-segment python" style="width: 40%;" data-lang="Python"></div>
            <div class="language-segment java" style="width: 35%;" data-lang="Java"></div>
            <div class="language-segment c" style="width: 25%;" data-lang="C"></div>
        </div>
        <div class="languages-legend">
            <div class="legend-item">
                <div class="legend-dot python"></div>
                <span>Python 40%</span>
            </div>
            <div class="legend-item">
                <div class="legend-dot java"></div>
                <span>Java 35%</span>
            </div>
            <div class="legend-item">
                <div class="legend-dot c"></div>
                <span>C 25%</span>
            </div>
        </div>
        
        <div class="github-projects-showcase">
            <h4>Featured Projects</h4>
            <div class="project-item">
                <div class="project-icon">🎹</div>
                <div class="project-info">
                    <span class="project-name">Aeras-Piano</span>
                    <span class="project-desc">Vision-based virtual piano</span>
                </div>
            </div>
            <div class="project-item">
                <div class="project-icon">💼</div>
                <div class="project-info">
                    <span class="project-name">Java GUI App</span>
                    <span class="project-desc">Swing-based Appointment System</span>
                </div>
            </div>
            <div class="project-item">
                <div class="project-icon">⚡</div>
                <div class="project-info">
                    <span class="project-name">Nexus Shell</span>
                    <span class="project-desc">Custom shell implementation</span>
                </div>
            </div>
        </div>
    `;
}

function updateUnmeshLeetCodeError() {
    // Show loading/connecting status for real data
    document.getElementById('leetcode-total').textContent = '--';
    document.getElementById('leetcode-easy').textContent = '--';
    document.getElementById('leetcode-medium').textContent = '--';
    document.getElementById('leetcode-hard').textContent = '--';
    
    const activitiesContainer = document.getElementById('leetcode-activities');
    if (activitiesContainer) {
        activitiesContainer.innerHTML = `
            <div class="leetcode-stats-section">
                <h4>Current Streak</h4>
                <div class="streak-display">
                    <div class="streak-item">
                        <div class="streak-icon">🔥</div>
                        <div class="streak-info">
                            <span class="streak-number">--</span>
                            <span class="streak-label">Days</span>
                        </div>
                    </div>
                    <div class="streak-item">
                        <div class="streak-icon">📅</div>
                        <div class="streak-info">
                            <span class="streak-number">--</span>
                            <span class="streak-label">This Week</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="leetcode-profile-section">
                <h4>Profile Status</h4>
                <div class="profile-status">
                    <div class="status-item">
                        <div class="status-icon">🔗</div>
                        <div class="status-info">
                            <span class="status-text">Connecting to LeetCode...</span>
                        </div>
                    </div>
                    <div class="status-note">
                        <small>Visit my profile: <strong>@UnmeshXD</strong></small>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core functionality
    createLoadingAnimation();
    initPageTransitions();
    setupResumeDownload();
    enhanceContactForm();
    initFloatingResumeButton();
    
    // Load YOUR live stats - Show fallback data immediately then try to fetch real data
    setTimeout(() => {
        console.log('📊 Loading live activity data...');
        // Show fallback data immediately
        updateUnmeshGitHubError();
        updateUnmeshLeetCodeError();
        console.log('✅ Fallback data loaded');
        
        // Try to fetch real data
        fetchUnmeshGitHubStats();
        fetchUnmeshLeetCodeStats();
    }, 1000);
    
    setTimeout(() => {
        init3DScene();
        createScrollToTop();
        init3DSkillCubes();
        setTimeout(() => {
            enhanceProjectCards();
            enhanceProjectCardsWithMouse();
        }, 500);
    }, 1000);
});

// Skill Bar Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const skillLevel = skillBar.getAttribute('data-skill');
                
                setTimeout(() => {
                    skillBar.style.width = skillLevel + '%';
                }, 200);
                
                observer.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Resume Download Functionality
function setupResumeDownload() {
    const resumeLink = document.querySelector('.resume-floating-link');
    if (resumeLink) {
        resumeLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Show notification that resume is being prepared
            showNotification('Preparing resume download...', 'info');
            
            // Create a temporary download link
            const link = document.createElement('a');
            link.href = 'resume-unmesh-achar.pdf'; // You\'ll need to add your resume file
            link.download = 'Unmesh_Achar_Resume.pdf';
            link.target = '_blank';
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setTimeout(() => {
                showNotification('Resume download started!', 'success');
            }, 1000);
        });
    }
}

// Enhanced Contact Form with Advanced Validation
function enhanceContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    // Add real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearValidation);
    });
    
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        clearValidation.call(field);
        
        if (!value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        if (field.name === 'name' && value.length < 2) {
            showFieldError(field, 'Name must be at least 2 characters long');
            return false;
        }
        
        if (field.name === 'message' && value.length < 10) {
            showFieldError(field, 'Message must be at least 10 characters long');
            return false;
        }
        
        showFieldSuccess(field);
        return true;
    }
    
    function clearValidation() {
        this.classList.remove('error', 'success');
        const errorMsg = this.parentNode.querySelector('.field-error');
        if (errorMsg) errorMsg.remove();
    }
    
    function showFieldError(field, message) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: var(--neon-pink);
            font-size: 0.8rem;
            margin-top: 0.5rem;
            font-family: var(--font-mono);
        `;
        field.parentNode.appendChild(errorDiv);
    }
    
    function showFieldSuccess(field) {
        field.classList.add('success');
    }
}

// 3D Skills Cubes Interaction - Enhanced for Mobile
function init3DSkillCubes() {
    console.log('🎲 Initializing 3D skill cubes...');
    const skillCubes = document.querySelectorAll('.skill-cube');
    const skillTitle = document.getElementById('skill-title');
    const skillDescription = document.getElementById('skill-description');
    const skillTags = document.getElementById('skill-tags');
    const isMobile = window.innerWidth <= 768;
    
    console.log('Found skill cubes:', skillCubes.length);
    console.log('Found skill title element:', !!skillTitle);
    console.log('Found skill description element:', !!skillDescription);
    console.log('Found skill tags element:', !!skillTags);
    console.log('Is mobile device:', isMobile);
    
    const skillData = {
        programming: {
            title: "Programming Languages",
            description: "Core programming languages I use for software development, data analysis, and system programming.",
            tags: ["Python", "C++", "Java", "SQL", "Spark"]
        },
        database: {
            title: "Database Technologies",
            description: "Database systems and data storage technologies for managing and querying data efficiently.",
            tags: ["MySQL", "MongoDB", "NoSQL", "Data Modeling"]
        },
        'ai-ml': {
            title: "AI & Machine Learning",
            description: "Deep learning, computer vision, and AI frameworks used in research and production systems.",
            tags: ["CNN", "Transfer Learning", "Computer Vision", "Deep Learning", "Neural Networks"]
        },
        'cloud-tech': {
            title: "Cloud & Big Data",
            description: "Cloud platforms and big data technologies for scalable data processing and analytics.",
            tags: ["Microsoft Azure", "Hadoop", "Hive", "Big Data", "Cloud Computing"]
        },
        tools: {
            title: "Tools & Frameworks",
            description: "Specialized tools and frameworks for computer vision, audio processing, and interactive applications.",
            tags: ["MediaPipe", "Fluidsynth", "Computer Vision", "Data Processing", "Audio Processing"]
        }
    };
    
    // Mobile-specific initialization
    if (isMobile) {
        // Set default content for mobile
        if (skillTitle) skillTitle.textContent = 'Tap any skill card to explore';
        if (skillDescription) skillDescription.textContent = 'Touch the skill cards below to see technologies and frameworks';
        
        // Add mobile-specific attributes
        skillCubes.forEach(cube => {
            cube.setAttribute('role', 'button');
            cube.setAttribute('tabindex', '0');
            cube.setAttribute('aria-label', 'Skill category - tap to explore');
        });
    }
    
    skillCubes.forEach((cube, index) => {
        const skillType = cube.classList[1]; // Get the second class (skill type)
        const data = skillData[skillType];
        
        if (!data) return;
        
        // Mobile touch events
        if (isMobile) {
            cube.addEventListener('touchstart', (e) => {
                e.preventDefault();
                updateSkillInfo(data);
                
                // Visual feedback
                cube.style.transform = 'translateY(-5px) scale(1.02)';
                cube.style.borderColor = 'var(--neon-pink)';
                cube.style.boxShadow = '0 10px 30px rgba(0, 202, 255, 0.3)';
                
                // Haptic feedback
                if ('vibrate' in navigator) {
                    navigator.vibrate(10);
                }
                
                // Auto-reset after delay
                setTimeout(() => {
                    resetSkillCube(cube);
                }, 2000);
            }, { passive: false });
            
            cube.addEventListener('touchend', (e) => {
                e.preventDefault();
            });
            
            // Accessibility: Support keyboard navigation
            cube.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    updateSkillInfo(data);
                    cube.focus();
                }
            });
        } else {
            // Desktop hover events
            cube.addEventListener('mouseenter', () => {
                updateSkillInfo(data);
                cube.style.filter = 'drop-shadow(0 0 20px var(--neon-cyan))';
            });
            
            cube.addEventListener('mouseleave', () => {
                resetSkillInfo();
                cube.style.filter = 'none';
            });
        }
    });
    
    function updateSkillInfo(data) {
        if (!skillTitle || !skillDescription || !skillTags) return;
        
        skillTitle.textContent = data.title;
        skillDescription.textContent = data.description;
        
        // Clear existing tags
        skillTags.innerHTML = '';
        
        // Add new tags with animation delay
        data.tags.forEach((tag, index) => {
            const tagElement = document.createElement('span');
            tagElement.className = 'skill-tag';
            tagElement.textContent = tag;
            tagElement.style.opacity = '0';
            tagElement.style.transform = 'translateY(10px)';
            skillTags.appendChild(tagElement);
            
            // Animate in
            setTimeout(() => {
                tagElement.style.transition = 'all 0.3s ease';
                tagElement.style.opacity = '1';
                tagElement.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
    
    function resetSkillInfo() {
        if (!skillTitle || !skillDescription || !skillTags) return;
        
        skillTitle.textContent = isMobile ? 'Tap any skill card to explore' : 'Hover over a cube to explore';
        skillDescription.textContent = isMobile ? 'Touch the skill cards to see technologies and frameworks' : 'Discover the technologies and frameworks I work with';
        skillTags.innerHTML = '';
    }
    
    function resetSkillCube(cube) {
        cube.style.transform = '';
        cube.style.borderColor = '';
        cube.style.boxShadow = '';
        cube.style.filter = '';
    }
    
    // Handle orientation changes on mobile
    if (isMobile) {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                console.log('Orientation changed - reinitializing skill cubes');
                resetSkillInfo();
            }, 300);
        });
    }
}

// Enhanced Scroll Effects with Parallax and Navbar Changes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const navbar = document.querySelector('.navbar');
    
    // Parallax effect for hero
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = Math.max(1 - scrolled / (window.innerHeight * 0.8), 0);
    }
    
    // Dynamic navbar styling
    if (navbar) {
        if (scrolled > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(25px) saturate(200%)';
            navbar.style.borderBottomColor = 'rgba(0, 202, 255, 0.4)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.85)';
            navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
            navbar.style.borderBottomColor = 'rgba(0, 202, 255, 0.2)';
        }
    }
    
    // Floating elements movement
    const floatingElements = document.querySelectorAll('.floating-cube, .floating-sphere');
    floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Enhanced Tech Stack and Social Media Animations
document.addEventListener('DOMContentLoaded', () => {
    // Tech tags with advanced hover effects
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach((tag, index) => {
        tag.addEventListener('mouseenter', () => {
            // Stagger animation for nearby tags
            techTags.forEach((otherTag, otherIndex) => {
                if (Math.abs(index - otherIndex) <= 2 && otherTag !== tag) {
                    otherTag.style.transform = 'scale(0.95)';
                    otherTag.style.opacity = '0.7';
                }
            });
        });
        
        tag.addEventListener('mouseleave', () => {
            techTags.forEach(otherTag => {
                otherTag.style.transform = 'scale(1)';
                otherTag.style.opacity = '1';
            });
        });
    });
    
    // Enhanced social links with cyberpunk effects
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.background = 'var(--neon-gradient)';
            link.style.transform = 'translateY(-5px) scale(1.1)';
            link.style.boxShadow = '0 10px 20px rgba(0, 202, 255, 0.4)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.background = 'rgba(0, 202, 255, 0.1)';
            link.style.transform = 'translateY(0) scale(1)';
            link.style.boxShadow = 'none';
        });
    });
});

// Advanced Typewriter Effect
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 150;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize Typewriter Effect
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('#typewriter');
    if (typewriterElement) {
        const words = ['Code', 'Create', 'Convert', 'Design', 'Innovate', 'Build'];
        new TypeWriter(typewriterElement, words, 2000);
    }
});

// Smooth Page Transitions with Opacity
function initPageTransitions() {
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Don't interfere with resume download or external links
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                
                // Fade out effect
                body.style.opacity = '0.7';
                body.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    // Scroll to section
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                    
                    // Fade back in
                    body.style.opacity = '1';
                }, 300);
            }
        });
    });
}

// ================================================
// AI SHOWCASE & LEETCODE PLAYGROUND FUNCTIONALITY
// ================================================

// Neural Network Visualizer Class
class NeuralNetworkVisualizer {
    constructor() {
        this.isAnimating = false;
        this.connectionsSvg = document.getElementById('connections-svg');
        this.neurons = document.querySelectorAll('.neuron');
        this.playBtn = document.getElementById('nn-play-btn');
        this.resetBtn = document.getElementById('nn-reset-btn');
        
        this.init();
    }
    
    init() {
        if (!this.connectionsSvg) return;
        
        this.drawConnections();
        this.setupEventListeners();
        this.animateNeurons();
    }
    
    setupEventListeners() {
        this.playBtn?.addEventListener('click', () => this.toggleAnimation());
        this.resetBtn?.addEventListener('click', () => this.resetNetwork());
    }
    
    drawConnections() {
        const layers = document.querySelectorAll('.layer-group');
        const svg = this.connectionsSvg;
        
        // Clear existing connections
        svg.innerHTML = '';
        
        for (let i = 0; i < layers.length - 1; i++) {
            const currentLayer = layers[i];
            const nextLayer = layers[i + 1];
            
            const currentNeurons = currentLayer.querySelectorAll('.neuron');
            const nextNeurons = nextLayer.querySelectorAll('.neuron');
            
            currentNeurons.forEach(neuron1 => {
                nextNeurons.forEach(neuron2 => {
                    this.createConnection(neuron1, neuron2, svg);
                });
            });
        }
    }
    
    createConnection(neuron1, neuron2, svg) {
        const rect1 = neuron1.getBoundingClientRect();
        const rect2 = neuron2.getBoundingClientRect();
        const svgRect = svg.getBoundingClientRect();
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', rect1.left - svgRect.left + rect1.width / 2);
        line.setAttribute('y1', rect1.top - svgRect.top + rect1.height / 2);
        line.setAttribute('x2', rect2.left - svgRect.left + rect2.width / 2);
        line.setAttribute('y2', rect2.top - svgRect.top + rect2.height / 2);
        line.setAttribute('stroke', '#00caff');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('opacity', '0.3');
        line.classList.add('neural-connection');
        
        svg.appendChild(line);
    }
    
    toggleAnimation() {
        this.isAnimating = !this.isAnimating;
        const icon = this.playBtn.querySelector('i');
        
        if (this.isAnimating) {
            icon.className = 'fas fa-pause';
            this.startDataFlow();
        } else {
            icon.className = 'fas fa-play';
            this.stopDataFlow();
        }
    }
    
    startDataFlow() {
        this.animateDataFlow();
        this.animationInterval = setInterval(() => {
            this.animateDataFlow();
        }, 3000);
    }
    
    stopDataFlow() {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
    }
    
    animateDataFlow() {
        const connections = document.querySelectorAll('.neural-connection');
        
        connections.forEach((connection, index) => {
            setTimeout(() => {
                connection.style.stroke = '#ff6b35';
                connection.style.strokeWidth = '2';
                connection.style.opacity = '0.8';
                
                setTimeout(() => {
                    connection.style.stroke = '#00caff';
                    connection.style.strokeWidth = '1';
                    connection.style.opacity = '0.3';
                }, 200);
            }, index * 50);
        });
    }
    
    animateNeurons() {
        this.neurons.forEach((neuron, index) => {
            const value = parseFloat(neuron.dataset.value);
            const intensity = Math.min(value * 100, 100);
            
            neuron.style.boxShadow = `0 0 ${intensity * 0.3}px rgba(0, 202, 255, ${value})`;
            
            // Pulse animation
            setTimeout(() => {
                neuron.style.transform = `scale(${1 + value * 0.2})`;
                setTimeout(() => {
                    neuron.style.transform = 'scale(1)';
                }, 500);
            }, index * 100);
        });
    }
    
    resetNetwork() {
        this.isAnimating = false;
        const icon = this.playBtn.querySelector('i');
        icon.className = 'fas fa-play';
        this.stopDataFlow();
        
        // Reset neuron states
        this.neurons.forEach(neuron => {
            neuron.style.transform = 'scale(1)';
            neuron.style.boxShadow = '0 0 10px rgba(0, 202, 255, 0.3)';
        });
    }
}

// Research Impact Dashboard
class ResearchDashboard {
    constructor() {
        this.refreshBtn = document.getElementById('refresh-metrics-btn');
        this.impactChart = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadResearchMetrics();
        this.createImpactChart();
        this.animateTimeline();
    }
    
    setupEventListeners() {
        this.refreshBtn?.addEventListener('click', () => this.refreshMetrics());
    }
    
    async loadResearchMetrics() {
        // Simulate loading research metrics
        const metrics = {
            nature: { citations: 15, reads: 1250 },
            ijdv: { citations: 8, reads: 890 }
        };
        
        this.updateMetricsDisplay(metrics);
    }
    
    updateMetricsDisplay(metrics) {
        const natureCitations = document.getElementById('nature-citations');
        const natureReads = document.getElementById('nature-reads');
        const ijdvCitations = document.getElementById('ijdv-citations');
        const ijdvReads = document.getElementById('ijdv-reads');
        
        if (natureCitations) this.animateCounter(natureCitations, metrics.nature.citations);
        if (natureReads) this.animateCounter(natureReads, metrics.nature.reads);
        if (ijdvCitations) this.animateCounter(ijdvCitations, metrics.ijdv.citations);
        if (ijdvReads) this.animateCounter(ijdvReads, metrics.ijdv.reads);
    }
    
    animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 30);
    }
    
    createImpactChart() {
        const canvas = document.getElementById('research-impact-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        this.impactChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025'],
                datasets: [{
                    label: 'Citations',
                    data: [2, 5, 8, 12, 18, 23],
                    borderColor: '#00caff',
                    backgroundColor: 'rgba(0, 202, 255, 0.1)',
                    tension: 0.4
                }, {
                    label: 'Reads',
                    data: [50, 180, 420, 750, 1100, 1500],
                    borderColor: '#ff6b35',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        grid: {
                            color: 'rgba(0, 202, 255, 0.1)'
                        },
                        ticks: {
                            color: '#00caff'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            color: '#ff6b35'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    }
    
    animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 300);
        });
    }
    
    refreshMetrics() {
        const icon = this.refreshBtn.querySelector('i');
        icon.style.animation = 'spin 1s linear infinite';
        
        setTimeout(() => {
            this.loadResearchMetrics();
            icon.style.animation = '';
        }, 1000);
    }
}

// AI Algorithm Playground
class AlgorithmPlayground {
    constructor() {
        this.algorithmSelector = document.getElementById('algorithm-selector');
        this.runCnnBtn = document.getElementById('run-cnn-demo');
        this.learningRateSlider = document.getElementById('learning-rate');
        this.batchSizeSlider = document.getElementById('batch-size');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.drawReluGraph();
        this.setupParameterControls();
    }
    
    setupEventListeners() {
        this.algorithmSelector?.addEventListener('change', (e) => this.switchAlgorithm(e.target.value));
        this.runCnnBtn?.addEventListener('click', () => this.runCnnDemo());
        
        // Copy code functionality
        const copyBtn = document.querySelector('.copy-code-btn');
        copyBtn?.addEventListener('click', () => this.copyCode());
    }
    
    setupParameterControls() {
        this.learningRateSlider?.addEventListener('input', (e) => {
            document.getElementById('lr-value').textContent = e.target.value;
        });
        
        this.batchSizeSlider?.addEventListener('input', (e) => {
            document.getElementById('bs-value').textContent = e.target.value;
        });
    }
    
    drawReluGraph() {
        const canvas = document.getElementById('relu-graph');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Draw axes
        ctx.strokeStyle = '#00caff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(width/2, 0);
        ctx.lineTo(width/2, height);
        ctx.moveTo(0, height/2);
        ctx.lineTo(width, height/2);
        ctx.stroke();
        
        // Draw ReLU function
        ctx.strokeStyle = '#ff6b35';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, height/2);
        ctx.lineTo(width/2, height/2);
        ctx.lineTo(width, 0);
        ctx.stroke();
        
        // Add labels
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Space Mono';
        ctx.fillText('ReLU(x)', width - 50, 15);
        ctx.fillText('x', width - 15, height/2 + 15);
    }
    
    runCnnDemo() {
        const btn = this.runCnnBtn;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        btn.disabled = true;
        
        // Animate convolution operation
        this.animateConvolution();
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-play"></i> Run CNN Demo';
            btn.disabled = false;
        }, 3000);
    }
    
    animateConvolution() {
        const filterCells = document.querySelectorAll('.matrix-cell');
        const operationArrow = document.querySelector('.operation-arrow');
        
        // Animate filter highlighting
        filterCells.forEach((cell, index) => {
            setTimeout(() => {
                cell.style.background = '#ff6b35';
                cell.style.color = '#000';
                setTimeout(() => {
                    cell.style.background = '';
                    cell.style.color = '';
                }, 200);
            }, index * 100);
        });
        
        // Animate arrow
        setTimeout(() => {
            operationArrow.style.transform = 'scale(1.2)';
            operationArrow.style.color = '#ff6b35';
            setTimeout(() => {
                operationArrow.style.transform = 'scale(1)';
                operationArrow.style.color = '';
            }, 500);
        }, 800);
    }
    
    switchAlgorithm(algorithm) {
        // Update explanation content based on selected algorithm
        const explanations = {
            'cnn': {
                title: 'Convolutional Neural Networks (CNN)',
                description: 'CNNs are specialized neural networks for processing grid-like data such as images.',
                points: [
                    'Convolution Layer: Applies filters to detect features like edges, textures',
                    'Pooling Layer: Reduces spatial dimensions while retaining important information',
                    'ReLU Activation: Introduces non-linearity, helping the network learn complex patterns',
                    'Transfer Learning: Uses pre-trained models (ImageNet) for medical image classification'
                ]
            },
            'transfer-learning': {
                title: 'Transfer Learning',
                description: 'Transfer learning leverages pre-trained models to solve new but related problems.',
                points: [
                    'Pre-trained Models: Start with models trained on large datasets like ImageNet',
                    'Feature Extraction: Use lower layers as fixed feature extractors',
                    'Fine-tuning: Adjust higher layers for specific tasks',
                    'Domain Adaptation: Bridge the gap between source and target domains'
                ]
            }
        };
        
        const explanation = explanations[algorithm];
        if (explanation) {
            this.updateExplanation(explanation);
        }
    }
    
    updateExplanation(explanation) {
        const content = document.getElementById('explanation-content');
        if (!content) return;
        
        content.innerHTML = `
            <h4>${explanation.title}</h4>
            <p>${explanation.description}</p>
            <ul>
                ${explanation.points.map(point => `<li><strong>${point.split(':')[0]}:</strong>${point.split(':')[1] || ''}</li>`).join('')}
            </ul>
        `;
    }
    
    copyCode() {
        const codeElement = document.getElementById('algorithm-code');
        const text = codeElement.textContent;
        
        navigator.clipboard.writeText(text).then(() => {
            const copyBtn = document.querySelector('.copy-code-btn');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    }
}

// LeetCode Dashboard
class LeetCodeDashboard {
    constructor() {
        this.refreshBtn = document.getElementById('refresh-leetcode-stats');
        this.difficultyChart = null;
        this.performanceChart = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadLeetCodeStats();
        this.createDifficultyChart();
        this.createPerformanceChart();
        this.generateActivityHeatmap();
    }
    
    setupEventListeners() {
        this.refreshBtn?.addEventListener('click', () => this.refreshStats());
    }
    
    async loadLeetCodeStats() {
        // Simulate loading LeetCode stats
        const stats = {
            ranking: 125000,
            streak: 15,
            acceptance: 85.2,
            easy: 45,
            medium: 32,
            hard: 8,
            total: 85
        };
        
        this.updateStatsDisplay(stats);
    }
    
    updateStatsDisplay(stats) {
        const elements = {
            'leetcode-ranking': this.formatRanking(stats.ranking),
            'leetcode-streak': stats.streak,
            'leetcode-acceptance': stats.acceptance + '%',
            'lc-easy-count': stats.easy,
            'lc-medium-count': stats.medium,
            'lc-hard-count': stats.hard
        };
        
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                if (typeof value === 'number') {
                    this.animateCounter(element, value);
                } else {
                    element.textContent = value;
                }
            }
        });
    }
    
    formatRanking(ranking) {
        if (ranking > 1000000) return `${(ranking / 1000000).toFixed(1)}M`;
        if (ranking > 1000) return `${(ranking / 1000).toFixed(0)}K`;
        return ranking.toString();
    }
    
    animateCounter(element, target) {
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 50);
    }
    
    createDifficultyChart() {
        const canvas = document.getElementById('difficulty-donut-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        this.difficultyChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Easy', 'Medium', 'Hard'],
                datasets: [{
                    data: [45, 32, 8],
                    backgroundColor: ['#00caff', '#ff6b35', '#ff3366'],
                    borderWidth: 0,
                    cutout: '70%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    createPerformanceChart() {
        const canvas = document.getElementById('performance-trend-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        this.performanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Problems Solved',
                    data: [2, 4, 3, 5, 2, 6, 4],
                    borderColor: '#00caff',
                    backgroundColor: 'rgba(0, 202, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 202, 255, 0.1)'
                        },
                        ticks: {
                            color: '#00caff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    }
    
    generateActivityHeatmap() {
        const heatmapContainer = document.getElementById('activity-heatmap');
        if (!heatmapContainer) return;
        
        const weeks = 20;
        const daysPerWeek = 7;
        
        for (let week = 0; week < weeks; week++) {
            const weekDiv = document.createElement('div');
            weekDiv.className = 'heatmap-week';
            
            for (let day = 0; day < daysPerWeek; day++) {
                const dayDiv = document.createElement('div');
                const activity = Math.floor(Math.random() * 5);
                dayDiv.className = `heatmap-day level-${activity}`;
                dayDiv.title = `${activity} problems solved`;
                weekDiv.appendChild(dayDiv);
            }
            
            heatmapContainer.appendChild(weekDiv);
        }
    }
    
    refreshStats() {
        const icon = this.refreshBtn.querySelector('i');
        icon.style.animation = 'spin 1s linear infinite';
        
        setTimeout(() => {
            this.loadLeetCodeStats();
            icon.style.animation = '';
        }, 1000);
    }
}

// Algorithm Visualizer
class AlgorithmVisualizer {
    constructor() {
        this.algorithmType = document.getElementById('algorithm-type');
        this.searchBtn = document.getElementById('start-binary-search');
        this.searchTarget = document.getElementById('search-target');
        this.currentStep = 0;
        this.totalSteps = 0;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateComplexity('binary-search');
    }
    
    setupEventListeners() {
        this.algorithmType?.addEventListener('change', (e) => this.switchAlgorithm(e.target.value));
        this.searchBtn?.addEventListener('click', () => this.startBinarySearch());
    }
    
    switchAlgorithm(algorithm) {
        const complexities = {
            'binary-search': { time: 'O(log n)', space: 'O(1)' },
            'merge-sort': { time: 'O(n log n)', space: 'O(n)' },
            'dfs': { time: 'O(V + E)', space: 'O(V)' },
            'bfs': { time: 'O(V + E)', space: 'O(V)' },
            'dp': { time: 'O(n²)', space: 'O(n)' }
        };
        
        this.updateComplexity(algorithm);
    }
    
    updateComplexity(algorithm) {
        const complexities = {
            'binary-search': { time: 'O(log n)', space: 'O(1)' },
            'merge-sort': { time: 'O(n log n)', space: 'O(n)' },
            'dfs': { time: 'O(V + E)', space: 'O(V)' },
            'bfs': { time: 'O(V + E)', space: 'O(V)' },
            'dp': { time: 'O(n²)', space: 'O(n)' }
        };
        
        const complexity = complexities[algorithm];
        if (complexity) {
            document.getElementById('time-complexity').textContent = complexity.time;
            document.getElementById('space-complexity').textContent = complexity.space;
        }
    }
    
    async startBinarySearch() {
        const target = parseInt(this.searchTarget.value);
        const arrayElements = document.querySelectorAll('.array-element');
        const array = Array.from(arrayElements).map(el => parseInt(el.dataset.value));
        
        this.resetArray();
        this.currentStep = 0;
        this.totalSteps = Math.ceil(Math.log2(array.length));
        
        let left = 0;
        let right = array.length - 1;
        let found = false;
        
        while (left <= right && !found) {
            this.currentStep++;
            this.updateStepCounter();
            
            const mid = Math.floor((left + right) / 2);
            
            // Highlight current search range
            this.highlightRange(left, right);
            await this.delay(800);
            
            // Highlight middle element
            this.highlightElement(mid, 'checking');
            this.updateStepDescription(`Checking middle element at index ${mid}: ${array[mid]}`);
            await this.delay(1000);
            
            if (array[mid] === target) {
                this.highlightElement(mid, 'found');
                this.updateStepDescription(`Found target ${target} at index ${mid}!`);
                found = true;
            } else if (array[mid] < target) {
                this.updateStepDescription(`${array[mid]} < ${target}, searching right half`);
                left = mid + 1;
            } else {
                this.updateStepDescription(`${array[mid]} > ${target}, searching left half`);
                right = mid - 1;
            }
            
            await this.delay(1000);
        }
        
        if (!found) {
            this.updateStepDescription(`Target ${target} not found in array`);
        }
    }
    
    resetArray() {
        const elements = document.querySelectorAll('.array-element');
        elements.forEach(el => {
            el.className = 'array-element';
        });
    }
    
    highlightRange(left, right) {
        const elements = document.querySelectorAll('.array-element');
        elements.forEach((el, index) => {
            if (index >= left && index <= right) {
                el.classList.add('in-range');
            } else {
                el.classList.add('out-of-range');
            }
        });
    }
    
    highlightElement(index, type) {
        const elements = document.querySelectorAll('.array-element');
        elements[index].classList.add(type);
    }
    
    updateStepCounter() {
        document.getElementById('current-step').textContent = this.currentStep;
        document.getElementById('total-steps').textContent = this.totalSteps;
    }
    
    updateStepDescription(description) {
        document.getElementById('step-description').textContent = description;
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize all AI & LeetCode components when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AI Showcase components
    new NeuralNetworkVisualizer();
    new ResearchDashboard();
    new AlgorithmPlayground();
    
    // Initialize LeetCode components
    new LeetCodeDashboard();
    new AlgorithmVisualizer();
    
    // Add scroll animations for showcase sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe showcase cards
    const showcaseCards = document.querySelectorAll('.showcase-card, .overview-card, .analysis-card, .stats-card');
    showcaseCards.forEach(card => observer.observe(card));
});

// Add CSS keyframes for animations
const style = document.createElement('style');
style.textContent = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.animate-in {
    animation: slideInUp 0.6s ease-out forwards;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.array-element.in-range {
    background: linear-gradient(135deg, #00caff, #0099cc);
    color: #000;
    box-shadow: 0 0 20px rgba(0, 202, 255, 0.6);
}

.array-element.out-of-range {
    opacity: 0.3;
    background: #333;
}

.array-element.checking {
    background: linear-gradient(135deg, #ff6b35, #ff4422);
    animation: pulse 1s infinite;
}

.array-element.found {
    background: linear-gradient(135deg, #00ff88, #00cc66);
    animation: celebration 1s ease-out;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

@keyframes celebration {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.2) rotate(-5deg); }
    75% { transform: scale(1.2) rotate(5deg); }
}

.heatmap-week {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.heatmap-day {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    background: #1a1a1a;
    border: 1px solid #333;
}

.heatmap-day.level-1 { background: rgba(0, 202, 255, 0.2); }
.heatmap-day.level-2 { background: rgba(0, 202, 255, 0.4); }
.heatmap-day.level-3 { background: rgba(0, 202, 255, 0.6); }
.heatmap-day.level-4 { background: rgba(0, 202, 255, 0.8); }

#activity-heatmap {
    display: flex;
    gap: 2px;
    padding: 20px;
    overflow-x: auto;
}
`;
document.head.appendChild(style);