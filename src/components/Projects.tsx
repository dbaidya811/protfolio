
import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "SecureChat Application",
      description: "End-to-end encrypted messaging platform with advanced security features",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      category: "security",
      technologies: ["React", "Node.js", "WebRTC", "Encryption"],
      github: "#",
      demo: "#"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Terraform-based multi-cloud deployment pipeline with monitoring",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      category: "devops",
      technologies: ["Terraform", "AWS", "Kubernetes", "Monitoring"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and analytics",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#"
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated security scanning tool for web applications",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      category: "security",
      technologies: ["Python", "OWASP", "Docker", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "CI/CD Pipeline Dashboard",
      description: "Real-time monitoring dashboard for deployment pipelines",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "devops",
      technologies: ["React", "Jenkins", "Grafana", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management API",
      description: "RESTful API with authentication and real-time updates",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Node.js", "Express", "JWT", "WebSocket"],
      github: "#",
      demo: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'devops', label: 'DevOps' },
    { id: 'security', label: 'Security' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            A showcase of my work across web development, DevOps, and cybersecurity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.id}
              variant={filter === filterOption.id ? "default" : "outline"}
              onClick={() => setFilter(filterOption.id)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              {filterOption.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
