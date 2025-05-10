
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in-up">
            <h2 className="text-lg md:text-xl text-portfolio-teal font-medium">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-portfolio-navy">
              Syed Sami U
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-md">
              B.Tech in Artificial Intelligence and Machine Learning student passionate about web development.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://github.com/helix342" target="_blank" rel="noopener noreferrer"
                className="bg-portfolio-navy text-white p-3 rounded-full hover:bg-portfolio-teal transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/syedsami1574" target="_blank" rel="noopener noreferrer"
                className="bg-portfolio-navy text-white p-3 rounded-full hover:bg-portfolio-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:syedsami4751@gmail.com"
                className="bg-portfolio-navy text-white p-3 rounded-full hover:bg-portfolio-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
            
            <div className="pt-4">
              <a href="#about" className="inline-block px-6 py-3 bg-portfolio-teal text-white font-medium rounded-md hover:bg-portfolio-navy transition-colors">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-teal rounded-full absolute -top-4 -right-4 animate-pulse-soft"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-navy rounded-full absolute -bottom-4 -left-4 animate-pulse-soft animation-delay-500"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full border-4 border-white shadow-xl overflow-hidden animate-float">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-portfolio-teal">SU</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
