
import React, { useEffect, useRef } from 'react';
import { Code, FileText, ArrowRight } from 'lucide-react';

const AboutSection = () => {
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
              }, 150 * index);
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16 mx-auto text-center">À propos</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 reveal-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-highlight">Qui suis-je</h3>
            <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
              Développeur web passionné, je conçois et développe des solutions digitales sur-mesure qui répondent précisément aux besoins de mes clients.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
              Mon approche allie <span className="text-foreground">rigueur technique</span>, <span className="text-foreground">efficacité</span> et <span className="text-foreground">créativité</span> pour livrer des projets de haute qualité dans des délais serrés.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
              Ma priorité : transformer vos idées en solutions web fonctionnelles, esthétiques et performantes qui vous démarquent de la concurrence.
            </p>
            
            <div className="mb-10">
              <a 
                href="#contact" 
                className="inline-flex items-center text-highlight hover:text-white transition-colors"
              >
                <span>Me contacter</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="reveal-on-scroll glowing-border p-6 bg-card/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <FileText size={20} className="text-highlight mr-2" />
                <span>Expérience</span>
              </h3>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">DSI Saint-Étienne Métropole</h4>
                  <span className="text-highlight text-sm">2023</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Développeur Web
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">›</span>
                    <span>Optimisation des performances web : Amélioration de la vitesse de chargement des pages via la compression des ressources et la réduction du code inutile.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">›</span>
                    <span>Refonte UX/UI : Création de formulaires ergonomiques améliorant l'accessibilité et l'interaction utilisateur.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">›</span>
                    <span>Gestion des bases de données : Structuration efficace pour une récupération et un affichage rapide des informations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">›</span>
                    <span>Développement d'applications web : Création d'interfaces dynamiques avec JavaScript, PHP et SQL, optimisées pour le mobile et la rapidité.</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Code size={20} className="text-highlight mr-2" />
                <span>Compétences</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="font-bold mb-2">Front-End</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <span className="text-highlight mr-2">›</span>
                      <span>React & Vue.js</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-highlight mr-2">›</span>
                      <span>JavaScript/TypeScript</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-highlight mr-2">›</span>
                      <span>HTML5/CSS3</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-highlight mr-2">›</span>
                      <span>Tailwind CSS</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Back-End</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <span className="text-highlight mr-2">›</span>
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-highlight mr-2">›</span>
                      <span>PHP</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-highlight mr-2">›</span>
                      <span>SQL/NoSQL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-highlight mr-2">›</span>
                      <span>API RESTful</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
