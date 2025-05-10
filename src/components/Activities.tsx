
import { Users, Calendar } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Co-curricular Activities</h2>
        
        <div className="mt-12 space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm animate-on-scroll">
            <div className="flex">
              <div className="mr-4">
                <div className="bg-portfolio-teal/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-portfolio-teal" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-portfolio-navy mb-2">Google Developer Student Club</h3>
                <p className="text-gray-600">
                  Organized the technical debate Speak Up! as part of the Google Developer Student Club for the Karur Local Chapter.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm animate-on-scroll animate-delay-2">
            <div className="flex">
              <div className="mr-4">
                <div className="bg-portfolio-teal/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-portfolio-teal" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-portfolio-navy mb-2">Nebula Nest Hackathon</h3>
                <p className="text-gray-600">
                  Volunteered in marketing and social media engagement for promotions of the inter-college hackathon Nebula Nest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
