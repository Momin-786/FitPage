import { ArrowRight, Play, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern gym interior with equipment" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 gradient-overlay z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white text-shadow leading-tight">
            TRANSFORM YOUR
            <span className="text-orange-primary"> BODY</span><br />
            TRANSFORM YOUR
            <span className="text-lime-accent"> LIFE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
            Join thousands who've already transformed their lives with our science-backed fitness programs. 
            Your journey to a stronger, healthier you starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              className="bg-orange-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2"
              data-testid="button-start-journey"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Your Journey <ArrowRight size={20} />
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              data-testid="button-watch-story">
              Watch Our Story <Play size={20} />
            </button>
          </div>
          
          {/* Stats Counter */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center" data-testid="stat-members">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-orange-primary">5000+</div>
              <div className="text-gray-300">Members Transformed</div>
            </div>
            <div className="text-center" data-testid="stat-success">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-blue-secondary">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center" data-testid="stat-support">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-lime-accent">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button 
          onClick={scrollToPrograms}
          className="text-white hover:text-orange-primary transition-colors"
          data-testid="scroll-indicator">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
