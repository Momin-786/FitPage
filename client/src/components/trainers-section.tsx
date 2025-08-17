import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function TrainersSection() {
  const trainers = [
    {
      id: "sarah",
      name: "Sarah Johnson",
      role: "Head Trainer",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
      description: "Certified in strength training and nutrition with 8+ years of experience.",
      roleColor: "text-orange-primary",
      hoverColor: "hover:text-orange-primary"
    },
    {
      id: "mike",
      name: "Mike Rodriguez",
      role: "HIIT Specialist",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
      description: "Former athlete specialized in high-intensity training and fat loss programs.",
      roleColor: "text-blue-secondary",
      hoverColor: "hover:text-blue-secondary"
    },
    {
      id: "emma",
      name: "Emma Chen",
      role: "Yoga Instructor",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
      description: "200hr RYT certified with expertise in mindfulness and flexibility training.",
      roleColor: "text-lime-accent",
      hoverColor: "hover:text-lime-accent"
    },
    {
      id: "david",
      name: "David Kim",
      role: "Nutrition Coach",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
      description: "Registered dietitian helping clients optimize their nutrition for peak performance.",
      roleColor: "text-orange-primary",
      hoverColor: "hover:text-orange-primary"
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            MEET YOUR <span className="text-orange-primary">TRAINERS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Work with certified professionals who are passionate about helping you achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <div 
              key={trainer.id}
              className="bg-charcoal rounded-2xl overflow-hidden card-hover shadow-2xl"
              data-testid={`trainer-${trainer.id}`}>
              <img 
                src={trainer.image}
                alt={`${trainer.name} - ${trainer.role}`}
                className="w-full h-64 object-cover" 
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-oswald font-semibold text-white mb-2">
                  {trainer.name}
                </h3>
                <p className={`${trainer.roleColor} font-medium mb-3`}>
                  {trainer.role}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {trainer.description}
                </p>
                <div className="flex justify-center space-x-3">
                  <a 
                    href="#" 
                    className={`text-gray-400 ${trainer.hoverColor} transition-colors`}
                    data-testid={`social-instagram-${trainer.id}`}>
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="#" 
                    className={`text-gray-400 ${trainer.hoverColor} transition-colors`}
                    data-testid={`social-facebook-${trainer.id}`}>
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="#" 
                    className={`text-gray-400 ${trainer.hoverColor} transition-colors`}
                    data-testid={`social-linkedin-${trainer.id}`}>
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
