
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            Just starting my professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="text-2xl">Ready to Begin</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Eager to start my professional career
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground mt-4 md:mt-0">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>2025 - Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Kolkata, India</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm currently seeking opportunities to begin my professional journey. 
                  While I may not have formal work experience yet, I'm passionate about learning 
                  and ready to contribute to meaningful projects.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2">What I Bring:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Fresh perspective and enthusiasm</li>
                      <li>• Willingness to learn and adapt</li>
                      <li>• Strong motivation to succeed</li>
                      <li>• Dedication to professional growth</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Looking For:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Entry-level opportunities</li>
                      <li>• Mentorship and guidance</li>
                      <li>• Hands-on learning experiences</li>
                      <li>• Collaborative team environment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
