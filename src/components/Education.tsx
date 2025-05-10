
import { School } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Education</h2>
        
        <div className="mt-12 space-y-12">
          <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:mr-6 mb-4 md:mb-0">
                <div className="bg-portfolio-teal/10 p-4 rounded-full">
                  <School className="h-8 w-8 text-portfolio-teal" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-portfolio-navy">M.Kumarasamy College of Engineering</h3>
                  <span className="text-portfolio-teal font-medium text-sm md:text-base">June 2022 - June 2026</span>
                </div>
                <p className="text-lg italic mb-2">B.Tech Artificial Intelligence and Machine Learning</p>
                <p className="text-gray-600 mb-2">Current CGPA: 8.0</p>
                <div className="mt-4">
                  <h4 className="font-medium text-portfolio-navy mb-2">Coursework:</h4>
                  <p className="text-gray-600">
                    Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, 
                    Internet Programming, MERN Stack, Computer Networks
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll animate-delay-2">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:mr-6 mb-4 md:mb-0">
                <div className="bg-portfolio-teal/10 p-4 rounded-full">
                  <School className="h-8 w-8 text-portfolio-teal" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-portfolio-navy">R.K.V Senior Secondary School</h3>
                  <span className="text-portfolio-teal font-medium text-sm md:text-base">Completed June 2022</span>
                </div>
                <p className="text-gray-600 mb-2">Percentage: 75.6%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
