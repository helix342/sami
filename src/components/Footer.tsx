
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-portfolio-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Column */}
          <div className="animate-on-scroll">
            <h3 className="text-xl font-display font-semibold mb-4 text-white">
              About <span className="text-portfolio-teal">Me</span>
            </h3>
            <p className="mb-6 text-white/80">
              I'm a passionate developer with expertise in creating stunning web applications 
              that deliver exceptional user experiences and robust functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-portfolio-teal/20 rounded-full transition-colors duration-300">
                <Facebook size={20} className="text-portfolio-teal" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-portfolio-teal/20 rounded-full transition-colors duration-300">
                <Instagram size={20} className="text-portfolio-teal" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-portfolio-teal/20 rounded-full transition-colors duration-300">
                <Linkedin size={20} className="text-portfolio-teal" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-on-scroll animate-delay-1">
            <h3 className="text-xl font-display font-semibold mb-4 text-white">
              Quick <span className="text-portfolio-teal">Links</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-portfolio-teal transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-portfolio-teal transition-colors duration-300">About</a></li>
              <li><a href="#education" className="hover:text-portfolio-teal transition-colors duration-300">Education</a></li>
              <li><a href="#experience" className="hover:text-portfolio-teal transition-colors duration-300">Experience</a></li>
              <li><a href="#projects" className="hover:text-portfolio-teal transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-portfolio-teal transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="animate-on-scroll animate-delay-2">
            <h3 className="text-xl font-display font-semibold mb-4 text-white">
              Contact <span className="text-portfolio-teal">Info</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={20} className="text-portfolio-teal mr-3" />
                <span>contact@syedsami.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-portfolio-teal mr-3" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="mt-6">
                <p className="text-white/70">
                  Feel free to reach out if you have any questions or want to work together on a project.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">© {currentYear} Syed Sami U. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-center md:text-right">
            <span className="text-white/70">Designed & Built with </span>
            <span className="text-portfolio-teal">React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
