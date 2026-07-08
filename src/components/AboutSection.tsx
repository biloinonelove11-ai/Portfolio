import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Shield, Cpu, Zap } from "lucide-react";

const highlights = [
  {
    icon: Terminal,
    title: "Full Stack Dev",
    description: "Building scalable web applications from frontend to backend",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "CTF player with penetration testing expertise",
    color: "secondary",
  },
  {
    icon: Cpu,
    title: "Web3 Focus",
    description: "Blockchain-based validation and smart contracts",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Security-First",
    description: "Building secure applications from the ground up",
    color: "primary",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="container px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions at the intersection of development and security
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                I am <span className="text-primary font-semibold">Bilisuma Adugna</span>, a dedicated Software Engineer and Full Stack Developer with a strong background in penetration testing and competitive cybersecurity as a CTF player.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I bring a <span className="text-secondary">security-first mindset</span> to my work, ensuring that every application I build is robust, secure, and scalable. Currently, I'm focused on exploring <span className="text-accent">Web3 technologies</span> and building blockchain-based validation systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me participating in CTF competitions, contributing to open-source projects, or writing about cybersecurity topics on my technical blog.
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                    item.color === "primary"
                      ? "bg-primary/20 text-primary"
                      : item.color === "secondary"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-accent/20 text-accent"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
