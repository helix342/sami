
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Professional Experience</h2>
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-portfolio-teal/30 hidden md:block"></div>
          
          {/* Experience Item 1 */}
          <div className="mb-16 md:mb-24 relative">
            <div className="hidden md:block absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 top-10 z-10">
              <div className="w-8 h-8 rounded-full bg-portfolio-teal border-4 border-white"></div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 md:mb-0 md:ml-12 lg:ml-0 animate-on-scroll border-l-4 border-portfolio-teal lg:mr-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-portfolio-navy">Technology Innovation Hub</h3>
                  <span className="px-3 py-1 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Current</span>
                </div>
                
                <p className="text-lg text-portfolio-purple font-medium mb-3">Developer</p>
                
                <div className="flex items-center text-gray-500 mb-6 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">May 2024 - Present</span>
                  <MapPin size={16} className="mr-2" />
                  <span>Karur, Tamil Nadu</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">Leading development initiatives for campus projects and client solutions using modern web technologies and frameworks.</p>
                  
                  <h4 className="font-semibold text-portfolio-navy">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Developing internal projects to address campus needs and requirements, integrating the MERN stack and Laravel framework.</li>
                    <li>Leading a team, conducting client requirement meetings, performing testing, and deploying dynamic web applications and websites.</li>
                    <li>Ensuring responsive design and functionality across multiple websites for both internal use and client projects.</li>
                    <li>Implementing CI/CD pipelines to streamline development workflows and improve code quality.</li>
                    <li>Providing technical mentorship to junior team members and conducting code reviews.</li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="badge">React</span>
                    <span className="badge">Node.js</span>
                    <span className="badge">Express</span>
                    <span className="badge">MongoDB</span>
                    <span className="badge">Laravel</span>
                    <span className="badge">MySQL</span>
                    <span className="badge">Git</span>
                    <span className="badge">Agile</span>
                  </div>
                </div>
              </div>
              
              <div className="flex md:justify-end items-center">
                <Card className="w-full max-w-md bg-portfolio-subtle border-none shadow-md p-6 animate-on-scroll animate-delay-2">
                  <h4 className="font-semibold text-portfolio-navy mb-4">Project Highlights</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-teal/30 transition-all">
                      <h5 className="font-medium text-portfolio-navy mb-1">Campus Resource Portal</h5>
                      <p className="text-sm text-gray-600 mb-2">Centralized platform for students and faculty to access and manage campus resources.</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">React</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Node.js</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">MongoDB</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-teal/30 transition-all">
                      <h5 className="font-medium text-portfolio-navy mb-1">Event Management System</h5>
                      <p className="text-sm text-gray-600 mb-2">Comprehensive solution for planning, promoting, and managing campus events and activities.</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Laravel</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">MySQL</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Bootstrap</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-teal/30 transition-all">
                      <h5 className="font-medium text-portfolio-navy mb-1">Staff Performance Dashboard</h5>
                      <p className="text-sm text-gray-600 mb-2">Analytics platform for monitoring and improving faculty performance metrics.</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">React</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Express</span>
                        <span className="px-2 py-0.5 text-xs bg-portfolio-teal/10 text-portfolio-teal rounded-full">Chart.js</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Experience Item 2 */}
          <div className="relative">
            <div className="hidden md:block absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 top-10 z-10">
              <div className="w-8 h-8 rounded-full bg-portfolio-teal border-4 border-white"></div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start">
              <div className="order-2 md:order-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6 md:mb-0 md:ml-12 lg:ml-0 animate-on-scroll border-l-4 border-portfolio-teal lg:mr-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-portfolio-navy">Muskurahat Foundation</h3>
                  <span className="px-3 py-1 text-xs bg-portfolio-purple/10 text-portfolio-purple rounded-full">Volunteer</span>
                </div>
                
                <p className="text-lg text-portfolio-purple font-medium mb-3">Social Impact Intern</p>
                
                <div className="flex items-center text-gray-500 mb-6 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">Aug. 2023 - Sept. 2023</span>
                  <MapPin size={16} className="mr-2" />
                  <span>Tamil Nadu</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">Participated in an impactful internship focused on raising funds and awareness for educational opportunities for underprivileged children across India.</p>
                  
                  <h4 className="font-semibold text-portfolio-navy">Key Contributions:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Volunteered in fundraising campaigns to support education for underprivileged children across India.</li>
                    <li>Created awareness for the cause by organizing campaigns, distributing brochures, and conducting door-to-door outreach.</li>
                    <li>Collaborated with a team of volunteers to plan and execute community engagement events.</li>
                    <li>Supported digital marketing efforts to increase the foundation's online presence and reach.</li>
                    <li>Documented success stories and impact to share with donors and supporters.</li>
                  </ul>
                  
                  <div className="flex items-center mt-6">
                    <a href="https://muskurahat.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-portfolio-teal hover:text-portfolio-navy transition-all">
                      <span className="mr-2">Visit Foundation Website</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="badge">Social Impact</span>
                    <span className="badge">Fundraising</span>
                    <span className="badge">Community Outreach</span>
                    <span className="badge">Education</span>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex md:justify-start items-center">
                <Card className="w-full max-w-md bg-portfolio-subtle border-none shadow-md p-6 animate-on-scroll animate-delay-2">
                  <h4 className="font-semibold text-portfolio-navy mb-4">Impact Metrics</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-purple/30 transition-all">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium text-portfolio-navy">Awareness Campaigns</h5>
                        <span className="text-xl font-bold text-portfolio-purple">12+</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Local community engagement events and awareness sessions conducted.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-purple/30 transition-all">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium text-portfolio-navy">Funds Raised</h5>
                        <span className="text-xl font-bold text-portfolio-purple">₹50K+</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Contributed to the foundation's fundraising goals through various initiatives.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-portfolio-subtle hover:border-portfolio-purple/30 transition-all">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium text-portfolio-navy">Children Impacted</h5>
                        <span className="text-xl font-bold text-portfolio-purple">100+</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Directly and indirectly supported educational opportunities for underprivileged children.</p>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-500 italic">"Contributing to educational equity and social impact through meaningful volunteer work."</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
