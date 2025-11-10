import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-12 pb-16 bg-transparent text-gray-500 text-sm">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-4">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
        >
          <ArrowUp size={16} />
          <span>Back to top</span>
        </button>

        <p className="text-gray-500">
          Appreciate you being here.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
