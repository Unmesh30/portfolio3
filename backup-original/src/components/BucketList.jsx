import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Mobile-first: Start at 320px, scale up
const BucketListSection = styled.section`
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

const BucketListContainer = styled.div`
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

// Mobile-first: Stack filter buttons on mobile
const CategoryFilter = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
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
    margin-bottom: 3rem; /* Show stats first, then categories */
  }
`;

// Mobile-first: Full-width buttons on mobile
const FilterButton = styled(motion.button)`
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
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 480px) {
    width: auto;
    min-width: 140px;
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

// Mobile-first: Single column layout that becomes grid on larger screens
const BucketGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 2rem;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

// Mobile-first: Bucket card with proper mobile layout
const BucketCard = styled(motion.div)`
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

  ${props => props.completed && `
    border-color: rgba(0, 255, 136, 0.6);
    background: rgba(0, 255, 136, 0.1);
    
    &::after {
      content: '✓';
      position: absolute;
      top: 12px;
      right: 12px;
      width: 26px;
      height: 26px;
      background: linear-gradient(45deg, #00ff88, #00cc66);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0f0f0f;
      font-weight: bold;
      font-size: 1rem;

      @media (min-width: 768px) {
        top: 15px;
        right: 15px;
        width: 30px;
        height: 30px;
        font-size: 1.2rem;
      }
    }
  `}
`;

// Mobile-first: Flexible header layout
const GoalHeader = styled.div`
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

// Mobile-first: Icon sizing
const GoalIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
  align-self: center;

  @media (min-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    align-self: flex-start;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  
  ${props => props.completed && `
    filter: saturate(1.5) brightness(1.2);
  `}
`;

// Mobile-first: Category badge
const GoalCategory = styled.span`
  background: ${props => 
    props.category === 'travel' ? 'linear-gradient(45deg, #00ff88, #00cc66)' :
    props.category === 'career' ? 'linear-gradient(45deg, #ff0088, #cc0066)' :
    props.category === 'learning' ? 'linear-gradient(45deg, #ffaa00, #cc8800)' :
    props.category === 'personal' ? 'linear-gradient(45deg, #aa00ff, #8800cc)' :
    'linear-gradient(45deg, #00ffff, #0088cc)'
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

// Mobile-first: Goal title with proper mobile sizing
const GoalTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.completed ? '#00ff88' : '#ffffff'};
  margin-bottom: 0.5rem;
  text-shadow: ${props => props.completed ? '0 0 12px rgba(0, 255, 136, 0.4)' : 'none'};
  line-height: 1.25;
  padding-right: ${props => props.completed ? '35px' : '0'}; /* Make room for checkmark */

  @media (min-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    text-shadow: ${props => props.completed ? '0 0 15px rgba(0, 255, 136, 0.5)' : 'none'};
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  ${props => props.completed && `
    text-decoration: line-through;
    text-decoration-color: #00ff88;
    text-decoration-thickness: 2px;
  `}
`;

// Mobile-first: Goal description
const GoalDescription = styled.p`
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

// Mobile-first: Progress bar with better mobile visibility
const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 0.75rem;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 6px;
    border-radius: 3px;
    margin-bottom: 1rem;
  }
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ff88, #ff0088);
  border-radius: 4px;
  width: ${props => props.progress}%;

  @media (min-width: 768px) {
    border-radius: 3px;
  }
`;

// Mobile-first: Progress text
const ProgressText = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
  text-align: right;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
`;

// Mobile-first: Goal steps list
const GoalSteps = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;

  @media (min-width: 768px) {
    margin: 1rem 0;
  }
`;

// Mobile-first: Step items with proper mobile spacing
const GoalStep = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  line-height: 1.4;
  margin-bottom: 0.4rem;
  position: relative;
  padding-left: 1.1rem;
  min-height: 1.1rem;

  @media (min-width: 480px) {
    font-size: 0.82rem;
    line-height: 1.45;
    margin-bottom: 0.45rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    padding-left: 1.2rem;
  }

  &::before {
    content: ${props => props.completed ? '"✅"' : '"⭕"'};
    position: absolute;
    left: 0;
    font-size: 0.75rem;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${props => props.completed && `
    text-decoration: line-through;
    opacity: 0.7;
  `}
`;

// Mobile-first: Timeline text
const Timeline = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: rgba(255, 0, 136, 0.8);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0.75rem;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`;

// Mobile-first: Stats container with proper mobile layout
const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);

  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
    padding: 2rem;
    border-radius: 18px;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    border-radius: 20px;
    margin-bottom: 3rem; /* Move stats above filters for better UX */
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

// Mobile-first: Stat numbers with appropriate mobile sizing
const StatNumber = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 900;
  color: #00ff88;
  margin-bottom: 0.3rem;
  text-shadow: 0 0 12px rgba(0, 255, 136, 0.4);

  @media (min-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

// Mobile-first: Stat labels with proper mobile sizing
const StatLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }

  @media (min-width: 1024px) {
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

// Mobile-first: Smaller floating elements for mobile
const FloatingDream = styled(motion.div)`
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

  &.dream-1 { 
    top: 8%; 
    left: 3%; 

    @media (min-width: 768px) {
      top: 10%;
      left: 5%;
    }
  }

  &.dream-2 { 
    top: 20%; 
    right: 5%; 

    @media (min-width: 768px) {
      top: 25%;
      right: 8%;
    }
  }

  &.dream-3 { 
    bottom: 40%; 
    left: 6%; 

    @media (min-width: 768px) {
      bottom: 35%;
      left: 10%;
    }
  }

  &.dream-4 { 
    bottom: 25%; 
    right: 8%; 

    @media (min-width: 768px) {
      bottom: 20%;
      right: 12%;
    }
  }

  &.dream-5 { 
    top: 65%; 
    left: 10%; 

    @media (min-width: 768px) {
      top: 60%;
      left: 15%;
    }
  }

  &.dream-6 { 
    top: 50%; 
    right: 15%; 

    @media (min-width: 768px) {
      top: 45%;
      right: 20%;
    }
  }
`;

const BucketList = () => {
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

  const categories = [
    { id: 'all', label: 'All Goals' },
    { id: 'travel', label: 'Travel & Adventure' },
    { id: 'career', label: 'Career & Professional' },
    { id: 'learning', label: 'Learning & Skills' },
    { id: 'personal', label: 'Personal Growth' },
  ];

  const bucketListData = [
    {
      id: 1,
      category: 'travel',
      title: "Visit all 7 continents",
      description: "Experience the diverse cultures, landscapes, and adventures that each continent has to offer.",
      icon: '🌍',
      progress: 42,
      completed: false,
      timeline: "By 2030",
      steps: [
        { text: "Visit Asia (India, Japan, Thailand)", completed: true },
        { text: "Explore Europe (10+ countries)", completed: true },
        { text: "Adventure in North America", completed: true },
        { text: "Discover South America", completed: false },
        { text: "Safari in Africa", completed: false },
        { text: "Explore Australia & Oceania", completed: false },
        { text: "Research expedition to Antarctica", completed: false }
      ]
    },
    {
      id: 2,
      category: 'career',
      title: "Start my own cybersecurity company",
      description: "Build a leading cybersecurity consultancy helping organizations protect their digital assets.",
      icon: '🚀',
      progress: 65,
      completed: false,
      timeline: "By 2026",
      steps: [
        { text: "Gain 5+ years industry experience", completed: true },
        { text: "Build professional network", completed: true },
        { text: "Develop business plan", completed: true },
        { text: "Secure initial funding", completed: false },
        { text: "Hire first team members", completed: false },
        { text: "Land first major client", completed: false }
      ]
    },
    {
      id: 3,
      category: 'learning',
      title: "Master 5 programming languages",
      description: "Become proficient in diverse programming paradigms and technologies.",
      icon: '💻',
      progress: 80,
      completed: false,
      timeline: "By 2025",
      steps: [
        { text: "JavaScript & TypeScript", completed: true },
        { text: "Python for security & AI", completed: true },
        { text: "Go for system programming", completed: true },
        { text: "Rust for performance", completed: true },
        { text: "C++ for low-level programming", completed: false }
      ]
    },
    {
      id: 4,
      category: 'personal',
      title: "Run a marathon",
      description: "Complete a full 26.2-mile marathon race, testing physical and mental endurance.",
      icon: '🏃‍♂️',
      progress: 30,
      completed: false,
      timeline: "By 2025",
      steps: [
        { text: "Start regular running routine", completed: true },
        { text: "Complete 5K races", completed: true },
        { text: "Complete 10K race", completed: false },
        { text: "Complete half marathon", completed: false },
        { text: "Train for full marathon", completed: false },
        { text: "Complete full marathon", completed: false }
      ]
    },
    {
      id: 5,
      category: 'career',
      title: "Speak at major tech conference",
      description: "Share knowledge and expertise with the global tech community at a prestigious conference.",
      icon: '🎤',
      progress: 50,
      completed: false,
      timeline: "By 2025",
      steps: [
        { text: "Develop expertise in specialized area", completed: true },
        { text: "Start speaking at local meetups", completed: true },
        { text: "Present at regional conferences", completed: false },
        { text: "Submit proposal to major conference", completed: false },
        { text: "Deliver keynote presentation", completed: false }
      ]
    },
    {
      id: 6,
      category: 'learning',
      title: "Get PhD in Computer Science",
      description: "Pursue advanced research in cybersecurity and contribute original knowledge to the field.",
      icon: '🎓',
      progress: 15,
      completed: false,
      timeline: "By 2029",
      steps: [
        { text: "Research potential programs", completed: true },
        { text: "Prepare for entrance exams", completed: false },
        { text: "Apply to top universities", completed: false },
        { text: "Complete coursework", completed: false },
        { text: "Conduct original research", completed: false },
        { text: "Write and defend dissertation", completed: false }
      ]
    },
    {
      id: 7,
      category: 'personal',
      title: "Learn to fly a plane",
      description: "Earn a private pilot license and experience the freedom of flight.",
      icon: '✈️',
      progress: 20,
      completed: false,
      timeline: "By 2027",
      steps: [
        { text: "Take introductory flight lesson", completed: true },
        { text: "Complete ground school", completed: false },
        { text: "Log required flight hours", completed: false },
        { text: "Pass written exam", completed: false },
        { text: "Pass practical exam", completed: false },
        { text: "Receive pilot license", completed: false }
      ]
    },
    {
      id: 8,
      category: 'travel',
      title: "Hike the Everest Base Camp",
      description: "Trek to the base camp of the world's highest mountain in the Himalayas.",
      icon: '🏔️',
      progress: 10,
      completed: false,
      timeline: "By 2026",
      steps: [
        { text: "Build physical fitness", completed: false },
        { text: "Practice on smaller mountain treks", completed: false },
        { text: "Plan expedition logistics", completed: false },
        { text: "Complete high-altitude training", completed: false },
        { text: "Trek to Everest Base Camp", completed: false }
      ]
    },
    {
      id: 9,
      category: 'career',
      title: "Publish a technical book",
      description: "Write and publish a comprehensive book on cybersecurity best practices.",
      icon: '📚',
      progress: 35,
      completed: false,
      timeline: "By 2026",
      steps: [
        { text: "Outline book structure", completed: true },
        { text: "Research and write chapters", completed: true },
        { text: "Find publisher or self-publish", completed: false },
        { text: "Complete editing process", completed: false },
        { text: "Launch book marketing campaign", completed: false }
      ]
    },
    {
      id: 10,
      category: 'learning',
      title: "Learn to scuba dive",
      description: "Explore the underwater world and earn advanced diving certifications.",
      icon: '🤿',
      progress: 100,
      completed: true,
      timeline: "Completed 2024",
      steps: [
        { text: "Complete Open Water certification", completed: true },
        { text: "Get Advanced Open Water", completed: true },
        { text: "Complete Rescue Diver course", completed: true },
        { text: "Dive in 3 different countries", completed: true },
        { text: "Become Divemaster", completed: true }
      ]
    }
  ];

  const filteredGoals = activeFilter === 'all' 
    ? bucketListData 
    : bucketListData.filter(goal => goal.category === activeFilter);

  const totalGoals = bucketListData.length;
  const completedGoals = bucketListData.filter(goal => goal.completed).length;
  const inProgressGoals = bucketListData.filter(goal => goal.progress > 0 && !goal.completed).length;
  const averageProgress = Math.round(bucketListData.reduce((acc, goal) => acc + goal.progress, 0) / totalGoals);

  return (
    <BucketListSection id="bucket-list">
      <FloatingElements>
        <FloatingDream className="dream-1" variants={floatingVariants} animate="animate">
          ⭐
        </FloatingDream>
        <FloatingDream className="dream-2" variants={floatingVariants} animate="animate" transition={{ delay: 0.5 }}>
          🌟
        </FloatingDream>
        <FloatingDream className="dream-3" variants={floatingVariants} animate="animate" transition={{ delay: 1 }}>
          💫
        </FloatingDream>
        <FloatingDream className="dream-4" variants={floatingVariants} animate="animate" transition={{ delay: 1.5 }}>
          ✨
        </FloatingDream>
        <FloatingDream className="dream-5" variants={floatingVariants} animate="animate" transition={{ delay: 2 }}>
          🎯
        </FloatingDream>
        <FloatingDream className="dream-6" variants={floatingVariants} animate="animate" transition={{ delay: 0.8 }}>
          🚀
        </FloatingDream>
      </FloatingElements>

      <BucketListContainer>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Bucket List
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Personal goals, dreams, and aspirations that drive me forward. 
          Life is an adventure, and these are the milestones I'm working towards.
        </SectionSubtitle>

        <StatsContainer
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <StatItem>
            <StatNumber>{totalGoals}</StatNumber>
            <StatLabel>Total Goals</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{completedGoals}</StatNumber>
            <StatLabel>Completed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{inProgressGoals}</StatNumber>
            <StatLabel>In Progress</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{averageProgress}%</StatNumber>
            <StatLabel>Avg Progress</StatLabel>
          </StatItem>
        </StatsContainer>

        <CategoryFilter
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              active={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </FilterButton>
          ))}
        </CategoryFilter>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <BucketGrid>
              {filteredGoals.map((goal) => (
                <BucketCard
                  key={goal.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  completed={goal.completed}
                  layout
                >
                  <GoalHeader>
                    <GoalCategory category={goal.category}>
                      {goal.category}
                    </GoalCategory>
                  </GoalHeader>
                  
                  <GoalIcon completed={goal.completed}>{goal.icon}</GoalIcon>
                  <GoalTitle completed={goal.completed}>{goal.title}</GoalTitle>
                  <GoalDescription>{goal.description}</GoalDescription>
                  
                  <ProgressBar>
                    <ProgressFill
                      progress={goal.progress}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    />
                  </ProgressBar>
                  <ProgressText>{goal.progress}% Complete</ProgressText>
                  
                  <GoalSteps>
                    {goal.steps.map((step, index) => (
                      <GoalStep key={index} completed={step.completed}>
                        {step.text}
                      </GoalStep>
                    ))}
                  </GoalSteps>
                  
                  <Timeline>{goal.timeline}</Timeline>
                </BucketCard>
              ))}
            </BucketGrid>
          </motion.div>
        </AnimatePresence>
      </BucketListContainer>
    </BucketListSection>
  );
};

export default BucketList;