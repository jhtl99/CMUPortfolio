import { useState } from "react";
import appDevProject from "@/assets/app_image.jpg";
import computerSystemsProject from "@/assets/hyperparameter_sweep_run3.png";
import digitalArtProject from "@/assets/art2.png";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  links?: {
    github?: string;
    demo?: string;
    external?: string;
  };
}

const Projects = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "app-dev",
      title: "Internship App",
      category: "Mobile Development",
      description:
        "A mobile application built during my summer internship to streamline user workflows.",
      longDescription:
        "Led the end-to-end development of a mobile application focused on improving user engagement and internal analytics. Collaborated with designers and backend engineers, focusing on responsiveness and reliability across iOS and Android platforms.",
      image: appDevProject,
      technologies: ["React Native", "TypeScript", "Firebase", "REST APIs"],
      links: { github: "#", demo: "#" },
    },
    {
      id: "systems-research",
      title: "Prefetching Research",
      category: "Computer Systems",
      description:
        "Exploring memory prefetching strategies to improve cache performance.",
      longDescription:
        "Implemented and benchmarked custom prefetching algorithms using C++ and assembly, achieving up to 25% performance improvements on selected workloads. Presented results at CMU’s research symposium.",
      image: computerSystemsProject,
      technologies: ["C++", "Assembly", "Performance Analysis"],
      links: { external: "#" },
    },
    {
      id: "digital-art",
      title: "Digital Art Collection",
      category: "Creative Work",
      description:
        "A collection of minimal digital paintings posted on @jay.den.paints.",
      longDescription:
        "An ongoing digital art series exploring light, texture, and emotion through minimal composition. Each piece blends structured geometry with organic color flow, bridging art and computation.",
      image: digitalArtProject,
      technologies: ["Procreate", "Photoshop"],
      links: { external: "https://instagram.com/jay.den.paints" },
    },
  ];

  return (
    <section id="projects" className="pt-16 pb-24 bg-transparent text-gray-200">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Selected work spanning systems, software, and creative design.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((p) => {
            const isOpen = expanded === p.id;
            return (
              <div
                key={p.id}
                className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 bg-white/5 hover:bg-white/10"
              >
                {/* Compact Header */}
                <button
                  className="w-full text-left"
                  onClick={() => setExpanded(isOpen ? null : p.id)}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full md:w-64 h-40 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-medium mb-2 text-white">
                        {p.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">
                        {p.category}
                      </p>
                      <p className="text-gray-300">{p.description}</p>
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                <div
                  className={`transition-[max-height,opacity] duration-500 ease-in-out ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 text-gray-400">
                    <p className="mb-6 leading-relaxed text-gray-300">
                      {p.longDescription}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-white mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {p.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {p.links && (
                      <div className="flex gap-4 mt-4">
                        {p.links.demo && (
                          <a
                            href={p.links.demo}
                            target="_blank"
                            className="text-sm underline hover:text-white"
                          >
                            Live Demo
                          </a>
                        )}
                        {p.links.github && (
                          <a
                            href={p.links.github}
                            target="_blank"
                            className="text-sm underline hover:text-white"
                          >
                            Code
                          </a>
                        )}
                        {p.links.external && (
                          <a
                            href={p.links.external}
                            target="_blank"
                            className="text-sm underline hover:text-white"
                          >
                            Learn More
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
