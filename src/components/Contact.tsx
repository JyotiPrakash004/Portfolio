import { motion } from 'framer-motion';
import { DisintegrateOnScroll, StaggerChildren, StaggerItem } from './AnimatedSection';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jyotiprakash0987654321@gmail.com',
    href: 'mailto:jyotiprakash0987654321@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 95975 34097',
    href: 'tel:+919597534097',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, India',
    href: 'https://www.google.com/maps/place/Chennai',
  },
];

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/JyotiPrakash004',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/Jyoti-Prakash-haul01',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-glow-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <DisintegrateOnScroll>
          <div className="text-center mb-16">
            <motion.span 
              className="accent-chip mb-4 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">LET'S </span>
              <span className="gradient-text text-glow">CONNECT</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out — 
              I'm always open to new opportunities and collaborations.
            </p>
          </div>
        </DisintegrateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <DisintegrateOnScroll>
            <StaggerChildren className="space-y-4" staggerDelay={0.1}>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <StaggerItem key={index}>
                    <motion.a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="glass-card-hover rounded-2xl p-5 flex items-center gap-4 group"
                      whileHover={{ scale: 1.02, x: 8 }}
                    >
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                          {info.label}
                        </div>
                        <div className="text-foreground font-medium">{info.value}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </DisintegrateOnScroll>

          {/* Socials & Resume */}
          <DisintegrateOnScroll>
            <div className="space-y-6">
              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-3">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl glass-card-hover flex items-center justify-center"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <motion.div 
                className="glass-card-hover rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Download className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Download Resume</h3>
                      <p className="text-sm text-muted-foreground">View my full CV and experience</p>
                    </div>
                  </div>
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="btn-primary py-2 px-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.a
                href="mailto:jyotiprakash0987654321@gmail.com"
                className="btn-primary w-full justify-center text-lg py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Send me an email
              </motion.a>
            </div>
          </DisintegrateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
