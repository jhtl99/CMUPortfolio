import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section
      id="about"
      className="-mt-10 py-10 relative bg-transparent text-gray-200"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I’m an Electrical & Computer Engineering student at Carnegie Mellon University,
            interested in systems, software, and how design choices shape performance.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Card className="w-full md:w-3/4 lg:w-2/3 bg-white/5 border border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-blue-300 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-100">Education</h3>
              </div>
              <p className="text-gray-300">
                <span className="font-medium text-white">
                  Carnegie Mellon University
                </span>
                <br />
                Bachelor of Science in Computer Engineering (Software Concentration)
                <br />
                Minor in Artificial Intelligence
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Expected Graduation: Spring 2027
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
