import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Mobile-first: Start with mobile layout, scale up
const PublicationsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0 4rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 0 4rem;
  }
`;

const PublicationsContainer = styled.div`
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
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  padding: 0 0.5rem;

  @media (min-width: 480px) {
    font-size: 1rem;
    max-width: 500px;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 3rem;
  }
`;

// Mobile-first: Stack category tabs vertically on small screens
const CategoryTabs = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  align-items: center;

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
  }

  @media (min-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    gap: 1rem;
    margin-bottom: 4rem;
  }
`;

// Mobile-first: Full-width buttons on mobile with proper touch targets
const CategoryTab = styled(motion.button)`
  background: ${props => props.active ? 'linear-gradient(45deg, #00ff88, #ff0088)' : 'transparent'};
  border: 2px solid ${props => props.active ? 'transparent' : '#00ff88'};
  color: ${props => props.active ? '#0f0f0f' : '#00ff88'};
  padding: 0.75rem 1.2rem;
  border-radius: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.75rem;
  min-height: 44px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 480px) {
    width: auto;
    min-width: 120px;
    font-size: 0.8rem;
    padding: 0.7rem 1.1rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
    padding: 0.75rem 1.3rem;
    border-radius: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
  }

  &:hover {
    background: ${props => props.active ? 'linear-gradient(45deg, #00ff88, #ff0088)' : '#00ff88'};
    color: #0f0f0f;
    transform: translateY(-2px);
  }
`;

// Mobile-first: Single column layout, scales to grid on larger screens
const PublicationsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2rem;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  }
`;

// Mobile-first: Publication card with proper mobile layout
const PublicationCard = styled(motion.div)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  @media (min-width: 480px) {
    padding: 1.75rem;
    border-radius: 18px;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.15);

    @media (min-width: 768px) {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 255, 136, 0.18);
    }

    @media (min-width: 1024px) {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
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

// Mobile-first: Flexible header layout
const PublicationHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`;

// Mobile-first: Publication type badge with proper touch targets
const PublicationType = styled.span`
  background: ${props => 
    props.type === 'research' ? 'linear-gradient(45deg, #00ff88, #00cc66)' :
    props.type === 'article' ? 'linear-gradient(45deg, #ff0088, #cc0066)' :
    props.type === 'conference' ? 'linear-gradient(45deg, #ffaa00, #cc8800)' :
    'linear-gradient(45deg, #aa00ff, #8800cc)'
  };
  color: #0f0f0f;
  padding: 0.4rem 0.9rem;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
  align-self: flex-start;
  min-height: 24px;
  display: inline-flex;
  align-items: center;

  @media (min-width: 480px) {
    font-size: 0.68rem;
    padding: 0.35rem 0.85rem;
    border-radius: 13px;
  }

  @media (min-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
  }
`;

