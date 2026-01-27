import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Lock, MessageCircle, Vote, Truck, FileCheck } from "lucide-react";

const projects = [
  {
    title: "Negarit Chat App",
    description: "A full-stack real-time messaging application with modern UI and secure communication features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    icon: MessageCircle,
    liveUrl: "https://negarit-beta.vercel.app/",
    githubUrl: "https://github.com/samgirma",
    color: "primary",
    status: "Live",
  },
  {
    title: "Secure Online Exam System",
    description: "A security-focused examination platform with anti-cheating measures and real-time monitoring.",
    tags: ["React", "Express", "PostgreSQL", "JWT"],
    icon: Lock,
    liveUrl: "https://online-exam-app-mauve.vercel.app/",
    githubUrl: "https://github.com/samgirma",
    color: "secondary",
    status: "Live",
  },
  {
    title: "Certificate Validation",
    description: "Blockchain-based credential verification system ensuring tamper-proof certificate validation.",
    tags: ["Web3", "Solidity", "React", "Ethereum"],
    icon: FileCheck,
    liveUrl: null,
    githubUrl: "https://github.com/samgirma",
    color: "accent",
    status: "Maintenance",
  },
  {
    title: "Blockchain Voting System",
    description: "Decentralized voting platform ensuring transparent and immutable election results.",
    tags: ["Blockchain", "Smart Contracts", "React", "Web3.js"],
    icon: Vote,
    liveUrl: null,
    githubUrl: "https://github.com/samgirma",
    color: "primary",
    status: "In Progress",
  },
  {
    title: "Supply Chain Database",
    description: "Comprehensive logistics and supply chain management system for enterprise operations.",
    tags: ["Node.js", "PostgreSQL", "Express", "Docker"],
    icon: Truck,
    liveUrl: null,
    githubUrl: "https://github.com/samgirma",
    color: "secondary",
    status: "Completed",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development and security expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    project.color === "primary"
                      ? "bg-primary/20 text-primary"
                      : project.color === "secondary"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-accent/20 text-accent"
                  }`}
                >
                  <project.icon className="w-7 h-7" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Live"
                      ? "bg-green-500/20 text-green-400"
                      : project.status === "In Progress"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : project.status === "Maintenance"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                )}
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-muted-foreground text-sm font-medium hover:bg-muted hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/samgirma"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
