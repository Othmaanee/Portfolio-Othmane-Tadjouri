
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Utiliser Formspree pour l'envoi du formulaire sans redirection
      const response = await fetch('https://formspree.io/f/tadjouriothmane@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Message envoyé avec succès",
          description: "Merci ! Je vous répondrai dès que possible.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          project: '',
          message: ''
        });
      } else {
        throw new Error('Une erreur est survenue.');
      }
    } catch (error) {
      toast({
        title: "Erreur d'envoi",
        description: "Veuillez réessayer ou me contacter directement par email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-card/70 to-background relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16 text-center mx-auto">Contact</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="reveal-on-scroll">
              <h3 className="text-2xl font-bold mb-6">Discutons de votre projet</h3>
              <p className="text-lg mb-8 text-muted-foreground">
                Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je vous répondrai dans les plus brefs délais.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-highlight" />
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-1">Email</h4>
                    <a href="mailto:tadjouriothmane@gmail.com" className="text-foreground hover:text-highlight transition-colors">
                      tadjouriothmane@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-highlight" />
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-1">Téléphone</h4>
                    <a href="tel:+33652959497" className="text-foreground hover:text-highlight transition-colors">
                      +33 6 52 95 94 97
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 glowing-border bg-card/80 backdrop-blur-sm">
                <h4 className="font-bold mb-4">Disponibilité</h4>
                <p className="text-muted-foreground mb-2">Je réponds généralement sous 24h</p>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div className="bg-highlight h-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="reveal-on-scroll">
              <form onSubmit={handleSubmit} className="glowing-border p-6 bg-card/80 backdrop-blur-sm">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="project" className="block text-sm font-medium mb-2">Type de projet</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="website">Site Web</option>
                    <option value="webapp">Application Web</option>
                    <option value="automation">Automatisation</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input min-h-[120px]"
                    placeholder="Décrivez votre projet..."
                    rows={5}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="inline-block h-4 w-4 border-2 border-white/50 border-t-white rounded-full animate-spin mr-2"></span>
                  ) : (
                    <Send size={18} className="mr-2" />
                  )}
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
