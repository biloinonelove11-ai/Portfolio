import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/samgirma", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/samuel-girma-442088296/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:girmasamuel200@gmail.com", label: "Email" },
  { icon: MessageCircle, href: "http://t.me/Code_Architect01", label: "Telegram" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <span className="font-display text-2xl font-bold text-gradient">SG</span>
            <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Samuel Girma
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-50" />
    </footer>
  );
};
