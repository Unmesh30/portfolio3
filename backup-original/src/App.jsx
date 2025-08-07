import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Toolbox from './components/Toolbox';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publications from './components/Publications';
import BucketList from './components/BucketList';
import Contact from './components/Contact';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  color: #fff;
  overflow-x: hidden;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Education />
        <Toolbox />
        <Projects />
        <Experience />
        <Publications />
        <BucketList />
        <Contact />
      </motion.main>
    </AppContainer>
  );
};

export default App
