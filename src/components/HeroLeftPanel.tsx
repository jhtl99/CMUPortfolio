import { Button } from "./ui/button";

const HeroLeftPanel = () => {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="flex flex-col justify-center items-start w-full max-w-md ml-auto pr-12 space-y-8">
      <div className="text-left space-y-2">
        <h1 className="text-5xl font-semibold text-white mb-3">Jayden Lin</h1>
        <p className="text-gray-400 leading-relaxed">
          ECE + AI at Carnegie Mellon University
        </p>
      </div>

      {/* <Button
        onClick={scrollToContact}
        variant="outline"
        className="border-gray-500/50 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-2 rounded-lg transition w-fit"
      >
        Get In Touch
      </Button> */}
    </div>
  );
};

export default HeroLeftPanel;
