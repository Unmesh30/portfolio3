import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Mobile-first header container with proper touch targets
const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
  z-index: 1000;
  padding: 1rem 0;
  min-height: 70px; /* Ensure minimum touch target height */
  
  /* Mobile-first: Start with mobile styles */
  @media (min-width: 769px) {
    padding: 1.2rem 0;
    min-height: 80px;
  }
`;

// Mobile-first navigation container
const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile-first: smaller padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 0 2rem;
  }
`;

// Mobile-first logo with better responsiveness
const Logo = styled(motion.div)`
  font-family: 'Orbitron', monospace;
  font-size: 1.25rem; /* Mobile-first: smaller size */
  font-weight: 900;
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
  line-height: 1.2;
  cursor: pointer;
  
  /* Enhanced for tablets and desktop */
  @media (min-width: 480px) {
    font-size: 1.4rem;
  }
  
  @media (min-width: 769px) {
    font-size: 1.6rem;
  }
`;

// Desktop navigation (hidden on mobile by default)
const NavMenu = styled.ul`
  display: none; /* Mobile-first: hidden by default */
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  
  /* Show on larger screens */
  @media (min-width: 969px) {
    display: flex;
    gap: 2rem;
  }
`;

// Desktop navigation links
const NavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0; /* Better touch target */
  
  &:hover {
    color: #00ff88;
    text-shadow: 0 0 8px #00ff88;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #00ff88;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

// Mobile-first hamburger menu button with proper touch target
const MobileMenuButton = styled.button`
  display: flex; /* Mobile-first: shown by default */
  align-items: center;
  justify-content: center;
  background: none;
  border: 2px solid rgba(0, 255, 136, 0.3);
  color: #ffffff;
  width: 48px; /* Minimum 44px touch target */
  height: 48px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: rgba(0, 255, 136, 0.6);
    background: rgba(0, 255, 136, 0.1);
    color: #00ff88;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  /* Hide on desktop */
  @media (min-width: 969px) {
    display: none;
  }
`;

// Improved hamburger/close icon
const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  span {
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    border-radius: 1px;
    transition: all 0.3s ease;
    transform-origin: center;
    
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
  
  /* Transform to X when menu is open */
  ${props => props.isOpen && `
    span:first-child {
      transform: translateY(6px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
      transform: scale(0);
    }
    span:last-child {
      transform: translateY(-6px) rotate(-45deg);
    }
  `}
`;

// Mobile-first full-screen menu
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
  
  /* Enhanced spacing for larger mobile screens */
  @media (min-width: 480px) {
    gap: 2.5rem;
  }
  
  @media (min-width: 769px) {
    gap: 3rem;
  }
`;

// Mobile navigation links with better touch targets
const MobileNavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.25rem; /* Mobile-first: readable size */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-align: center;
  min-width: 200px;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  
  &:hover, &:focus {
    color: #00ff88;
    text-shadow: 0 0 15px #00ff88;
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    font-size: 1.4rem;
    padding: 1.2rem 2.5rem;
    min-width: 240px;
  }
  
  @media (min-width: 769px) {
    font-size: 1.6rem;
    padding: 1.5rem 3rem;
    min-width: 280px;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#toolbox', label: 'Toolbox' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#publications', label: 'Publications' },
    { href: '#bucket-list', label: 'Bucket List' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset'; // Restore body scroll
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Clean up body overflow on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <HeaderContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 255, 136, 0.1)' : 'none',
        }}
      >
        <Nav>
          <Logo
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('#home')}
          >
            Unmesh Achar
          </Logo>
          
          <NavMenu>
            {navItems.map((item, index) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </NavMenu>
          
          <MobileMenuButton 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <MenuIcon isOpen={isMobileMenuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </MenuIcon>
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;