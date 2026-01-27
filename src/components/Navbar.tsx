import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/samgirma", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/samuel-girma-442088296/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:girmasamuel200@gmail.com", label: "Email" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImagePanelOpen, setIsImagePanelOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="glass-card mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        {/* Logo with Image Panel Toggle */}
        <div className="relative">
          <motion.button
            onClick={() => setIsImagePanelOpen(!isImagePanelOpen)}
            className="font-display text-xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SG
          </motion.button>

          {/* Suspended Image Panel */}
          <AnimatePresence>
            {isImagePanelOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-0 mt-4 z-50"
              >
                <div className="glass-card p-2 border-iridescent">
                  {/* Image Container - 1200x1800 aspect ratio (2:3) */}
                  <div 
                    className="relative overflow-hidden rounded-xl bg-muted/20"
                    style={{ 
                      width: 'min(200px, 40vw)', 
                      aspectRatio: '2/3' 
                    }}
                  >
                    {/* Placeholder - replace src with your image */}
                    <img
                      src="/6005917915964100295.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10 pointer-events-none" />
                  </div>
                  {/* Close hint */}
                  <p className="text-xs text-muted-foreground text-center mt-2">Click SG to close</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="nav-link text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.6 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden mt-2"
      >
        <div className="glass-card mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-border">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};
