import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Mobile-first section with proper spacing
const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 0 3rem; /* Mobile-first: smaller padding */
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 8rem 0 4rem;
  }
`;

// Mobile-first container with flex layout
const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile-first: smaller padding */
  display: flex;
  flex-direction: column; /* Mobile-first: stack vertically */
  gap: 2rem;
  align-items: center;
  text-align: center;

  /* Enhanced for tablets */
  @media (min-width: 769px) {
    padding: 0 2rem;
    gap: 3rem;
  }

  /* Desktop layout */
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
    text-align: left;
    align-items: flex-start;
  }
`;

// Mobile-first content container
const AboutContent = styled.div`
  z-index: 2;
  width: 100%;
  max-width: 600px; /* Prevent text from being too wide on larger screens */
  
  /* Desktop: flex to take available space */
  @media (min-width: 1024px) {
    flex: 1;
    max-width: none;
  }
`;

// Mobile-first title with better sizing
const SectionTitle = styled(motion.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem; /* Mobile-first: fixed readable size */
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  line-height: 1.2;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%; /* Mobile-first: centered */
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-radius: 2px;
  }

  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    font-size: 2.8rem;
    margin-bottom: 2rem;
  }

  /* Tablet and larger */
  @media (min-width: 769px) {
    font-size: 3.2rem;
  }

  /* Desktop: left align */
  @media (min-width: 1024px) {
    text-align: left;
    
    &::after {
      left: 0;
      transform: none;
    }
  }
`;

// Mobile-first text with proper sizing
const AboutText = styled(motion.p)`
  font-size: 1rem; /* Mobile-first: minimum readable size */
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 100%;
  
  &:last-child {
    margin-bottom: 0;
  }

  /* Enhanced readability for larger screens */
  @media (min-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  @media (min-width: 769px) {
    font-size: 1.15rem;
  }

  /* Desktop: left align */
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const HighlightText = styled.span`
  color: #00ff88;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
`;

// Mobile-first image container
const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  order: -1; /* Mobile-first: image at top */
  
  /* Desktop: normal order */
  @media (min-width: 1024px) {
    order: 0;
    flex-shrink: 0;
  }
`;

// Mobile-first responsive image
const AboutImage = styled(motion.div)`
  width: 100%;
  max-width: 280px; /* Mobile-first: smaller size */
  height: 280px;
  background: linear-gradient(135deg, #00ff88 0%, #ff0088 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #1a1a1a;
    border-radius: 18px;
    z-index: 1;
  }

  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    max-width: 320px;
    height: 320px;
  }

  /* Tablet size */
  @media (min-width: 769px) {
    max-width: 360px;
    height: 360px;
  }

  /* Desktop size */
  @media (min-width: 1024px) {
    max-width: 400px;
    height: 400px;
  }
`;

const AboutImageContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #ffffff;
`;

const AboutIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

// Mobile-first stats container
const AboutStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Mobile-first: 2 columns */
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;

  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  /* Tablet and larger: 4 columns */
  @media (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }

  /* Desktop: full width */
  @media (min-width: 1024px) {
    margin-left: -4rem; /* Extend beyond content width */
    margin-right: -4rem;
    padding: 0 4rem;
  }
`;

// Mobile-first stat items with touch-friendly design
const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1rem; /* Mobile-first: smaller padding */
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer; /* Mobile-friendly interaction */

  &:hover, &:active {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-3px);
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    padding: 1.2rem;
  }

  @media (min-width: 769px) {
    padding: 1.5rem;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

// Mobile-first stat numbers
const StatNumber = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem; /* Mobile-first: readable size */
  font-weight: 900;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.8rem;
  }

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;

// Mobile-first stat labels
const StatLabel = styled.div`
  font-size: 0.8rem; /* Mobile-first: readable size */
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 1.3;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 0.85rem;
  }

  @media (min-width: 769px) {
    font-size: 0.9rem;
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

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  opacity: 0.1;

  &.shape-1 {
    width: 100px;
    height: 100px;
    top: 15%;
    right: 10%;
  }

  &.shape-2 {
    width: 60px;
    height: 60px;
    bottom: 25%;
    left: 15%;
  }

  &.shape-3 {
    width: 80px;
    height: 80px;
    top: 60%;
    right: 25%;
  }
`;

const About = () => {
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
      y: [0, -30, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <AboutSection id="about">
      <FloatingElements>
        <FloatingShape
          className="shape-1"
          variants={floatingVariants}
          animate="animate"
        />
        <FloatingShape
          className="shape-2"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <FloatingShape
          className="shape-3"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </FloatingElements>

      <AboutContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
        >
          {/* Mobile-first: Image at top */}
          <AboutImageContainer>
            <AboutImage
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: 0.2
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 255, 136, 0.3)"
              }}
              whileTap={{ scale: 0.98 }} // Mobile touch feedback
            >
              <AboutImageContent>
                <AboutIcon>🚀</AboutIcon>
                <div style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '600',
                  background: 'linear-gradient(45deg, #00ff88, #ff0088)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  '@media (min-width: 480px)': {
                    fontSize: '1.2rem'
                  }
                }}>
                  Innovation
                </div>
              </AboutImageContent>
            </AboutImage>
          </AboutImageContainer>

          {/* Content section */}
          <AboutContent>
            <SectionTitle variants={itemVariants}>
              About Me
            </SectionTitle>
            <AboutText variants={itemVariants}>
              I'm a <HighlightText>Computer Engineering graduate</HighlightText> with a passion for 
              creating innovative solutions at the intersection of cybersecurity and user experience. 
              My journey in technology began with curiosity about how systems work and evolved into 
              a deep commitment to building secure, efficient applications.
            </AboutText>
            <AboutText variants={itemVariants}>
              With expertise in <HighlightText>full-stack development</HighlightText> and 
              <HighlightText>cybersecurity practices</HighlightText>, I enjoy tackling complex 
              challenges that require both technical depth and creative problem-solving. I believe 
              in writing clean, maintainable code and designing solutions that prioritize both 
              security and usability.
            </AboutText>
            <AboutText variants={itemVariants}>
              When I'm not coding, you'll find me exploring the latest security research, 
              contributing to open-source projects, or planning my next adventure. I'm always 
              eager to learn new technologies and collaborate on projects that make a meaningful impact.
            </AboutText>
          </AboutContent>
        </motion.div>

        {/* Stats section - integrated into main container */}
        <AboutStats
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
              },
            },
          }}
        >
          <StatItem
            variants={statsVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }} // Mobile touch feedback
          >
            <StatNumber>3+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem
            variants={statsVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <StatNumber>15+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem
            variants={statsVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <StatNumber>10+</StatNumber>
            <StatLabel>Technologies Mastered</StatLabel>
          </StatItem>
          <StatItem
            variants={statsVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <StatNumber>24/7</StatNumber>
            <StatLabel>Problem Solver</StatLabel>
          </StatItem>
        </AboutStats>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;