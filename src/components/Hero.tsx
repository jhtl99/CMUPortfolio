import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedBackground from "./AnimatedBackground";

// Assume 4 headshots available
const headshots = [
  "/assets/headshots/headshot_1.png",
  "/assets/headshots/headshot_2.png",
  "/assets/headshots/headshot_3.png",
  "/assets/headshots/headshot_4.png",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHeadshotClick = () => {
    setIndex((prev) => (prev + 1) % headshots.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0b10] via-[#0d1117] to-[#101018] overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-40">
        <AnimatedBackground
          nodeCount={100}
          maxDistance={400}
          nodeSpeed={3}
          mouseRepelDistance={300}
          mouseRepelStrength={5}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          {/* Text side */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-5xl lg:text-7xl font-semibold text-white leading-tight tracking-tight font-[Space_Grotesk]">
              Jayden
            </h1>
            <p className="text-gray-400 font-[IBM_Plex_Mono] text-lg leading-relaxed">
              Engineering student at CMU.  
              Exploring systems, software, and design.
            </p>
            <p className="text-gray-500 font-[IBM_Plex_Mono] text-sm">
              Building ideas that connect math, hardware, and creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray hover:bg-white hover:text-black transition-all"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Headshot side */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div
              className="relative cursor-pointer transition-transform hover:scale-105"
              onClick={handleHeadshotClick}
              title="Click to change photo"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <img
                src={headshots[index]}
                alt={`Headshot ${index + 1}`}
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
