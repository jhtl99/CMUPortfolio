const Skills = () => {
  const technicalSkills = [
    "App Development — React, TypeScript, Swift, Android",
    "Computer Systems — C/C++, Assembly, System Design, Hardware",
    "Artificial Intelligence — Python, TensorFlow, PyTorch",
    "Software Engineering — Node.js, Databases, APIs",
  ];

  const interests = [
    "Digital Painting",
    "Music Production",
    "Food Photography",
    "Fitness & Calisthenics",
  ];

  return (
    <section id="skills" className="pt-16 pb-24 bg-transparent text-gray-200">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
            Skills & Interests
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A blend of technical experience and creative curiosity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical */}
          <div>
            <h3 className="text-2xl font-medium mb-6 text-white">
              Technical Skills
            </h3>
            <ul className="space-y-3 text-gray-400 leading-relaxed">
              {technicalSkills.map((skill) => (
                <li key={skill} className="border-l border-gray-700 pl-4">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Creative / Interests */}
          <div>
            <h3 className="text-2xl font-medium mb-6 text-white">
              Interests
            </h3>
            <ul className="space-y-3 text-gray-400 leading-relaxed">
              {interests.map((interest) => (
                <li key={interest} className="border-l border-gray-700 pl-4">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
