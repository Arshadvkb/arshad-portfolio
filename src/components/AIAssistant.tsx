import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import aeroAiLogo from '@/assets/aero-ai-logo.png';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help answer questions about Arshad's portfolio. You can ask me about his skills, projects, experience, or anything else you'd like to know!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const portfolioData = {
    skills: {
      backend: ['Python', 'Django', 'Node.js', 'Express.js', 'REST APIs'],
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
      mobile: ['Flutter', 'Dart', 'Cross-platform', 'Firebase', 'State Management'],
      database: ['MongoDB', 'SQL', 'PostgreSQL', 'Git'],
    },
    projects: {
      aeroAI: {
        name: 'Aero AI',
        description: 'IoT-based pest detection system for agriculture',
        technologies: ['Python', 'Node.js', 'Flutter', 'Appwrite', 'Embedded C', 'MQTT', 'Raspberry Pi', 'ESP32'],
      },
      fitnessApp: {
        name: 'Fitness App',
        description: 'Complete fitness tracking application',
        technologies: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Flutter'],
      },
    },
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
      return `Arshad has expertise in multiple areas:
      
**Backend:** ${portfolioData.skills.backend.join(', ')}
**Frontend:** ${portfolioData.skills.frontend.join(', ')}
**Mobile:** ${portfolioData.skills.mobile.join(', ')}
**Database & Tools:** ${portfolioData.skills.database.join(', ')}

He's particularly strong in full-stack development with Python/Django and Node.js, plus mobile app development with Flutter.`;
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
      return `Arshad has worked on several interesting projects:

**🚁 Aero AI** - An innovative IoT-based pest detection system for agriculture using AI and embedded systems. Built with ${portfolioData.projects.aeroAI.technologies.slice(0, 4).join(', ')} and more.

**💪 Fitness App** - A comprehensive fitness tracking application with both web and mobile interfaces. Developed using ${portfolioData.projects.fitnessApp.technologies.slice(0, 4).join(', ')} and other technologies.

Both projects showcase his ability to work across different platforms and technologies.`;
    }
    
    if (lowerMessage.includes('aero') || lowerMessage.includes('pest') || lowerMessage.includes('agriculture')) {
      return `**Aero AI** is one of Arshad's most innovative projects! It's an IoT-based pest detection system designed for agriculture. The system uses AI to detect pests and help farmers protect their crops.

**Technologies used:** ${portfolioData.projects.aeroAI.technologies.join(', ')}

This project demonstrates his expertise in IoT development, embedded systems, and agricultural technology solutions.`;
    }
    
    if (lowerMessage.includes('fitness') || lowerMessage.includes('health')) {
      return `The **Fitness App** is a comprehensive fitness tracking application that Arshad developed. It provides users with tools to track their fitness journey across both web and mobile platforms.

**Technologies used:** ${portfolioData.projects.fitnessApp.technologies.join(', ')}

This project shows his ability to create full-stack applications with both web and mobile components.`;
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
      return `You can contact Arshad through:
      
📧 **Email:** arshadvkb969@gmail.com
💼 **LinkedIn:** Check the social links in the portfolio
🐙 **GitHub:** Available in the portfolio's social section

Feel free to reach out for collaborations, job opportunities, or any questions about his work!`;
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return `Arshad is a **Full-Stack Developer** with expertise spanning web, mobile, and IoT platforms. His background includes:

• **Backend Development** with Python/Django and Node.js/Express.js
• **Mobile App Development** using Flutter and Dart
• **IoT and Embedded Systems** development
• **Database Management** with MongoDB, SQL, and PostgreSQL
• **Frontend Technologies** including HTML5, CSS3, JavaScript

His projects show a strong focus on practical, real-world applications that solve actual problems.`;
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return `Hello! 👋 I'm here to help you learn more about Arshad VKB and his work. You can ask me about:

• His technical skills and expertise
• His projects and portfolio
• His background and experience
• How to contact him

What would you like to know?`;
    }

    return `That's a great question! While I don't have specific information about that, I can tell you about Arshad's skills (Python, Django, Node.js, Flutter, etc.), his projects (Aero AI, Fitness App), or how to contact him. What would you like to know more about?`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* AI Assistant Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-glow-pulse ${
          isOpen ? 'hidden' : 'flex'
        }`}
        size="lg"
      >
        <img 
          src={aeroAiLogo} 
          alt="Aero AI Logo" 
          className="w-6 h-6 mr-2 object-contain"
        />
        Ask Aero AI
      </Button>

      {/* AI Assistant Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl bg-background border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <img 
                src={aeroAiLogo} 
                alt="Aero AI Logo" 
                className="w-6 h-6 object-contain"
              />
              Aero AI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col h-[400px] p-4">
            <ScrollArea className="flex-1 pr-3 mb-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.isUser ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {!message.isUser && (
                      <Bot className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-line ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.isUser && (
                      <User className="w-6 h-6 text-secondary-foreground mt-1 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects, experience..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
