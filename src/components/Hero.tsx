
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToNext = () => {
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fade-in">
            Full-Stack Developer
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in">
            DevOps Engineer & Cybersecurity Expert
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Building secure, scalable web applications with modern technologies
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Frontend & Backend Development
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Cloud Infrastructure & DevOps
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Security Implementation
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3">
              Download CV
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-800"
              asChild
            >
              <a 
                href="https://coff.ee/dbaidya811e" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Coffee size={20} />
                Buy me a coffee
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a 
              href="https://github.com/dbaidya811" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors duration-200 rounded-full hover:bg-secondary/20"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/dbaidya811" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors duration-200 rounded-full hover:bg-secondary/20"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:dbaidya811@gmail.com" 
              className="p-3 text-muted-foreground hover:text-primary transition-colors duration-200 rounded-full hover:bg-secondary/20"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={scrollToNext}
            className="animate-bounce hover:text-primary transition-colors duration-200"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="mx-auto text-muted-foreground" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
