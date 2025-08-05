// Enhanced Mobile Navigation Toggle with Cyberpunk Effects
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

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

// Initialize typing effect
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const fullText = heroTitle.textContent;
        typeWriter(heroTitle, fullText, 60);
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
        
        // Animation loop
        animate();
        console.log('✅ 3D scene initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing 3D scene:', error);
    }
}

function createParticleSystem() {
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color = new THREE.Color();
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 1] = (Math.random() - 0.5) * 20;
        positions[i3 + 2] = (Math.random() - 0.5) * 20;
        
        // Cyberpunk colors
        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
            color.setHex(0x00caff); // Neon cyan
        } else if (colorChoice < 0.66) {
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
    
    const material = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
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

function animate() {
    requestAnimationFrame(animate);
    
    if (particles) {
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
        
        // Mouse interaction
        particles.rotation.x += mouseY * 0.001;
        particles.rotation.y += mouseX * 0.001;
    }
    
    // Animate floating objects
    scene.children.forEach((child, index) => {
        if (child.userData.rotationSpeed) {
            child.rotation.x += child.userData.rotationSpeed.x;
            child.rotation.y += child.userData.rotationSpeed.y;
            child.rotation.z += child.userData.rotationSpeed.z;
        }
        
        if (child.userData.floatSpeed) {
            child.position.y = child.userData.originalY + Math.sin(Date.now() * child.userData.floatSpeed) * 0.5;
        }
    });
    
    // Camera movement based on mouse
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
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

// 3D Skills Cubes Interaction
function init3DSkillCubes() {
    console.log('🎲 Initializing 3D skill cubes...');
    const skillCubes = document.querySelectorAll('.skill-cube');
    const skillTitle = document.getElementById('skill-title');
    const skillDescription = document.getElementById('skill-description');
    const skillTags = document.getElementById('skill-tags');
    
    console.log('Found skill cubes:', skillCubes.length);
    console.log('Found skill title element:', !!skillTitle);
    console.log('Found skill description element:', !!skillDescription);
    console.log('Found skill tags element:', !!skillTags);
    
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
    
    skillCubes.forEach(cube => {
        cube.addEventListener('mouseenter', () => {
            const skillType = cube.classList[1]; // Get the second class (skill type)
            const data = skillData[skillType];
            
            if (data) {
                skillTitle.textContent = data.title;
                skillDescription.textContent = data.description;
                
                // Clear existing tags
                skillTags.innerHTML = '';
                
                // Add new tags
                data.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'skill-tag';
                    tagElement.textContent = tag;
                    skillTags.appendChild(tagElement);
                });
                
                // Add glow effect to cube
                cube.style.filter = 'drop-shadow(0 0 20px var(--neon-cyan))';
            }
        });
        
        cube.addEventListener('mouseleave', () => {
            skillTitle.textContent = 'Hover over a cube to explore';
            skillDescription.textContent = 'Discover the technologies and frameworks I work with';
            skillTags.innerHTML = '';
            cube.style.filter = 'none';
        });
    });
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