
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Services', anchor: 'services' },
    { name: 'Réalisations', anchor: 'projects' },
    { name: 'À propos', anchor: 'about' },
    { name: 'Contact', anchor: 'contact' }
  ];

  // Handle scroll event for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/90 backdrop-blur-lg border-b border-border/50" : "py-5"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#hero"
          className="text-xl font-mono font-bold flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          <span className="text-highlight">&lt;</span>
          <span className="transition-all group-hover:text-highlight">Othmane Tadjouri</span>
          <span className="text-highlight">/&gt;</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.anchor}
              href={`#${link.anchor}`}
              className={cn(
                "nav-link text-sm transition-colors", 
                activeSection === link.anchor ? "active" : ""
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.anchor);
              }}
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="#contact"
            className="button-primary text-sm"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Démarrer votre projet
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg fixed top-[61px] left-0 right-0 border-y border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map(link => (
              <a 
                key={link.anchor}
                href={`#${link.anchor}`}
                className={cn(
                  "py-3 px-4 text-lg border-b border-border/20 transition-colors", 
                  activeSection === link.anchor ? "text-highlight" : "text-muted-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.anchor);
                }}
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact"
              className="button-primary mt-4 text-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Démarrer votre projet
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
