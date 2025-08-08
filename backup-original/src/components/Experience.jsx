import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Mobile-first: Start at 320px, scale up
const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0 4rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 0 4rem;
  }
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Orbitron', monospace;
  font-size: 1.75rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-radius: 2px;

    @media (min-width: 768px) {
      bottom: -15px;
      width: 80px;
    }
  }
`;

// Mobile-first timeline: Stack vertically, simple layout
const ExperienceTimeline = styled.div`
  position: relative;
  max-width: 100%;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #00ff88, #ff0088, #00ff88);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

    @media (min-width: 768px) {
      left: 30px;
    }

    @media (min-width: 1200px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (min-width: 768px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

// Mobile-first: Stack all items vertically with consistent padding
const ExperienceItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 60px;

  @media (min-width: 480px) {
    padding-left: 70px;
  }

  @media (min-width: 768px) {
    padding-left: 80px;
    margin-bottom: 3rem;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    padding-left: 0;

    &:nth-child(odd) {
      justify-content: flex-end;
    }

    &:nth-child(even) {
      justify-content: flex-start;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

// Mobile-first: Simple timeline node positioning
const TimelineNode = styled(motion.div)`
  position: absolute;
  left: 20px;
  top: 1rem;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
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

  @media (min-width: 768px) {
    left: 30px;
    width: 25px;
    height: 25px;
    top: 1.5rem;

    &::before {
      width: 10px;
      height: 10px;
    }
  }

  @media (min-width: 1200px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

// Mobile-first: Full-width cards that stack vertically
const ExperienceCard = styled(motion.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (min-width: 480px) {
    padding: 2rem;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  @media (min-width: 1200px) {
    width: calc(50% - 60px);
    max-width: 420px;

    ${ExperienceItem}:nth-child(odd) & {
      margin-right: 60px;
    }

    ${ExperienceItem}:nth-child(even) & {
      margin-left: 60px;
    }
  }

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.15);

    @media (min-width: 768px) {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
    }

    @media (min-width: 1200px) {
      transform: translateY(-15px) scale(1.02);
      box-shadow: 0 30px 60px rgba(0, 255, 136, 0.25);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

// Mobile-first: Company logo positioning and sizing
const CompanyLogo = styled.div`
  position: absolute;
  top: -10px;
  right: 15px;
  width: 36px;
  height: 36px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: #0f0f0f;
  box-shadow: 0 3px 10px rgba(0, 255, 136, 0.3);

  @media (min-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    top: -15px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
  }

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;

// Mobile-first: Job title sizing
const JobTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  line-height: 1.3;
  padding-right: 50px; /* Make room for logo on mobile */

  @media (min-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

// Mobile-first: Company name sizing
const CompanyName = styled.h4`
  font-size: 0.95rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (min-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

// Mobile-first: Duration text
const JobDuration = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: rgba(255, 0, 136, 0.8);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

// Mobile-first: Description text
const JobDescription = styled.p`
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  @media (min-width: 480px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }

  @media (min-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;

// Mobile-first: Achievements list
const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 1.25rem 0;
  }

  @media (min-width: 1024px) {
    margin: 1.5rem 0;
  }
`;

// Mobile-first: Achievement items with proper touch target sizing
const Achievement = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 0.6rem;
  position: relative;
  padding-left: 1.2rem;
  min-height: 1.2rem; /* Ensure readability */

  &::before {
    content: '⚡';
    position: absolute;
    left: 0;
    color: #ff0088;
    font-size: 0.75rem;
  }

  @media (min-width: 480px) {
    font-size: 0.87rem;
    line-height: 1.55;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 0.7rem;
    padding-left: 1.4rem;

    &::before {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

// Mobile-first: Skill tags with proper spacing
const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;

  @media (min-width: 480px) {
    gap: 0.45rem;
  }

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

// Mobile-first: Skill tag sizing with minimum touch target
const SkillTag = styled.span`
  background: rgba(255, 0, 136, 0.2);
  color: #ff0088;
  padding: 0.35rem 0.7rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 136, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-height: 28px;
  display: inline-flex;
  align-items: center;

  @media (min-width: 480px) {
    padding: 0.3rem 0.75rem;
    font-size: 0.72rem;
    border-radius: 13px;
  }

  @media (min-width: 768px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.75rem;
    border-radius: 15px;
  }
`;

// Mobile-first: Floating elements with appropriate sizing
const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

// Mobile-first: Smaller floating elements that don't interfere with content
const FloatingBriefcase = styled(motion.div)`
  position: absolute;
  font-size: 1.2rem;
  opacity: 0.08;
  color: #00ff88;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    opacity: 0.1;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  &.briefcase-1 { 
    top: 12%; 
    left: 5%;
    
    @media (min-width: 768px) {
      top: 15%;
      left: 8%;
    }

    @media (min-width: 1024px) {
      left: 10%;
    }
  }

  &.briefcase-2 { 
    top: 25%; 
    right: 8%; 

    @media (min-width: 768px) {
      top: 30%;
      right: 12%;
    }

    @media (min-width: 1024px) {
      right: 15%;
    }
  }

  &.briefcase-3 { 
    bottom: 30%; 
    left: 8%; 

    @media (min-width: 768px) {
      bottom: 25%;
      left: 15%;
    }

    @media (min-width: 1024px) {
      left: 20%;
    }
  }

  &.briefcase-4 { 
    bottom: 45%; 
    right: 5%; 

    @media (min-width: 768px) {
      bottom: 40%;
      right: 8%;
    }

    @media (min-width: 1024px) {
      right: 10%;
    }
  }
`;

const Experience = () => {
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

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 15, -15, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const experienceData = [
    {
      title: "Senior Full Stack Developer",
      company: "TechSecure Solutions",
      logo: "TS",
      duration: "2023 - Present",
      description: "Leading development of secure web applications and cybersecurity tools for enterprise clients. Responsible for architecture design, code review, and mentoring junior developers.",
      achievements: [
        "Architected and deployed 3 major enterprise security platforms",
        "Reduced application vulnerabilities by 85% through security audits",
        "Led a team of 5 developers using Agile methodologies",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      skills: ["React", "Node.js", "Docker", "AWS", "PostgreSQL", "Security Auditing"]
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureNet Corp",
      logo: "SN",
      duration: "2022 - 2023",
      description: "Conducted security assessments, penetration testing, and vulnerability analysis for client systems. Developed automated security scanning tools and incident response procedures.",
      achievements: [
        "Performed 50+ successful penetration tests for clients",
        "Developed custom security scanning tools using Python",
        "Reduced average incident response time from 4 hours to 45 minutes",
        "Trained 20+ employees on cybersecurity best practices"
      ],
      skills: ["Penetration Testing", "Python", "Kali Linux", "OWASP", "Risk Assessment"]
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studios",
      logo: "WC",
      duration: "2021 - 2022",
      description: "Developed responsive web applications and user interfaces for various clients. Focused on creating intuitive user experiences while maintaining high performance standards.",
      achievements: [
        "Built 15+ responsive websites with 99%+ performance scores",
        "Implemented modern React patterns improving code maintainability",
        "Collaborated with designers to create pixel-perfect UI components",
        "Optimized applications resulting in 40% faster load times"
      ],
      skills: ["React", "TypeScript", "CSS3", "JavaScript", "Figma", "Performance Optimization"]
    },
    {
      title: "Junior Software Developer",
      company: "StartupTech",
      logo: "ST",
      duration: "2020 - 2021",
      description: "Entry-level position focused on learning modern web development practices while contributing to various client projects and internal tools development.",
      achievements: [
        "Successfully completed 10+ client projects on time",
        "Learned and implemented React, Node.js, and database management",
        "Contributed to open-source projects gaining 500+ GitHub stars",
        "Received 'Employee of the Month' award twice for exceptional performance"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Git", "MongoDB", "Express.js"]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <FloatingElements>
        <FloatingBriefcase
          className="briefcase-1"
          variants={floatingVariants}
          animate="animate"
        >
          💼
        </FloatingBriefcase>
        <FloatingBriefcase
          className="briefcase-2"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          🏢
        </FloatingBriefcase>
        <FloatingBriefcase
          className="briefcase-3"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          🚀
        </FloatingBriefcase>
        <FloatingBriefcase
          className="briefcase-4"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          ⭐
        </FloatingBriefcase>
      </FloatingElements>

      <ExperienceContainer>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Work Experience
        </SectionTitle>

        <ExperienceTimeline>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experienceData.map((job, index) => (
              <ExperienceItem key={index}>
                <TimelineNode
                  variants={nodeVariants}
                  whileHover={{ 
                    scale: 1.4,
                    boxShadow: "0 0 40px rgba(0, 255, 136, 0.8)"
                  }}
                />
                <ExperienceCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <CompanyLogo>{job.logo}</CompanyLogo>
                  <JobTitle>{job.title}</JobTitle>
                  <CompanyName>{job.company}</CompanyName>
                  <JobDuration>{job.duration}</JobDuration>
                  <JobDescription>{job.description}</JobDescription>
                  <Achievements>
                    {job.achievements.map((achievement, achievementIndex) => (
                      <Achievement key={achievementIndex}>
                        {achievement}
                      </Achievement>
                    ))}
                  </Achievements>
                  <SkillTags>
                    {job.skills.map((skill, skillIndex) => (
                      <SkillTag key={skillIndex}>{skill}</SkillTag>
                    ))}
                  </SkillTags>
                </ExperienceCard>
              </ExperienceItem>
            ))}
          </motion.div>
        </ExperienceTimeline>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;