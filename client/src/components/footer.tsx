import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", testId: "social-facebook" },
    { icon: <Instagram size={20} />, href: "#", testId: "social-instagram" },
    { icon: <Twitter size={20} />, href: "#", testId: "social-twitter" },
    { icon: <Youtube size={20} />, href: "#", testId: "social-youtube" }
  ];

  const quickLinks = [
    { name: "Programs", id: "programs" },
    { name: "Trainers", id: "trainers" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" }
  ];

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-oswald font-bold text-orange-primary mb-4">FitPulse</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your body, transform your life. Join thousands who've already started their fitness journey with our expert trainers and proven programs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-orange-primary p-3 rounded-lg transition-colors duration-300"
                  data-testid={social.testId}>
                  <div className="text-white">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 hover:text-orange-primary transition-colors text-left"
                    data-testid={`footer-link-${link.id}`}>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-orange-primary transition-colors"
                    data-testid={`footer-support-${index}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 FitPulse. All rights reserved. Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
