import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out — I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:jaydenl@andrew.cmu.edu",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/jaydenlin0",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/jhtl99",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/jay.den.paints",
    },
  ];

  return (
    <section id="contact" className="pt-16 pb-24 bg-transparent text-gray-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out about opportunities, collaboration, or questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-white/5 border border-white/10 text-gray-200"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-white/5 border border-white/10 text-gray-200"
              />
              <Textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-white/5 border border-white/10 text-gray-200 resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <Send size={16} className="mr-2" />
                Send
              </Button>
            </form>
          </div>

          {/* Socials */}
          <div className="flex flex-col justify-center space-y-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-white transition"
              >
                <s.icon size={22} className="text-gray-400" />
                <span className="text-gray-300">{s.name}</span>
              </a>
            ))}

            <div className="mt-8 text-sm text-gray-500">
              <p>Currently open for Summer 2026 internship roles and collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
