
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    const childElements = document.querySelectorAll('.hero-animate');
    childElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      childElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-highlight/5 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-tech/10 to-transparent opacity-30"></div>
      
      <div ref={containerRef} className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <span className="hero-animate text-highlight font-mono text-sm md:text-base opacity-0 translate-y-10 transition-all duration-700 delay-100 block mb-3">
            Bonjour, je suis
          </span>
          
          <h1 className="hero-animate text-4xl md:text-5xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-700 delay-200">
            Othmane Tadjouri
          </h1>
          
          <h2 className="hero-animate text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-8 opacity-0 translate-y-10 transition-all duration-700 delay-300">
            Développeur Web Freelance
          </h2>
          
          <p className="hero-animate text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 opacity-0 translate-y-10 transition-all duration-700 delay-400">
            Des solutions web sur-mesure, pensées pour durer, 
            <span className="text-foreground font-medium"> livrées en 72h</span>, 
            avec un haut niveau de 
            <span className="text-foreground font-medium"> qualité</span> et de 
            <span className="text-foreground font-medium"> rigueur</span>.
          </p>
          
          <div className="hero-animate flex flex-col sm:flex-row gap-4 opacity-0 translate-y-10 transition-all duration-700 delay-500">
            <button onClick={scrollToContact} className="button-primary flex items-center justify-center gap-2">
              <span>Démarrer votre projet</span>
              <ArrowRight size={16} />
            </button>
            
            <a href="#contact" className="button-secondary">
              Me contacter
            </a>
          </div>
          
          <div className="hero-animate mt-16 md:mt-24 opacity-0 translate-y-10 transition-all duration-700 delay-600">
            <p className="text-highlight font-mono text-sm mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "TypeScript", "React", "Vue", "Node.js", "PHP", "SQL"].map((tech) => (
                <span key={tech} className="glowing-border px-3 py-1 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-muted-foreground text-sm mb-2">Découvrir</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-highlight rounded-full mt-1.5 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
