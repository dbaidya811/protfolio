
import React from 'react';
import { Code, Server, Shield, Database, Cloud, Lock, Globe, GitBranch } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      description: "Full-stack web development with modern frameworks",
      skills: ["React", "TypeScript", "Node.js", "Python", "Next.js", "Vue.js", "PostgreSQL", "MongoDB"]
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Server className="w-8 h-8" />,
      description: "Automation, CI/CD, and cloud infrastructure",
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "Jenkins", "GitHub Actions", "Terraform", "Ansible"]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      description: "Security assessment and secure development practices",
      skills: ["Penetration Testing", "OWASP", "Security Auditing", "Vulnerability Assessment", "SIEM", "Incident Response"]
    }
  ];

  const technologies = [
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 90 },
    { name: "Docker", level: 88 },
    { name: "AWS", level: 85 },
    { name: "Kubernetes", level: 82 },
    { name: "Security Testing", level: 87 }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive skills across development, operations, and security domains
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Proficiency */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Technology Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
