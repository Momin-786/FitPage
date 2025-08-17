import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

export default function SuccessStoriesSection() {
  const progressBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar) => {
              (bar as HTMLElement).style.animation = 'progressFill 2s ease-in-out forwards';
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressBarsRef.current) {
      observer.observe(progressBarsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: "jessica",
      name: "Jessica M.",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "I lost 30 pounds in 3 months and gained so much confidence. The trainers are amazing and the community is so supportive!",
      results: "-30 lbs • +40% strength",
      borderColor: "border-orange-primary",
      resultColor: "text-orange-primary",
      starColor: "text-orange-primary"
    },
    {
      id: "mark",
      name: "Mark T.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "The strength training program completely transformed my physique. I've never felt stronger or more confident in my life.",
      results: "+25 lbs muscle • +60% strength",
      borderColor: "border-blue-secondary",
      resultColor: "text-blue-secondary",
      starColor: "text-blue-secondary"
    },
    {
      id: "lisa",
      name: "Lisa R.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "The yoga program helped me find balance in both my body and mind. My flexibility and mental clarity have improved dramatically.",
      results: "+200% flexibility • Better sleep",
      borderColor: "border-lime-accent",
      resultColor: "text-lime-accent",
      starColor: "text-lime-accent"
    }
  ];

  const progressMetrics = [
    { label: "Achieve Weight Goals", percentage: 92, color: "bg-orange-primary", textColor: "text-orange-primary" },
    { label: "Increase Strength", percentage: 89, color: "bg-blue-secondary", textColor: "text-blue-secondary" },
    { label: "Feel More Confident", percentage: 95, color: "bg-lime-accent", textColor: "text-lime-accent" },
    { label: "Stick to Program", percentage: 87, color: "bg-orange-primary", textColor: "text-orange-primary" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            SUCCESS <span className="text-orange-primary">STORIES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real people, real results. See how our members transformed their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-800 rounded-2xl p-8 card-hover shadow-2xl"
              data-testid={`testimonial-${testimonial.id}`}>
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name}'s transformation success`}
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <div className={`flex ${testimonial.starColor}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className={`border-l-4 ${testimonial.borderColor} pl-4`}>
                <div className="text-sm text-gray-400">Results:</div>
                <div className={`${testimonial.resultColor} font-semibold`}>
                  {testimonial.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Stats */}
        <div className="mt-16 bg-gray-800 rounded-2xl p-8" ref={progressBarsRef}>
          <h3 className="text-2xl font-oswald font-bold text-center text-white mb-8">
            MEMBER PROGRESS METRICS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {progressMetrics.map((metric, index) => (
              <div key={index} className="text-center" data-testid={`metric-${index}`}>
                <div className="bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
                  <div 
                    className={`${metric.color} h-full progress-bar`}
                    style={{ '--progress-width': `${metric.percentage}%` } as React.CSSProperties}
                  ></div>
                </div>
                <div className={`text-2xl font-bold ${metric.textColor} mb-1`}>
                  {metric.percentage}%
                </div>
                <div className="text-gray-300 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
