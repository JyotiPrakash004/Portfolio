import { motion } from 'framer-motion';
import { DisintegrateOnScroll } from './AnimatedSection';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-glow-secondary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <DisintegrateOnScroll>
          <div className="text-center mb-16">
            <motion.span 
              className="accent-chip mb-4 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="w-4 h-4" />
              Academic Background
            </motion.span>
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle mx-auto">
              My academic foundation in Computer Science and AI
            </p>
          </div>
        </DisintegrateOnScroll>

        <DisintegrateOnScroll>
          <motion.div
            className="glass-card-hover rounded-2xl p-8 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-glow-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Bachelor of Technology – Computer Science Engineering
                    </h3>
                    <p className="text-primary font-medium">
                      Specialization: AI & Data Science
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm bg-muted px-4 py-2 rounded-full flex-shrink-0">
                  <Calendar className="w-4 h-4" />
                  Sep 2022 – Present
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Hindustan Institute of Technology and Science · Chennai, India</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing a B.Tech degree with specialization in Artificial Intelligence and Data Science, 
                focusing on machine learning, computer vision, data analysis, and modern software development practices. 
                Building a strong foundation in both theoretical concepts and practical applications of AI technologies.
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3">
                  <span className="skill-chip">Machine Learning</span>
                  <span className="skill-chip">Computer Vision</span>
                  <span className="skill-chip">Data Analysis</span>
                  <span className="skill-chip">Deep Learning</span>
                  <span className="skill-chip">Software Development</span>
                </div>
              </div>
            </div>
          </motion.div>
        </DisintegrateOnScroll>
      </div>
    </section>
  );
};

export default Education;
