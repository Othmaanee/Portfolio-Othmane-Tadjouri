
import React, { useEffect, useRef } from 'react';
import { Code, Globe, Layers, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-10 h-10 text-highlight mb-4" />,
    title: "Sites Web",
    description: "Création de sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients.",
    features: ["Design responsive", "SEO optimisé", "Haute performance"],
  },
  {
    icon: <Code className="w-10 h-10 text-highlight mb-4" />,
    title: "Applications Web",
    description: "Développement d'applications web sur mesure qui répondent précisément à vos besoins métier.",
    features: ["Expérience utilisateur fluide", "Technologies modernes", "Architecture évolutive"],
  },
  {
    icon: <Cpu className="w-10 h-10 text-highlight mb-4" />,
    title: "Automatisation",
    description: "Automatisation de tâches répétitives pour gagner du temps et réduire les erreurs humaines.",
    features: ["Scripts personnalisés", "Intégration API", "Workflows optimisés"],
  },
  {
    icon: <Layers className="w-10 h-10 text-highlight mb-4" />,
    title: "Front/Back-End",
    description: "Développement complet de solutions web incluant interfaces utilisateur et logique métier.",
    features: ["Architecture robuste", "Base de données optimisée", "Sécurité renforcée"],
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-16">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="reveal-on-scroll glowing-border p-6 card-hover bg-card/80 backdrop-blur-sm"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-highlight mr-2">›</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
