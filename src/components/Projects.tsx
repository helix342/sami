
import { Code } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Projects</h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden group animate-on-scroll hover:shadow-md transition-all">
            <div className="bg-portfolio-navy h-3 w-full group-hover:bg-portfolio-teal transition-colors"></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-portfolio-navy group-hover:text-portfolio-teal transition-colors">Bus Tracking Website</h3>
                <span className="text-portfolio-teal text-sm">Feb 2024</span>
              </div>
              <div className="flex flex-wrap mb-4">
                <span className="badge">HTML</span>
                <span className="badge">CSS</span>
                <span className="badge">JavaScript</span>
                <span className="badge">PHP</span>
                <span className="badge">Node.js</span>
                <span className="badge">MySQL</span>
                <span className="badge">Google Maps API</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Developed a real-time bus tracking web application with live tracking using Google Maps API.</li>
                <li>Designed a responsive, user-friendly interface compatible with desktops, tablets, and smartphones.</li>
                <li>Utilized MySQL for database management and PHP/Node.js for backend functionality, deploying the website on 000webhost.</li>
              </ul>
              <div className="mt-6">
                <a href="#" className="flex items-center text-portfolio-navy group-hover:text-portfolio-teal transition-colors">
                  <Code className="mr-2 h-4 w-4" />
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden group animate-on-scroll animate-delay-2 hover:shadow-md transition-all">
            <div className="bg-portfolio-navy h-3 w-full group-hover:bg-portfolio-teal transition-colors"></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-portfolio-navy group-hover:text-portfolio-teal transition-colors">Complaint Management System</h3>
                <span className="text-portfolio-teal text-sm">August 2024 - Present</span>
              </div>
              <div className="flex flex-wrap mb-4">
                <span className="badge">HTML</span>
                <span className="badge">CSS</span>
                <span className="badge">JavaScript</span>
                <span className="badge">PHP</span>
                <span className="badge">MySQL</span>
                <span className="badge">Bootstrap</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Developed a web platform for managing and resolving complaints with user authentication and role-based access control.</li>
                <li>Designed an intuitive dashboard for users to lodge, track, and manage complaints, using MySQL and PHP for backend functionality.</li>
                <li>Ensured responsive design using Bootstrap and hosted the project on GitHub for version control and collaboration.</li>
              </ul>
              <div className="mt-6">
                <a href="#" className="flex items-center text-portfolio-navy group-hover:text-portfolio-teal transition-colors">
                  <Code className="mr-2 h-4 w-4" />
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
