
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "EduKeeper.fr",
    description: "Plateforme éducative permettant de suivre la progression des élèves, gérer les cours et faciliter la communication entre enseignants et parents.",
    image: "/placeholder.svg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
    featured: true
  },
  {
    title: "Airse Climate Solutions",
    description: "Application web pour visualiser et analyser des données climatiques, offrant des insights pour des décisions durables.",
    image: "/placeholder.svg",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
    link: "https://preview--airse-climate-solutions.lovable.app/",
    featured: true
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif permettant de visualiser des données complexes de manière simple et intuitive.",
    image: "/placeholder.svg",
    tech: ["React", "Redux", "Tailwind CSS", "Chart.js"],
    link: "#"
  },
  {
    title: "E-commerce CMS",
    description: "Système de gestion de contenu pour une boutique en ligne avec gestion des produits, commandes et clients.",
    image: "/placeholder.svg",
    tech: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    link: "#"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
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
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-background to-card/70">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16 text-center mx-auto">Réalisations</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={project.title}
              className="reveal-on-scroll glowing-border overflow-hidden relative card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-72 object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-highlight hover:text-white transition-colors"
                >
                  <span>Voir le projet</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div 
              key={project.title}
              className="reveal-on-scroll glowing-border p-6 bg-card/80 backdrop-blur-sm card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="inline-flex items-center text-highlight hover:text-white transition-colors"
              >
                <span>Plus de détails</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="button-primary">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
