
import { Users, Calendar, Award, Globe, Lightbulb, Code } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Co-curricular Activities</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6 animate-on-scroll">
            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-teal">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-teal/20 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-portfolio-teal" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">Google Developer Student Club</h3>
                    <span className="text-sm text-portfolio-teal">2023-2024</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Active member of the Google Developer Student Club, focusing on building developer skills and fostering innovation within the campus community.
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Key Contributions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Organized the technical debate "Speak Up!" for the Karur Local Chapter, enhancing technical communication skills among students</li>
                      <li>Facilitated workshops on web development technologies and Android app development</li>
                      <li>Collaborated with peers to create solution prototypes for local community problems</li>
                      <li>Participated in Google Solution Challenge 2024, developing innovative solutions for sustainable development goals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-purple animate-on-scroll animate-delay-2">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-purple/20 p-3 rounded-full">
                    <Code className="h-6 w-6 text-portfolio-purple" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">Coding Competitions</h3>
                    <span className="text-sm text-portfolio-purple">2022-Present</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Regular participant in coding competitions and hackathons to enhance problem-solving skills and collaborative development.
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Secured 2nd place in the college-level algorithmic challenge (2023)</li>
                      <li>Participated in 24-hour hackathon organized by IEEE Student Chapter</li>
                      <li>Completed over 200 coding challenges on platforms like LeetCode and HackerRank</li>
                      <li>Mentored junior students in competitive programming techniques</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-accent animate-on-scroll animate-delay-3">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-accent/20 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-portfolio-accent" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">Tech Blog Contributor</h3>
                    <span className="text-sm text-portfolio-accent">2023-Present</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Regular contributor to medium.com and the college tech blog, sharing insights on web development and emerging technologies.
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Published Articles:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>"Getting Started with MERN Stack Development" - College Tech Blog</li>
                      <li>"Implementing Authentication in React Applications" - Medium</li>
                      <li>"Best Practices for RESTful API Design" - Dev Community</li>
                      <li>"Introduction to Serverless Architecture" - College Newsletter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-orange animate-on-scroll">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-orange/20 p-3 rounded-full">
                    <Users className="h-6 w-6 text-portfolio-orange" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">Nebula Nest Hackathon</h3>
                    <span className="text-sm text-portfolio-orange">Oct 2023</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Volunteered in marketing and social media engagement for promotions of the inter-college hackathon Nebula Nest, supporting event organization and execution.
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Created and executed social media strategy, resulting in 500+ registrations from 15+ colleges</li>
                      <li>Designed promotional materials and digital content for event marketing</li>
                      <li>Coordinated with participating colleges to ensure smooth communication</li>
                      <li>Assisted in event logistics and provided technical support during the hackathon</li>
                      <li>Documented event highlights and success stories for future promotions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-navy animate-on-scroll animate-delay-2">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-navy/20 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-portfolio-navy" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">AI/ML Workshop Facilitator</h3>
                    <span className="text-sm text-portfolio-navy">Jan 2024</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Led introductory workshops on artificial intelligence and machine learning concepts for junior students, focusing on practical applications.
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Topics Covered:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Introduction to Python for Machine Learning</li>
                      <li>Data preprocessing and visualization techniques</li>
                      <li>Building simple classification and regression models</li>
                      <li>Integration of ML models with web applications</li>
                      <li>Ethical considerations in AI development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-portfolio-subtle p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-portfolio-teal animate-on-scroll animate-delay-3">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-portfolio-teal/20 p-3 rounded-full">
                    <Award className="h-6 w-6 text-portfolio-teal" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-portfolio-navy mb-1">Technical Paper Presentation</h3>
                    <span className="text-sm text-portfolio-teal">Nov 2023</span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Presented research paper on "Implementation of AI in Educational Systems" at the National Conference on Emerging Technologies.
                  </p>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-2">Research Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Explored adaptive learning systems and personalized content delivery</li>
                      <li>Analyzed the impact of chatbots and virtual assistants in educational platforms</li>
                      <li>Discussed ethical considerations in educational AI implementation</li>
                      <li>Presented case studies demonstrating success metrics in AI-enhanced learning environments</li>
                      <li>Paper published in conference proceedings with peer recognition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-portfolio-navy to-portfolio-purple p-8 rounded-xl shadow-md text-white">
            <h3 className="text-xl font-bold mb-3">Looking for collaboration opportunities!</h3>
            <p className="max-w-2xl mx-auto mb-6">
              I'm always interested in participating in hackathons, open-source projects, and technical communities. 
              If you're organizing an event or looking for contributors, let's connect!
            </p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-portfolio-navy font-medium rounded-md hover:bg-portfolio-teal hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
              <span className="mr-2">Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
