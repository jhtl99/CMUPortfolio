const About = () => {
  const headshot = `${import.meta.env.BASE_URL}assets/headshots/headshot_1.png`;

  return (
    <section
      id="about"
      className="w-full px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-start gap-8"
    >
      {/* Static Image */}
      <div className="flex-shrink-0">
        <img
          src={headshot}
          alt="Jayden headshot"
          className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-xl shadow-xl"
        />
      </div>

      {/* Text */}
      <div className="flex-1 text-left space-y-6">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-2">
          About Me
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
          I'm a Computer Engineering student interested in  software and design.  
          I explore how technology and creativity intersect whether in
          code, art, or music.
        </p>

        <div className="text-gray-400 text-sm leading-relaxed pt-2">
          <p>
            <span className="text-white font-medium">
              Carnegie Mellon University
            </span>
          </p>
          <p>B.S. in Electrical & Computer Engineering</p>
          <p>Minor in Artificial Intelligence</p>
          <p className="text-secondary/80 mt-1">
            Expected Graduation: Spring 2027
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
