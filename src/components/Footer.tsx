import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="font-mono font-bold flex items-center gap-2">
              <span className="text-highlight">&lt;</span>
              <span>Othmane Tadjouri</span>
              <span className="text-highlight">/&gt;</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Solutions web sur-mesure, livrées en 48h.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Othmaanee"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-highlight hover:border-highlight transition-colors"
              aria-label="Github"
            >
              <Github size={18} />
            </a>
            <a 
              href="mailto:tadjouriothmane@gmail.com"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-highlight hover:border-highlight transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/othmane-tadjouri/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-highlight hover:border-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Othmane Tadjouri. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Réalisations
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
