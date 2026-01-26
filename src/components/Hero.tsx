import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="accent-chip">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm{' '}
          <span className="gradient-text text-glow">Jyoti Prakash</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Computer Science Engineering student specializing in{' '}
          <span className="text-foreground font-medium">Artificial Intelligence & Data Science</span>.
          <br className="hidden md:block" />
          I build intelligent applications, AI systems, and modern web & mobile apps.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#contact" className="btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get in Touch
            <Mail className="w-4 h-4" />
          </a>
          <a href="#projects" className="btn-outline" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Projects
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="https://github.com/JyotiPrakash004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card-hover"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/Jyoti-Prakash-haul01"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card-hover"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:jyotiprakash0987654321@gmail.com"
            className="p-3 rounded-xl glass-card-hover"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 p-4 rounded-full glass-card animate-float cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
