import { Check, X, Shield } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      id: "basic",
      name: "BASIC",
      price: 29,
      description: "Perfect for getting started",
      features: [
        { name: "Access to gym equipment", included: true },
        { name: "Basic workout programs", included: true },
        { name: "Locker room access", included: true },
        { name: "Personal training sessions", included: false },
        { name: "Nutrition consultation", included: false }
      ],
      buttonClass: "bg-gray-700 hover:bg-gray-600",
      featured: false
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: 59,
      description: "Best value for serious fitness",
      features: [
        { name: "Everything in Basic", included: true },
        { name: "2 personal training sessions/month", included: true },
        { name: "Nutrition consultation", included: true },
        { name: "Priority class booking", included: true },
        { name: "Progress tracking app", included: true }
      ],
      buttonClass: "bg-white text-orange-primary hover:bg-gray-100",
      featured: true
    },
    {
      id: "elite",
      name: "ELITE",
      price: 99,
      description: "Ultimate fitness experience",
      features: [
        { name: "Everything in Premium", included: true },
        { name: "Unlimited personal training", included: true },
        { name: "Custom meal plans", included: true },
        { name: "24/7 gym access", included: true },
        { name: "VIP amenities", included: true }
      ],
      buttonClass: "bg-orange-primary hover:bg-orange-600",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            CHOOSE YOUR <span className="text-orange-primary">PLAN</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-2xl p-8 card-hover shadow-2xl relative ${
                plan.featured 
                  ? 'bg-gradient-to-b from-orange-primary to-orange-600 transform scale-105' 
                  : 'bg-gray-800 border-2 border-transparent hover:border-gray-600 transition-all duration-300'
              }`}
              data-testid={`plan-${plan.id}`}>
              
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime-accent text-charcoal px-6 py-1 rounded-full font-semibold text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-oswald font-bold mb-2 ${
                  plan.featured ? 'text-white' : 'text-white'
                }`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mb-1 ${
                  plan.featured ? 'text-white' : 'text-white'
                }`}>
                  ${plan.price}
                  <span className={`text-lg ${
                    plan.featured ? 'text-orange-200' : 'text-gray-400'
                  }`}>
                    /month
                  </span>
                </div>
                <p className={plan.featured ? 'text-orange-200' : 'text-gray-400'}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li 
                    key={index}
                    className={`flex items-center ${
                      plan.featured ? 'text-white' : feature.included ? 'text-gray-300' : 'text-gray-400'
                    }`}>
                    {feature.included ? (
                      <Check className="text-lime-accent mr-3" size={16} />
                    ) : (
                      <X className="text-gray-600 mr-3" size={16} />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${plan.buttonClass}`}
                data-testid={`button-choose-${plan.id}`}>
                Choose {plan.name.charAt(0) + plan.name.slice(1).toLowerCase()}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gray-800 rounded-full px-6 py-3">
            <Shield className="text-lime-accent text-xl mr-3" />
            <span className="text-white font-medium">30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
