
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-portfolio-navy text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-white animate-on-scroll">
          Get In Touch
          <span className="block h-1 w-3/4 bg-portfolio-teal mt-2 rounded-full"></span>
        </h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <p className="text-gray-300 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:syedsami4751@gmail.com" className="flex items-center group">
                <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-portfolio-teal transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="group-hover:text-portfolio-teal transition-colors">syedsami4751@gmail.com</span>
              </a>
              
              <a href="https://github.com/helix342" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-portfolio-teal transition-colors">
                  <Github className="h-6 w-6" />
                </div>
                <span className="group-hover:text-portfolio-teal transition-colors">github.com/helix342</span>
              </a>
              
              <a href="https://linkedin.com/in/syedsami1574" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-portfolio-teal transition-colors">
                  <Linkedin className="h-6 w-6" />
                </div>
                <span className="group-hover:text-portfolio-teal transition-colors">linkedin.com/in/syedsami1574</span>
              </a>
            </div>
          </div>
          
          <div className="animate-on-scroll animate-delay-2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-teal" 
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-teal" 
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-teal" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-portfolio-teal text-white font-medium rounded-md hover:bg-portfolio-orange transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
