import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`;

const ProjectsContainer = styled.div`
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
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`;

const FilterTabs = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 3rem;
  }
`;

const FilterTab = styled(motion.button)`
  background: ${props => props.active ? 'linear-gradient(45deg, #00ff88, #ff0088)' : 'transparent'};
  border: 2px solid ${props => props.active ? 'transparent' : '#00ff88'};
  color: ${props => props.active ? '#0f0f0f' : '#00ff88'};
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.active ? 'linear-gradient(45deg, #00ff88, #ff0088)' : '#00ff88'};
    color: #0f0f0f;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
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

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectStatus = styled.span`
  background: ${props => 
    props.status === 'completed' ? 'linear-gradient(45deg, #00ff88, #00cc66)' :
    props.status === 'in-progress' ? 'linear-gradient(45deg, #ff0088, #cc0066)' :
    'linear-gradient(45deg, #ffaa00, #cc8800)'
  };
  color: #0f0f0f;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(255, 0, 136, 0.2);
  color: #ff0088;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 136, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const ProjectLink = styled(motion.a)`
  background: ${props => props.primary ? 'linear-gradient(45deg, #00ff88, #ff0088)' : 'transparent'};
  border: 2px solid ${props => props.primary ? 'transparent' : '#00ff88'};
  color: ${props => props.primary ? '#0f0f0f' : '#00ff88'};
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.primary ? 'linear-gradient(45deg, #00ff88, #ff0088)' : '#00ff88'};
    color: #0f0f0f;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.4);
  }
`;

const ProjectFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ProjectFeature = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ff0088;
    font-size: 0.7rem;
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

const FloatingCode = styled(motion.div)`
  position: absolute;
  font-size: 1.2rem;
  opacity: 0.1;
  color: #00ff88;
  font-family: 'Space Mono', monospace;

  &.code-1 { top: 15%; left: 5%; }
  &.code-2 { top: 25%; right: 8%; }
  &.code-3 { bottom: 35%; left: 10%; }
  &.code-4 { bottom: 20%; right: 12%; }
  &.code-5 { top: 60%; left: 15%; }
  &.code-6 { top: 45%; right: 20%; }
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  const projectsData = [
    {
      id: 1,
      title: "SecureAuth Dashboard",
      category: "security",
      status: "completed",
      description: "A comprehensive cybersecurity dashboard for monitoring authentication attempts, analyzing security threats, and managing user access controls with real-time alerts.",
      features: [
        "Real-time threat monitoring",
        "Multi-factor authentication integration",
        "Advanced analytics and reporting",
        "Automated incident response"
      ],
      techStack: ["React", "Node.js", "MongoDB", "WebSockets", "JWT"],
      github: "https://github.com/unmesh/secureauth-dashboard",
      demo: "https://secureauth-demo.com"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "web",
      status: "completed",
      description: "A full-stack e-commerce solution with secure payment processing, inventory management, and modern responsive design optimized for performance.",
      features: [
        "Secure payment gateway integration",
        "Advanced product search & filtering",
        "Real-time inventory management",
        "Admin dashboard with analytics"
      ],
      techStack: ["React", "TypeScript", "Express", "PostgreSQL", "Stripe"],
      github: "https://github.com/unmesh/ecommerce-platform",
      demo: "https://ecommerce-demo.com"
    },
    {
      id: 3,
      title: "Mobile Security Scanner",
      category: "mobile",
      status: "in-progress",
      description: "React Native application that scans mobile devices for security vulnerabilities, malware detection, and provides security recommendations.",
      features: [
        "Vulnerability assessment scanning",
        "Malware detection algorithms",
        "Security recommendations engine",
        "Encrypted data storage"
      ],
      techStack: ["React Native", "Python", "TensorFlow", "Firebase"],
      github: "https://github.com/unmesh/mobile-security-scanner",
      demo: null
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web",
      status: "completed",
      description: "A responsive portfolio website built with modern React, featuring smooth animations, cyberpunk design, and optimized performance.",
      features: [
        "Responsive cyberpunk design",
        "Smooth framer-motion animations",
        "Performance optimized",
        "SEO friendly architecture"
      ],
      techStack: ["React", "Styled Components", "Framer Motion", "Vite"],
      github: "https://github.com/unmesh/responsive-portfolio",
      demo: "https://unmesh-portfolio.com"
    },
    {
      id: 5,
      title: "Penetration Testing Toolkit",
      category: "security",
      status: "in-progress",
      description: "A comprehensive toolkit for ethical hackers and security professionals with automated vulnerability scanning and reporting capabilities.",
      features: [
        "Automated vulnerability scanning",
        "Custom payload generation",
        "Detailed security reports",
        "Integration with popular security tools"
      ],
      techStack: ["Python", "Kali Linux", "Docker", "PostgreSQL"],
      github: "https://github.com/unmesh/pentest-toolkit",
      demo: null
    },
    {
      id: 6,
      title: "Task Management App",
      category: "mobile",
      status: "completed",
      description: "Cross-platform task management application with team collaboration features, real-time synchronization, and intuitive user interface.",
      features: [
        "Real-time task synchronization",
        "Team collaboration tools",
        "Advanced filtering and sorting",
        "Offline mode support"
      ],
      techStack: ["React Native", "Redux", "Firebase", "TypeScript"],
      github: "https://github.com/unmesh/task-management-app",
      demo: "https://taskmanager-demo.com"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <FloatingElements>
        <FloatingCode className="code-1" variants={floatingVariants} animate="animate">
          {"{ code }"}
        </FloatingCode>
        <FloatingCode className="code-2" variants={floatingVariants} animate="animate" transition={{ delay: 0.5 }}>
          {"< />"}
        </FloatingCode>
        <FloatingCode className="code-3" variants={floatingVariants} animate="animate" transition={{ delay: 1 }}>
          {"function()"}
        </FloatingCode>
        <FloatingCode className="code-4" variants={floatingVariants} animate="animate" transition={{ delay: 1.5 }}>
          {"const app"}
        </FloatingCode>
        <FloatingCode className="code-5" variants={floatingVariants} animate="animate" transition={{ delay: 2 }}>
          {"=> {}"}
        </FloatingCode>
        <FloatingCode className="code-6" variants={floatingVariants} animate="animate" transition={{ delay: 0.8 }}>
          {"import *"}
        </FloatingCode>
      </FloatingElements>

      <ProjectsContainer>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          A showcase of innovative projects spanning web development, cybersecurity, 
          and mobile applications, each built with cutting-edge technologies.
        </SectionSubtitle>

        <FilterTabs
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {filterTabs.map((tab) => (
            <FilterTab
              key={tab.id}
              active={activeFilter === tab.id}
              onClick={() => setActiveFilter(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </FilterTab>
          ))}
        </FilterTabs>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ProjectsGrid>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  layout
                >
                  <ProjectHeader>
                    <div>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectStatus status={project.status}>
                        {project.status.replace('-', ' ')}
                      </ProjectStatus>
                    </div>
                  </ProjectHeader>
                  
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectFeatures>
                    {project.features.map((feature, index) => (
                      <ProjectFeature key={index}>{feature}</ProjectFeature>
                    ))}
                  </ProjectFeatures>
                  
                  <TechStack>
                    {project.techStack.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  
                  <ProjectLinks>
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      📂 Code
                    </ProjectLink>
                    {project.demo && (
                      <ProjectLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        primary
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🚀 Live Demo
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </motion.div>
        </AnimatePresence>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;