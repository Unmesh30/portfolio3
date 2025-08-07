import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: 968px) {
    order: 2;
  }
`;

const ContactForm = styled.div`
  @media (max-width: 968px) {
    order: 1;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 1rem;
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
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ContactDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    text-align: center;
  }
`;

const ContactDetails = styled.div`
  margin-bottom: 3rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-5px);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const ContactText = styled.div``;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  background: rgba(0, 255, 136, 0.1);
  border: 2px solid rgba(0, 255, 136, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #00ff88;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #00ff88, #ff0088);
    border-color: transparent;
    color: #0f0f0f;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.4);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
`;

const FormContainer = styled(motion.form)`
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 255, 136, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #00ff88;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 255, 136, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #00ff88;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #00ff88, #ff0088);
  border: none;
  border-radius: 8px;
  color: #0f0f0f;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled(motion.div)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  
  ${props => props.success && `
    background: rgba(0, 255, 136, 0.1);
    color: #00ff88;
    border: 1px solid rgba(0, 255, 136, 0.3);
  `}
  
  ${props => props.error && `
    background: rgba(255, 0, 136, 0.1);
    color: #ff0088;
    border: 1px solid rgba(255, 0, 136, 0.3);
  `}
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

const FloatingContact = styled(motion.div)`
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.1;
  color: #00ff88;

  &.contact-1 { top: 15%; left: 5%; }
  &.contact-2 { top: 25%; right: 8%; }
  &.contact-3 { bottom: 35%; left: 10%; }
  &.contact-4 { bottom: 20%; right: 12%; }
  &.contact-5 { top: 60%; left: 15%; }
  &.contact-6 { top: 45%; right: 20%; }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

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
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/failure
      if (formData.name && formData.email && formData.message) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Please fill in all required fields');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <FloatingElements>
        <FloatingContact className="contact-1" variants={floatingVariants} animate="animate">
          📧
        </FloatingContact>
        <FloatingContact className="contact-2" variants={floatingVariants} animate="animate" transition={{ delay: 0.5 }}>
          📱
        </FloatingContact>
        <FloatingContact className="contact-3" variants={floatingVariants} animate="animate" transition={{ delay: 1 }}>
          💬
        </FloatingContact>
        <FloatingContact className="contact-4" variants={floatingVariants} animate="animate" transition={{ delay: 1.5 }}>
          🌐
        </FloatingContact>
        <FloatingContact className="contact-5" variants={floatingVariants} animate="animate" transition={{ delay: 2 }}>
          📍
        </FloatingContact>
        <FloatingContact className="contact-6" variants={floatingVariants} animate="animate" transition={{ delay: 0.8 }}>
          💼
        </FloatingContact>
      </FloatingElements>

      <ContactContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactInfo>
            <SectionTitle variants={itemVariants}>
              Get In Touch
            </SectionTitle>
            <ContactDescription variants={itemVariants}>
              Ready to collaborate on your next project or discuss cybersecurity solutions? 
              I'm always excited to connect with fellow developers, security professionals, 
              and innovative thinkers.
            </ContactDescription>

            <ContactDetails>
              <ContactItem 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ContactIcon>📧</ContactIcon>
                <ContactText>
                  <ContactLabel>Email</ContactLabel>
                  <ContactValue>unmesh.achar@email.com</ContactValue>
                </ContactText>
              </ContactItem>

              <ContactItem 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ContactIcon>📱</ContactIcon>
                <ContactText>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactValue>+1 (555) 123-4567</ContactValue>
                </ContactText>
              </ContactItem>

              <ContactItem 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ContactIcon>📍</ContactIcon>
                <ContactText>
                  <ContactLabel>Location</ContactLabel>
                  <ContactValue>San Francisco, CA</ContactValue>
                </ContactText>
              </ContactItem>

              <ContactItem 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ContactIcon>💼</ContactIcon>
                <ContactText>
                  <ContactLabel>Available For</ContactLabel>
                  <ContactValue>Freelance & Full-time</ContactValue>
                </ContactText>
              </ContactItem>
            </ContactDetails>

            <SocialLinks variants={itemVariants}>
              <SocialLink
                href="https://github.com/unmesh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                🐙
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/unmesh-achar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                💼
              </SocialLink>
              <SocialLink
                href="https://twitter.com/unmesh_achar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                🐦
              </SocialLink>
              <SocialLink
                href="mailto:unmesh.achar@email.com"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                ✉️
              </SocialLink>
              <SocialLink
                href="/resume-unmesh-achar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                📄
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm>
            <FormContainer
              variants={itemVariants}
              onSubmit={handleSubmit}
              whileHover={{ scale: 1.01 }}
            >
              <FormTitle>Send Me a Message</FormTitle>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="name">Name *</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="email">Email *</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Collaboration / Job Opportunity / General Inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="message">Message *</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, question, or how we can work together..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message 🚀'}
              </SubmitButton>

              {status.message && (
                <StatusMessage
                  success={status.type === 'success'}
                  error={status.type === 'error'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {status.message}
                </StatusMessage>
              )}
            </FormContainer>
          </ContactForm>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;