// Mobile-first: Date styling
const PublicationDate = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: rgba(255, 0, 136, 0.8);
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`;

// Mobile-first: Title with proper mobile sizing
const PublicationTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  line-height: 1.25;

  @media (min-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

// Mobile-first: Venue styling
const PublicationVenue = styled.h4`
  font-size: 0.9rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  font-style: italic;
  line-height: 1.4;

  @media (min-width: 480px) {
    font-size: 0.95rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

// Mobile-first: Abstract with proper mobile readability
const PublicationAbstract = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.87rem;

  @media (min-width: 480px) {
    line-height: 1.55;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;

// Mobile-first: Authors section
const AuthorsList = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`;

const AuthorsLabel = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 0.5rem;
  display: inline-block;
  margin-bottom: 0.25rem;

  @media (min-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Authors = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
  font-style: italic;
  line-height: 1.4;

  @media (min-width: 480px) {
    font-size: 0.87rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Mobile-first: Keywords with proper mobile layout
const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    gap: 0.45rem;
  }

  @media (min-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;

// Mobile-first: Keyword tags with minimum touch targets
const Keyword = styled.span`
  background: rgba(255, 0, 136, 0.2);
  color: #ff0088;
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 136, 0.3);
  min-height: 26px;
  display: inline-flex;
  align-items: center;

  @media (min-width: 480px) {
    padding: 0.28rem 0.65rem;
    font-size: 0.72rem;
    border-radius: 11px;
  }

  @media (min-width: 768px) {
    padding: 0.25rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 12px;
  }
`;

// Mobile-first: Publication links with stack on mobile, row on larger screens
const PublicationLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

// Mobile-first: Full-width buttons on mobile with proper touch targets
const PublicationLink = styled(motion.a)`
  background: ${props => props.primary ? 'linear-gradient(45deg, #00ff88, #ff0088)' : 'transparent'};
  border: 2px solid ${props => props.primary ? 'transparent' : '#00ff88'};
  color: ${props => props.primary ? '#0f0f0f' : '#00ff88'};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 44px;
  text-align: center;

  @media (min-width: 480px) {
    width: auto;
    padding: 0.65rem 1.1rem;
    font-size: 0.77rem;
    border-radius: 7px;
  }

  @media (min-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
    border-radius: 8px;
  }

  &:hover {
    background: ${props => props.primary ? 'linear-gradient(45deg, #00ff88, #ff0088)' : '#00ff88'};
    color: #0f0f0f;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 136, 0.4);
  }
`;

// Mobile-first: Citations section with stack on mobile
const Citations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

const CitationCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    gap: 0.5rem;
  }
`;

const ImpactBadge = styled.div`
  background: linear-gradient(45deg, #ffaa00, #ff8800);
  color: #0f0f0f;
  padding: 0.35rem 0.75rem;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: flex-start;

  @media (min-width: 480px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.68rem;
    border-radius: 13px;
  }

  @media (min-width: 768px) {
    font-size: 0.7rem;
    border-radius: 15px;
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

// Mobile-first: Smaller floating elements that don't interfere
const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 1rem;
  opacity: 0.06;
  color: #00ff88;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    opacity: 0.08;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    opacity: 0.1;
  }

  &.icon-1 { 
    top: 12%; 
    left: 3%; 

    @media (min-width: 768px) {
      top: 15%;
      left: 5%;
    }
  }

  &.icon-2 { 
    top: 20%; 
    right: 5%; 

    @media (min-width: 768px) {
      top: 25%;
      right: 8%;
    }
  }

  &.icon-3 { 
    bottom: 40%; 
    left: 6%; 

    @media (min-width: 768px) {
      bottom: 35%;
      left: 10%;
    }
  }

  &.icon-4 { 
    bottom: 25%; 
    right: 8%; 

    @media (min-width: 768px) {
      bottom: 20%;
      right: 12%;
    }
  }

  &.icon-5 { 
    top: 65%; 
    left: 10%; 

    @media (min-width: 768px) {
      top: 60%;
      left: 15%;
    }
  }

  &.icon-6 { 
    top: 50%; 
    right: 15%; 

    @media (min-width: 768px) {
      top: 45%;
      right: 20%;
    }
  }
`;

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'research', label: 'Research Papers' },
    { id: 'article', label: 'Technical Articles' },
    { id: 'conference', label: 'Conference Papers' },
  ];

  const publicationsData = [
    {
      id: 1,
      type: 'research',
      title: "Advanced Cybersecurity Frameworks for Modern Web Applications",
      venue: "Journal of Cybersecurity Research",
      date: "December 2024",
      authors: "Unmesh Achar, Dr. Sarah Johnson, Prof. Michael Chen",
      abstract: "This paper presents a comprehensive framework for implementing advanced cybersecurity measures in modern web applications. We propose a multi-layered approach that combines traditional security practices with machine learning-based threat detection.",
      keywords: ["Cybersecurity", "Web Security", "Machine Learning", "Threat Detection", "Framework"],
      citations: 15,
      impact: "High Impact",
      links: [
        { type: "paper", url: "https://example.com/paper1.pdf", label: "📄 Full Paper" },
        { type: "code", url: "https://github.com/unmesh/security-framework", label: "💻 Source Code" }
      ]
    },
    {
      id: 2,
      type: 'conference',
      title: "Real-time Vulnerability Assessment in Cloud Infrastructure",
      venue: "International Conference on Cloud Security (ICCS 2024)",
      date: "October 2024",
      authors: "Unmesh Achar, Dr. Emily Rodriguez",
      abstract: "We present a novel approach for real-time vulnerability assessment in cloud infrastructure using automated scanning techniques and AI-powered risk analysis. Our system can detect and categorize vulnerabilities with 94% accuracy.",
      keywords: ["Cloud Security", "Vulnerability Assessment", "Real-time Monitoring", "AI", "Risk Analysis"],
      citations: 8,
      impact: "Peer Reviewed",
      links: [
        { type: "paper", url: "https://example.com/paper2.pdf", label: "📄 Conference Paper" },
        { type: "presentation", url: "https://example.com/presentation2.pdf", label: "📊 Presentation" }
      ]
    },
    {
      id: 3,
      type: 'article',
      title: "Building Secure React Applications: A Developer's Guide",
      venue: "TechSecure Magazine",
      date: "September 2024",
      authors: "Unmesh Achar",
      abstract: "A comprehensive guide for developers on implementing security best practices in React applications. Covers common vulnerabilities, secure coding practices, and modern security tools for frontend development.",
      keywords: ["React", "Frontend Security", "Secure Coding", "Web Development", "Best Practices"],
      citations: 25,
      impact: "Industry Guide",
      links: [
        { type: "article", url: "https://example.com/article1", label: "📰 Read Article" },
        { type: "code", url: "https://github.com/unmesh/secure-react-guide", label: "💻 Code Examples" }
      ]
    },
    {
      id: 4,
      type: 'research',
      title: "Machine Learning Approaches for Intrusion Detection Systems",
      venue: "IEEE Transactions on Network Security",
      date: "August 2024",
      authors: "Unmesh Achar, Dr. Alex Thompson, Dr. Maria Santos",
      abstract: "This study evaluates various machine learning algorithms for network intrusion detection, proposing a hybrid approach that combines supervised and unsupervised learning techniques for improved accuracy and reduced false positives.",
      keywords: ["Machine Learning", "Intrusion Detection", "Network Security", "Hybrid Algorithms", "Anomaly Detection"],
      citations: 32,
      impact: "High Impact",
      links: [
        { type: "paper", url: "https://example.com/paper3.pdf", label: "📄 IEEE Paper" },
        { type: "dataset", url: "https://example.com/dataset", label: "📊 Dataset" }
      ]
    },
    {
      id: 5,
      type: 'conference',
      title: "Blockchain-based Identity Management for IoT Devices",
      venue: "International IoT Security Summit 2024",
      date: "July 2024",
      authors: "Unmesh Achar, Dr. Jennifer Wu",
      abstract: "We propose a decentralized identity management system for IoT devices using blockchain technology. Our approach ensures secure device authentication while maintaining scalability and performance in large IoT networks.",
      keywords: ["Blockchain", "IoT Security", "Identity Management", "Decentralization", "Authentication"],
      citations: 12,
      impact: "Best Paper Award",
      links: [
        { type: "paper", url: "https://example.com/paper4.pdf", label: "📄 Award Paper" },
        { type: "demo", url: "https://example.com/demo", label: "🎮 Live Demo" }
      ]
    },
    {
      id: 6,
      type: 'article',
      title: "The Future of Cybersecurity: Emerging Threats and Solutions",
      venue: "CyberDefense Quarterly",
      date: "June 2024",
      authors: "Unmesh Achar",
      abstract: "An analysis of emerging cybersecurity threats in 2024 and beyond, including AI-powered attacks, quantum computing implications, and next-generation defense strategies. Provides actionable insights for security professionals.",
      keywords: ["Emerging Threats", "AI Security", "Quantum Computing", "Future Trends", "Defense Strategies"],
      citations: 18,
      impact: "Industry Analysis",
      links: [
        { type: "article", url: "https://example.com/article2", label: "📰 Full Article" },
        { type: "podcast", url: "https://example.com/podcast", label: "🎧 Podcast Discussion" }
      ]
    }
  ];

  const filteredPublications = activeCategory === 'all' 
    ? publicationsData 
    : publicationsData.filter(pub => pub.type === activeCategory);

  return (
    <PublicationsSection id="publications">
      <FloatingElements>
        <FloatingIcon className="icon-1" variants={floatingVariants} animate="animate">
          📚
        </FloatingIcon>
        <FloatingIcon className="icon-2" variants={floatingVariants} animate="animate" transition={{ delay: 0.5 }}>
          🔬
        </FloatingIcon>
        <FloatingIcon className="icon-3" variants={floatingVariants} animate="animate" transition={{ delay: 1 }}>
          📄
        </FloatingIcon>
        <FloatingIcon className="icon-4" variants={floatingVariants} animate="animate" transition={{ delay: 1.5 }}>
          🏆
        </FloatingIcon>
        <FloatingIcon className="icon-5" variants={floatingVariants} animate="animate" transition={{ delay: 2 }}>
          💡
        </FloatingIcon>
        <FloatingIcon className="icon-6" variants={floatingVariants} animate="animate" transition={{ delay: 0.8 }}>
          📊
        </FloatingIcon>
      </FloatingElements>

      <PublicationsContainer>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Publications & Research
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Academic publications, research papers, and technical articles contributing 
          to the cybersecurity and software development communities.
        </SectionSubtitle>

        <CategoryTabs
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <PublicationsGrid>
              {filteredPublications.map((publication) => (
                <PublicationCard
                  key={publication.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  layout
                >
                  <PublicationHeader>
                    <div>
                      <PublicationType type={publication.type}>
                        {publication.type}
                      </PublicationType>
                      <PublicationDate>{publication.date}</PublicationDate>
                    </div>
                  </PublicationHeader>
                  
                  <PublicationTitle>{publication.title}</PublicationTitle>
                  <PublicationVenue>{publication.venue}</PublicationVenue>
                  
                  <AuthorsList>
                    <AuthorsLabel>Authors:</AuthorsLabel>
                    <Authors>{publication.authors}</Authors>
                  </AuthorsList>
                  
                  <PublicationAbstract>{publication.abstract}</PublicationAbstract>
                  
                  <Keywords>
                    {publication.keywords.map((keyword, index) => (
                      <Keyword key={index}>{keyword}</Keyword>
                    ))}
                  </Keywords>
                  
                  <PublicationLinks>
                    {publication.links.map((link, index) => (
                      <PublicationLink
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        primary={index === 0}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.label}
                      </PublicationLink>
                    ))}
                  </PublicationLinks>
                  
                  <Citations>
                    <CitationCount>
                      📈 {publication.citations} Citations
                    </CitationCount>
                    <ImpactBadge>{publication.impact}</ImpactBadge>
                  </Citations>
                </PublicationCard>
              ))}
            </PublicationsGrid>
          </motion.div>
        </AnimatePresence>
      </PublicationsContainer>
    </PublicationsSection>
  );
};

export default Publications;