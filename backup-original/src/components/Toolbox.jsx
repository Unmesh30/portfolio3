import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ToolboxSection = styled.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`;

const ToolboxContainer = styled.div`
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
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    font-size: 1rem;
  }
`;

const ToolboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CategoryCard = styled(motion.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
  }
`;

const CategoryIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CategoryTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 0.8rem;
  }
`;

const SkillItem = styled(motion.div)`
  background: rgba(255, 0, 136, 0.1);
  border: 1px solid rgba(255, 0, 136, 0.3);
  border-radius: 12px;
  padding: 1rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 0, 136, 0.2);
    border-color: rgba(255, 0, 136, 0.5);
    transform: translateY(-5px) scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 0, 136, 0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
    animation: shine 1.5s ease-in-out;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SkillName = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 1;
  relative;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ProficiencyBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
`;

const ProficiencyFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ff88, #ff0088);
  border-radius: 2px;
  width: ${props => props.level}%;
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

const FloatingTech = styled(motion.div)`
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.1;
  color: #00ff88;

  &.tech-1 { top: 10%; left: 5%; }
  &.tech-2 { top: 20%; right: 10%; }
  &.tech-3 { bottom: 30%; left: 15%; }
  &.tech-4 { bottom: 20%; right: 5%; }
  &.tech-5 { top: 50%; left: 8%; }
  &.tech-6 { top: 70%; right: 12%; }
`;

const Toolbox = () => {
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

  const skillVariants = {
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

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const toolboxCategories = [
    {
      icon: '💻',
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: '⚛️', level: 95 },
        { name: 'JavaScript', icon: '🟨', level: 90 },
        { name: 'TypeScript', icon: '🔷', level: 85 },
        { name: 'HTML5', icon: '🟠', level: 95 },
        { name: 'CSS3', icon: '🔵', level: 90 },
        { name: 'Tailwind', icon: '💨', level: 85 }
      ]
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: '🟢', level: 88 },
        { name: 'Python', icon: '🐍', level: 85 },
        { name: 'Express', icon: '🚂', level: 82 },
        { name: 'MongoDB', icon: '🍃', level: 80 },
        { name: 'PostgreSQL', icon: '🐘', level: 78 },
        { name: 'GraphQL', icon: '🔺', level: 75 }
      ]
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity',
      skills: [
        { name: 'Pentesting', icon: '🔍', level: 88 },
        { name: 'OWASP', icon: '🛡️', level: 85 },
        { name: 'Kali Linux', icon: '🐉', level: 82 },
        { name: 'Wireshark', icon: '🦈', level: 80 },
        { name: 'Metasploit', icon: '💥', level: 78 },
        { name: 'Burp Suite', icon: '🔒', level: 85 }
      ]
    },
    {
      icon: '☁️',
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', icon: '🐳', level: 85 },
        { name: 'AWS', icon: '☁️', level: 80 },
        { name: 'Git', icon: '📝', level: 90 },
        { name: 'CI/CD', icon: '🔄', level: 78 },
        { name: 'Kubernetes', icon: '⚓', level: 75 },
        { name: 'Linux', icon: '🐧', level: 88 }
      ]
    }
  ];

  return (
    <ToolboxSection id="toolbox">
      <FloatingElements>
        <FloatingTech className="tech-1" variants={floatingVariants} animate="animate">
          ⚛️
        </FloatingTech>
        <FloatingTech className="tech-2" variants={floatingVariants} animate="animate" transition={{ delay: 0.5 }}>
          🐍
        </FloatingTech>
        <FloatingTech className="tech-3" variants={floatingVariants} animate="animate" transition={{ delay: 1 }}>
          🛡️
        </FloatingTech>
        <FloatingTech className="tech-4" variants={floatingVariants} animate="animate" transition={{ delay: 1.5 }}>
          ☁️
        </FloatingTech>
        <FloatingTech className="tech-5" variants={floatingVariants} animate="animate" transition={{ delay: 2 }}>
          🐳
        </FloatingTech>
        <FloatingTech className="tech-6" variants={floatingVariants} animate="animate" transition={{ delay: 0.8 }}>
          🔒
        </FloatingTech>
      </FloatingElements>

      <ToolboxContainer>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Toolbox
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          A comprehensive arsenal of modern technologies and tools that I use to build 
          secure, scalable, and innovative solutions.
        </SectionSubtitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ToolboxGrid>
            {toolboxCategories.map((category, categoryIndex) => (
              <CategoryCard
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
                <SkillsGrid>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 15
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkillIcon>{skill.icon}</SkillIcon>
                      <SkillName>{skill.name}</SkillName>
                      <ProficiencyBar>
                        <ProficiencyFill
                          level={skill.level}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            ease: "easeOut", 
                            delay: skillIndex * 0.1 
                          }}
                        />
                      </ProficiencyBar>
                    </SkillItem>
                  ))}
                </SkillsGrid>
              </CategoryCard>
            ))}
          </ToolboxGrid>
        </motion.div>
      </ToolboxContainer>
    </ToolboxSection>
  );
};

export default Toolbox;