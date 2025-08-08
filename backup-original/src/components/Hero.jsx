import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  id: home;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 80px);
  gap: 2rem;
  
  @media (min-width: 769px) {
    flex-direction: row;
    padding: 0 2rem;
    text-align: left;
    gap: 4rem;
    min-height: 100vh;
  }
`;

const HeroContent = styled.div`
  z-index: 2;
  
  @media (max-width: 968px) {
    order: 2;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-family: 'Space Mono', monospace;
  font-size: clamp(1rem, 4vw, 1.8rem);
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: clamp(0.9rem, 3vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 100%;
  
  @media (min-width: 769px) {
    max-width: 500px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
  
  @media (min-width: 769px) {
    flex-direction: row;
    max-width: none;
    gap: 1.5rem;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 255, 136, 0.4);
  }
  
  @media (min-width: 769px) {
    width: auto;
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  border: 2px solid #00ff88;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  color: #00ff88;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  width: 100%;
  
  &:hover {
    background: #00ff88;
    color: #0f0f0f;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 255, 136, 0.3);
  }
  
  @media (min-width: 769px) {
    width: auto;
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  
  @media (min-width: 769px) {
    margin-bottom: 0;
    flex: 1;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #00ff88;
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
  
  @media (min-width: 769px) {
    width: 350px;
    height: 350px;
    border: 4px solid #00ff88;
    box-shadow: 0 0 50px rgba(0, 255, 136, 0.3);
  }
  
  @media (min-width: 1200px) {
    width: 400px;
    height: 400px;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingCube = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 4px;
  opacity: 0.6;
  
  &.cube-1 {
    top: 20%;
    left: 10%;
  }
  
  &.cube-2 {
    top: 60%;
    right: 15%;
  }
  
  &.cube-3 {
    bottom: 30%;
    left: 20%;
  }
`;

const FloatingSphere = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, #ff0088, #00ff88);
  border-radius: 50%;
  opacity: 0.4;
  
  &.sphere-1 {
    top: 40%;
    right: 25%;
  }
  
  &.sphere-2 {
    bottom: 20%;
    right: 40%;
  }
`;

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <HeroSection id="home">
      <FloatingElements>
        <FloatingCube 
          className="cube-1" 
          variants={floatingVariants}
          animate="animate"
        />
        <FloatingCube 
          className="cube-2" 
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <FloatingCube 
          className="cube-3" 
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <FloatingSphere 
          className="sphere-1" 
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <FloatingSphere 
          className="sphere-2" 
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
        />
      </FloatingElements>
      
      <HeroContainer>
        <HeroImageContainer>
          <ProfileImage
            src="/profile-photo.jpg"
            alt="Unmesh Achar"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 80px rgba(0, 255, 136, 0.5)"
            }}
          />
        </HeroImageContainer>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ flex: 1 }}
        >
          <HeroContent>
            <HeroTitle variants={itemVariants}>
              Unmesh Achar
            </HeroTitle>
            <HeroSubtitle variants={itemVariants}>
              Computer Engineering Graduate
            </HeroSubtitle>
            <HeroDescription variants={itemVariants}>
              Passionate about cybersecurity, full-stack development, and creating
              innovative solutions that bridge the gap between security and user experience.
            </HeroDescription>
            <HeroButtons variants={itemVariants}>
              <PrimaryButton
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </PrimaryButton>
              <SecondaryButton
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
              >
                Get In Touch
              </SecondaryButton>
            </HeroButtons>
          </HeroContent>
        </motion.div>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;