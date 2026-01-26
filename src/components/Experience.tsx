import { motion } from 'framer-motion';
import { DisintegrateOnScroll, StaggerChildren, StaggerItem } from './AnimatedSection';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Intern – e-Luminate Digital Team',
    company: 'Hindustan Institute of Technology and Science',
    location: 'Chennai',
    date: 'Mar 2024 – Apr 2024',
    points: [
      'Worked on 3D modeling, digital design, and media creation.',
      'Designed a website and developed 3D assets using Blender.',
      'Improved user interaction and experience by ~40%.',
    ],
  },
  {
    role: 'Core Member – CSI Chapter Club',
    company: 'Hindustan Institute of Technology and Science',
    location: 'Chennai',
    date: 'Mar 2024 – May 2025',
    points: [
      'Coordinated technical events, webinars, and club activities.',
      'Managed projects, meetings, and progress reporting.',
      'Fostered collaboration between students and faculty.',
    ],
  },
  {
    role: 'Software Developer – Startup',
    company: 'Soil Steps',
    location: 'Chennai',
    date: 'Aug 2025 – Nov 2025',
    points: [
      'Developed a research application to search, organize, and manage academic papers.',
      'Enabled bookmarking and efficient access to research content.',
      'Designed for students, researchers, and professionals.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <DisintegrateOnScroll>
          <div className="text-center mb-16">
            <motion.span 
              className="accent-chip mb-4 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-4 h-4" />
              Career Journey
            </motion.span>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle mx-auto">
              My professional journey and the roles that shaped my expertise
            </p>
          </div>
        </DisintegrateOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-glow-secondary to-primary/20" />

          <StaggerChildren className="space-y-12" staggerDelay={0.15}>
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <DisintegrateOnScroll>
                  <div className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 animate-glow-pulse z-10" />
                    
                    {/* Content */}
                    <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <motion.div
                        className="glass-card-hover rounded-2xl p-6"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`flex items-center gap-2 mb-2 text-primary text-sm font-medium ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Calendar className="w-4 h-4" />
                          {exp.date}
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                        
                        <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span>{exp.company}</span>
                          <span className="text-primary">•</span>
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                        
                        <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </DisintegrateOnScroll>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};

export default Experience;
