import { motion } from 'framer-motion';
import { DisintegrateOnScroll, StaggerChildren, StaggerItem } from './AnimatedSection';
import { ExternalLink, Github, Rocket, Trophy } from 'lucide-react';

const projects = [
  {
    title: 'Emotion Detection using Face Recognition',
    tech: ['Python', 'Flask', 'TensorFlow', 'OpenCV', 'Scikit-learn'],
    description: 'A computer vision system that detects and classifies human emotions from facial expressions in real time.',
    highlight: null,
  },
  {
    title: 'Sign Detection using Hand Recognition',
    tech: ['Python', 'MediaPipe', 'TensorFlow', 'Scikit-learn'],
    description: 'A gesture recognition system designed to interpret hand movements, primarily for sign language detection.',
    highlight: null,
  },
  {
    title: 'Bone Fracture Detection',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Scikit-learn'],
    description: 'An AI-powered medical imaging project that detects bone fractures from X-ray images.',
    highlight: null,
  },
  {
    title: 'TeraFarm – Smart Agriculture Platform',
    tech: ['Flutter', 'Firebase', 'GCP', 'Gemma'],
    description: 'A smart farming platform for crop monitoring, inventory management, and farmer collaboration.',
    highlight: '🏆 Winner – National Level Infosys Hackathon 2025',
  },
  {
    title: 'Application for Assisting Disabled People',
    tech: ['Flutter', 'Firebase', 'APIs', 'Python', 'MediaPipe'],
    description: 'An accessibility-focused application designed to support daily tasks through assistive interactions and intuitive navigation.',
    highlight: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <DisintegrateOnScroll>
          <div className="text-center mb-16">
            <motion.span 
              className="accent-chip mb-4 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Rocket className="w-4 h-4" />
              Featured Work
            </motion.span>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mx-auto">
              A selection of projects showcasing my expertise in AI, ML, and software development
            </p>
          </div>
        </DisintegrateOnScroll>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <DisintegrateOnScroll>
                <motion.div
                  className="glass-card-hover rounded-2xl p-6 h-full flex flex-col group"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.a
                        href="https://github.com/JyotiPrakash004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <div className="highlight-badge mb-4">
                      <Trophy className="w-4 h-4" />
                      {project.highlight}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </DisintegrateOnScroll>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <DisintegrateOnScroll>
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/JyotiPrakash004"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              More on GitHub
            </motion.a>
          </motion.div>
        </DisintegrateOnScroll>
      </div>
    </section>
  );
};

export default Projects;
