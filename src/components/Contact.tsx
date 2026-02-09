import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Calendar, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Arshad_VKB_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="section-padding px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to turn your ideas into reality? Let's discuss your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <MessageSquare className="text-primary" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 907 477 3366</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>arshadvkb969@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Calicut, Kerala </span>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Available for new projects</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="btn-primary w-full" onClick={handleDownloadCV}>
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-2xl">What I Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">End-to-end web and mobile application development</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold mb-2">IoT Solutions</h4>
                  <p className="text-sm text-muted-foreground">Smart automation systems and sensor integration</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Technical Consulting</h4>
                  <p className="text-sm text-muted-foreground">Architecture design and technology stack optimization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
