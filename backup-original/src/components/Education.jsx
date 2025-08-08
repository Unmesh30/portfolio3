import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Mobile-first education section
const EducationSection = styled.section`
  min-height: 100vh;
  padding: 6rem 0 3rem; /* Mobile-first: smaller padding */
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 8rem 0 4rem;
  }
`;

// Mobile-first container
const EducationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile-first: smaller padding */

  /* Enhanced for larger screens */
  @media (min-width: 769px) {
    padding: 0 2rem;
  }
`;

// Mobile-first section title
const SectionTitle = styled(motion.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem; /* Mobile-first: fixed size */
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  line-height: 1.2;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-radius: 2px;
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 769px) {
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }
`;

// Mobile-first timeline - simplified approach
const EducationTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  /* Mobile-first: simple left-aligned line */
  &::before {
    content: '';
    position: absolute;
    left: 20px; /* Mobile-first: left-aligned */
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #00ff88, #ff0088);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  }

  /* Desktop: center the timeline */
  @media (min-width: 1024px) {
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

// Mobile-first education item - always left-aligned
const EducationItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem; /* Mobile-first: smaller spacing */
  padding-left: 60px; /* Mobile-first: space for timeline */
  display: block; /* Mobile-first: simple block layout */

  &:last-child {
    margin-bottom: 0;
  }

  /* Enhanced spacing for larger screens */
  @media (min-width: 480px) {
    margin-bottom: 3.5rem;
    padding-left: 70px;
  }

  @media (min-width: 769px) {
    margin-bottom: 4rem;
    padding-left: 80px;
  }

  /* Desktop: alternating layout */
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    padding-left: 0;
    
    &:nth-child(odd) {
      justify-content: flex-end;
    }

    &:nth-child(even) {
      justify-content: flex-start;
    }
  }
`;

// Mobile-first timeline node
const TimelineNode = styled(motion.div)`
  position: absolute;
  left: 20px; /* Mobile-first: left-aligned */
  top: 2rem; /* Mobile-first: fixed position */
  transform: translate(-50%, 0);
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #0f0f0f;
    border-radius: 50%;
  }

  /* Enhanced for larger mobile screens */
  @media (min-width: 480px) {
    width: 24px;
    height: 24px;
    
    &::before {
      width: 10px;
      height: 10px;
    }
  }

  /* Tablet and larger */
  @media (min-width: 769px) {
    width: 26px;
    height: 26px;
    
    &::before {
      width: 12px;
      height: 12px;
    }
  }

  /* Desktop: centered on timeline */
  @media (min-width: 1024px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

// Mobile-first education card
const EducationCard = styled(motion.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 15px;
  padding: 1.5rem; /* Mobile-first: smaller padding */
  width: 100%; /* Mobile-first: full width */
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer; /* Mobile-friendly interaction */

  &:hover, &:active {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.2);
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    padding: 1.8rem;
  }

  @media (min-width: 769px) {
    padding: 2rem;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
    }
  }

  /* Desktop: constrained width with margins */
  @media (min-width: 1024px) {
    width: calc(50% - 60px);
    max-width: 380px;
    
    &:hover {
      transform: translateY(-10px);
    }
  }
  
  /* Desktop: alternating margins */
  @media (min-width: 1024px) {
    ${EducationItem}:nth-child(odd) & {
      margin-right: 60px;
    }

    ${EducationItem}:nth-child(even) & {
      margin-left: 60px;
    }
  }
`;

// Mobile-first year badge
const YearBadge = styled.div`
  position: absolute;
  top: -12px; /* Mobile-first: better positioning */
  right: 15px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  color: #0f0f0f;
  padding: 0.4rem 0.8rem; /* Mobile-first: smaller padding */
  border-radius: 20px;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 0.7rem; /* Mobile-first: readable size */
  letter-spacing: 1px;
  text-align: center;
  min-width: 60px; /* Ensure consistent width */

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    top: -15px;
    right: 20px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    min-width: 70px;
  }

  @media (min-width: 769px) {
    font-size: 0.85rem;
    min-width: 80px;
  }
`;

// Mobile-first institution name
const Institution = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem; /* Mobile-first: readable size */
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  line-height: 1.3;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 769px) {
    font-size: 1.3rem;
  }
`;

