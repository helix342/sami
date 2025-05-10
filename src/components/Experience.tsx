
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Experience</h2>
        
        <div className="mt-12 space-y-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm animate-on-scroll">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:mr-6 mb-4 md:mb-0">
                <div className="bg-portfolio-orange/10 p-4 rounded-full">
                  <Briefcase className="h-8 w-8 text-portfolio-orange" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-portfolio-navy">Technology Innovation Hub</h3>
                  <span className="text-portfolio-teal font-medium text-sm md:text-base">May 2024 - Present</span>
                </div>
                <p className="text-lg italic mb-2">Developer</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Developed internal projects to address campus needs and requirements, integrating the MERN stack and Laravel framework.</li>
                  <li>Led a team, conducted client requirement meetings, performed testing, and deployed dynamic web applications and websites.</li>
                  <li>Ensured responsive design and functionality across multiple websites for both internal use and client projects.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm animate-on-scroll animate-delay-2">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:mr-6 mb-4 md:mb-0">
                <div className="bg-portfolio-orange/10 p-4 rounded-full">
                  <Briefcase className="h-8 w-8 text-portfolio-orange" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-portfolio-navy">Muskurahat Foundation</h3>
                  <span className="text-portfolio-teal font-medium text-sm md:text-base">Aug. 2023 - Sept. 2023</span>
                </div>
                <p className="text-lg italic mb-2">Volunteer</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Volunteered in an internship to raise funds for underprivileged children across India to support their education.</li>
                  <li>Created awareness for the cause by organizing campaigns, distributing brochures, and conducting door-to-door outreach.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
