import { useEffect, useState } from "react";
import HeroLeftPanel from "@/components/HeroLeftPanel";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  const sections = ["about", "skills", "projects", "contact"];
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen text-gray-200 overflow-hidden">
      {/* ✅ Fixed gradient + animated background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0b0b10] via-[#0d1117] to-[#101018]">
        <AnimatedBackground
          nodeCount={120}
          maxDistance={400}
          nodeSpeed={3}
          mouseRepelDistance={250}
          mouseRepelStrength={5}
        />
      </div>

      {/* ✅ Fixed split layout */}
      <div className="fixed inset-0 flex z-10">
        {/* Left side (fixed hero) */}
        <aside className="hidden lg:flex flex-col justify-center items-start w-2/5 xl:w-2/5 h-full px-24 pointer-events-none select-none">
          <div className="pointer-events-auto select-auto w-full">
            <HeroLeftPanel />
          </div>
        </aside>

        {/* ✅ Right side (fixed container, inner scroll only) */}
        <div className="ml-auto w-full lg:w-3/5 xl:w-3/5 h-full flex flex-col">
          <div className="h-full overflow-y-scroll no-scrollbar snap-y snap-mandatory scroll-smooth">
            <section id="about" className="snap-start min-h-screen flex items-center">
              <About />
            </section>
            <section id="skills" className="snap-start min-h-screen flex items-center">
              <Skills />
            </section>
            <section id="projects" className="snap-start min-h-screen flex items-center">
              <Projects />
            </section>
            <section id="contact" className="snap-start min-h-screen flex items-center">
              <Contact />
            </section>
            <Footer />
          </div>
        </div>
      </div>

      {/* Fixed navigation dots */}
      <nav className="hidden lg:flex flex-col items-end fixed right-8 top-1/2 -translate-y-1/2 space-y-6 z-20">
        {sections.map((id) => (
          <div key={id} className="relative flex items-center gap-4 cursor-pointer group">
            <span
              className={`transition-all duration-300 whitespace-nowrap ${
                activeSection === id
                  ? "text-white text-base font-medium scale-105"
                  : "text-gray-500 text-sm opacity-80 group-hover:opacity-100"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>

            <button
              onClick={() => scrollTo(id)}
              aria-label={`Go to ${id}`}
              className={`w-3 h-3 rounded-full flex-shrink-0 transition-all duration-300 ${
                activeSection === id
                  ? "bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Index;
