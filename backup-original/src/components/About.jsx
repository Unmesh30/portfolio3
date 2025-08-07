import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-radius: 2px;
  }

  @media (max-width: 968px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const AboutText = styled(motion.p)`
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightText = styled.span`
  color: #00ff88;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
`;

const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const AboutImage = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  height: 400px;
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

  @media (max-width: 768px) {
    max-width: 320px;
    height: 320px;
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

const AboutStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const StatNumber = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  font-weight: 900;
  color: #00ff88;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
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
          viewport={{ once: true, amount: 0.3 }}
        >
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

        <AboutImageContainer>
          <AboutImage
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(0, 255, 136, 0.3)"
            }}
          >
            <AboutImageContent>
              <AboutIcon>🚀</AboutIcon>
              <div style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600',
                background: 'linear-gradient(45deg, #00ff88, #ff0088)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Innovation
              </div>
            </AboutImageContent>
          </AboutImage>
        </AboutImageContainer>
      </AboutContainer>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
      >
        <AboutStats>
          <StatItem
            variants={statsVariants}
            whileHover={{ y: -10 }}
          >
            <StatNumber>3+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem
            variants={statsVariants}
            whileHover={{ y: -10 }}
          >
            <StatNumber>15+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem
            variants={statsVariants}
            whileHover={{ y: -10 }}
          >
            <StatNumber>10+</StatNumber>
            <StatLabel>Technologies Mastered</StatLabel>
          </StatItem>
          <StatItem
            variants={statsVariants}
            whileHover={{ y: -10 }}
          >
            <StatNumber>24/7</StatNumber>
            <StatLabel>Problem Solver</StatLabel>
          </StatItem>
        </AboutStats>
      </motion.div>
    </AboutSection>
  );
};

export default About;