// Mobile-first degree title
const Degree = styled.h4`
  font-size: 1rem; /* Mobile-first: readable size */
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.4;

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 1.05rem;
  }

  @media (min-width: 769px) {
    font-size: 1.1rem;
  }
`;

// Mobile-first description
const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem; /* Mobile-first: readable size */

  &:last-child {
    margin-bottom: 0;
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }

  @media (min-width: 769px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

// Mobile-first achievements list
const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`;

// Mobile-first achievement items
const Achievement = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem; /* Mobile-first: readable size */
  line-height: 1.5;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem; /* Mobile-first: smaller indent */

  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ff0088;
    font-size: 0.7rem; /* Mobile-first: smaller icon */
    line-height: inherit;
  }

  &:last-child {
    margin-bottom: 0;
  }

  /* Enhanced for larger screens */
  @media (min-width: 480px) {
    font-size: 0.87rem;
    padding-left: 1.3rem;
    
    &::before {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 769px) {
    font-size: 0.9rem;
    padding-left: 1.5rem;
    
    &::before {
      font-size: 0.8rem;
    }
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

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  color: #00ff88;

  &.icon-1 {
    top: 10%;
    left: 10%;
  }

  &.icon-2 {
    top: 25%;
    right: 15%;
  }

  &.icon-3 {
    bottom: 30%;
    left: 20%;
  }

  &.icon-4 {
    bottom: 15%;
    right: 10%;
  }
`;

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
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
      rotate: [0, 10, -10, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const educationData = [
    {
      year: "2020-2024",
      institution: "University of Technology",
      degree: "Bachelor of Computer Engineering",
      description: "Comprehensive study of computer systems, software engineering, and cybersecurity with a focus on practical applications and industry-relevant projects.",
      achievements: [
        "Graduated with First Class Honors (GPA: 3.8/4.0)",
        "Dean's List for Academic Excellence (6 semesters)",
        "Winner of Annual Cybersecurity Competition",
        "Lead developer for Senior Capstone Project"
      ]
    },
    {
      year: "2024",
      institution: "Cybersecurity Institute",
      degree: "Advanced Cybersecurity Certification",
      description: "Specialized training in ethical hacking, penetration testing, and security analysis with hands-on experience in real-world scenarios.",
      achievements: [
        "Certified Ethical Hacker (CEH) credential",
        "Network Security Specialist certification",
        "Top 5% of class performance",
        "Published research on mobile app security"
      ]
    },
    {
      year: "2023",
      institution: "Web Development Academy",
      degree: "Full-Stack Development Bootcamp",
      description: "Intensive program covering modern web technologies, database design, and cloud deployment with emphasis on responsive design and security.",
      achievements: [
        "Built 5 production-ready web applications",
        "Mentored junior developers in the program",
        "Awarded 'Most Innovative Project' recognition",
        "Achieved 100% job placement rate"
      ]
    }
  ];

  return (
    <EducationSection id="education">
      <FloatingElements>
        <FloatingIcon
          className="icon-1"
          variants={floatingVariants}
          animate="animate"
        >
          🎓
        </FloatingIcon>
        <FloatingIcon
          className="icon-2"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          📚
        </FloatingIcon>
        <FloatingIcon
          className="icon-3"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          🏆
        </FloatingIcon>
        <FloatingIcon
          className="icon-4"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          💻
        </FloatingIcon>
      </FloatingElements>

      <EducationContainer>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Education
        </SectionTitle>

        <EducationTimeline>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {educationData.map((item, index) => (
              <EducationItem key={index}>
                <TimelineNode
                  variants={nodeVariants}
                  whileHover={{ 
                    scale: 1.3,
                    boxShadow: "0 0 30px rgba(0, 255, 136, 0.8)"
                  }}
                />
                <EducationCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <YearBadge>{item.year}</YearBadge>
                  <Institution>{item.institution}</Institution>
                  <Degree>{item.degree}</Degree>
                  <Description>{item.description}</Description>
                  <Achievements>
                    {item.achievements.map((achievement, achievementIndex) => (
                      <Achievement key={achievementIndex}>
                        {achievement}
                      </Achievement>
                    ))}
                  </Achievements>
                </EducationCard>
              </EducationItem>
            ))}
          </motion.div>
        </EducationTimeline>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;