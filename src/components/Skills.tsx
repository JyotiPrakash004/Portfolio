import { motion } from 'framer-motion';
import { DisintegrateOnScroll, StaggerChildren, StaggerItem } from './AnimatedSection';
import { Code2, Cloud, Wrench, TestTube2, BarChart3, Sparkles } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['C', 'C++', 'C#', 'Java', 'Python', 'Flutter', 'HTML/CSS', 'R'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    items: ['Unity Engine', 'Blender', 'Figma', 'FlutterFlow', 'Aseprite'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: ['Google Cloud Platform', 'AWS', 'Zoho Catalyst', 'Git'],
  },
  {
    title: 'Testing & Automation',
    icon: TestTube2,
    items: ['Postman', 'GitHub Actions'],
  },
  {
    title: 'Productivity & Analytics',
    icon: BarChart3,
    items: ['MS Excel', 'PowerPoint', 'Word', 'VS Code', 'Power BI', 'Canva'],
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    items: ['Claude Code', 'Cursor AI', 'GitHub Copilot', 'OpenAI'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <DisintegrateOnScroll>
          <div className="text-center mb-16">
            <motion.span 
              className="accent-chip mb-4 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Code2 className="w-4 h-4" />
              Technical Expertise
            </motion.span>
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </DisintegrateOnScroll>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <StaggerItem key={index}>
                <DisintegrateOnScroll>
                  <motion.div
                    className="glass-card-hover rounded-2xl p-6 h-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-foreground">{group.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <motion.span
                          key={i}
                          className="skill-chip cursor-default"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </DisintegrateOnScroll>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default Skills;
