import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-charcoal/95 backdrop-blur-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-oswald font-bold text-orange-primary cursor-pointer" 
                onClick={() => scrollTo('home')}
                data-testid="logo">
              FitPulse
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollTo('home')} 
                className="text-white hover:text-orange-primary transition-colors duration-300"
                data-testid="nav-home">
                Home
              </button>
              <button 
                onClick={() => scrollTo('programs')} 
                className="text-white hover:text-orange-primary transition-colors duration-300"
                data-testid="nav-programs">
                Programs
              </button>
              <button 
                onClick={() => scrollTo('trainers')} 
                className="text-white hover:text-orange-primary transition-colors duration-300"
                data-testid="nav-trainers">
                Trainers
              </button>
              <button 
                onClick={() => scrollTo('pricing')} 
                className="text-white hover:text-orange-primary transition-colors duration-300"
                data-testid="nav-pricing">
                Pricing
              </button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="bg-orange-primary hover:bg-orange-600 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                data-testid="nav-join">
                Join Now
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              data-testid="mobile-menu-button">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-charcoal border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollTo('home')} 
              className="block w-full text-left px-3 py-2 text-white hover:text-orange-primary"
              data-testid="mobile-nav-home">
              Home
            </button>
            <button 
              onClick={() => scrollTo('programs')} 
              className="block w-full text-left px-3 py-2 text-white hover:text-orange-primary"
              data-testid="mobile-nav-programs">
              Programs
            </button>
            <button 
              onClick={() => scrollTo('trainers')} 
              className="block w-full text-left px-3 py-2 text-white hover:text-orange-primary"
              data-testid="mobile-nav-trainers">
              Trainers
            </button>
            <button 
              onClick={() => scrollTo('pricing')} 
              className="block w-full text-left px-3 py-2 text-white hover:text-orange-primary"
              data-testid="mobile-nav-pricing">
              Pricing
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="block w-full text-left px-3 py-2 bg-orange-primary text-white rounded-lg mt-2"
              data-testid="mobile-nav-join">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
