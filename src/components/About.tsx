
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        <div className="mt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-on-scroll">
              <p className="text-lg text-gray-600">
                I'm a <span className="text-portfolio-navy font-medium">B.Tech student</span> specializing in Artificial Intelligence and Machine Learning at M.Kumarasamy College of Engineering, with a passion for web development and programming.
              </p>
              <p className="text-lg text-gray-600">
                My journey in technology began with curiosity and has evolved into expertise across multiple programming languages and frameworks.
              </p>
              <p className="text-lg text-gray-600">
                I enjoy solving complex problems and building innovative applications that make a difference. My experience spans from full-stack development to AI systems.
              </p>
            </div>
            
            <div className="animate-on-scroll animate-delay-2">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-portfolio-navy">Skills & Expertise</h3>
                
                <h4 className="font-medium text-gray-700 mb-2">Languages</h4>
                <div className="flex flex-wrap mb-4">
                  <span className="badge">Python</span>
                  <span className="badge">Java</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">PHP</span>
                  <span className="badge">HTML</span>
                  <span className="badge">CSS</span>
                </div>
                
                <h4 className="font-medium text-gray-700 mb-2">Tools</h4>
                <div className="flex flex-wrap mb-4">
                  <span className="badge">Git/GitHub</span>
                  <span className="badge">Pycharm</span>
                  <span className="badge">VS Code</span>
                  <span className="badge">MySQL</span>
                  <span className="badge">Bootstrap</span>
                </div>
                
                <h4 className="font-medium text-gray-700 mb-2">Frameworks</h4>
                <div className="flex flex-wrap">
                  <span className="badge">React</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">Laravel</span>
                  <span className="badge">MERN Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
