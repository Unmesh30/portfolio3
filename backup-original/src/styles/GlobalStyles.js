import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background: #0f0f0f;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    line-height: 1.2;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .section {
    padding: 6rem 0;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
    
    @media (max-width: 480px) {
      padding: 3rem 0;
    }
  }

  .cyberpunk-border {
    border: 2px solid #00ff88;
    border-radius: 8px;
    background: linear-gradient(45deg, rgba(0, 255, 136, 0.1), rgba(255, 0, 136, 0.1));
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }

  .neon-text {
    text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
  }

  .btn-primary {
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 255, 136, 0.3);
    }
    
    @media (max-width: 480px) {
      padding: 0.6rem 1.5rem;
      font-size: 0.9rem;
    }
  }

  .responsive-grid {
    display: grid;
    gap: 2rem;
    
    &.grid-2 {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    &.grid-3 {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    &.grid-4 {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    
    @media (max-width: 768px) {
      gap: 1.5rem;
      
      &.grid-2,
      &.grid-3,
      &.grid-4 {
        grid-template-columns: 1fr;
      }
    }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeIn 0.6s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .floating-animation {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  .pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

export default GlobalStyles;