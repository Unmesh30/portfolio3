import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationSection = styled.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`;

const EducationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

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
`;

const EducationTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #00ff88, #ff0088);
    transform: translateX(-50%);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const EducationItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    justify-content: flex-end;
    
    @media (max-width: 768px) {
      justify-content: flex-start;
      padding-left: 60px;
    }
  }

  &:nth-child(even) {
    justify-content: flex-start;
    
    @media (max-width: 768px) {
      justify-content: flex-start;
      padding-left: 60px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineNode = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #0f0f0f;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    left: 20px;
    transform: translate(-50%, -50%);
  }
`;

const EducationCard = styled(motion.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 15px;
  padding: 2rem;
  width: calc(50% - 50px);
  max-width: 350px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }

  ${EducationItem}:nth-child(odd) & {
    margin-right: 50px;
    
    @media (max-width: 768px) {
      margin-right: 0;
    }
  }

  ${EducationItem}:nth-child(even) & {
    margin-left: 50px;
    
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

const YearBadge = styled.div`
  position: absolute;
  top: -15px;
  right: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  color: #0f0f0f;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    right: 10px;
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Institution = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Degree = styled.h4`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`;

const Achievement = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ff0088;
    font-size: 0.8rem;
  }

  &:last-child {
    margin-bottom: 0;
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