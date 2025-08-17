import { Dumbbell, Flame, Leaf } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      id: "strength",
      title: "Strength Training",
      icon: <Dumbbell className="text-orange-primary text-2xl" />,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      description: "Build lean muscle and increase your strength with our progressive resistance training program.",
      duration: "8-12 weeks",
      intensity: "High",
      intensityColor: "text-orange-primary",
      buttonColor: "bg-orange-primary hover:bg-orange-600"
    },
    {
      id: "hiit",
      title: "HIIT Cardio",
      icon: <Flame className="text-blue-secondary text-2xl" />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      description: "Maximize calorie burn and improve cardiovascular health with high-intensity interval training.",
      duration: "6-8 weeks",
      intensity: "Very High",
      intensityColor: "text-blue-secondary",
      buttonColor: "bg-blue-secondary hover:bg-blue-600"
    },
    {
      id: "yoga",
      title: "Yoga & Flexibility",
      icon: <Leaf className="text-lime-accent text-2xl" />,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      description: "Improve flexibility, balance, and mental wellness through mindful movement and breathing.",
      duration: "Ongoing",
      intensity: "Moderate",
      intensityColor: "text-lime-accent",
      buttonColor: "bg-lime-accent hover:bg-green-400 text-charcoal font-semibold"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-charcoal to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            OUR <span className="text-orange-primary">PROGRAMS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our scientifically designed programs tailored to your fitness goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="bg-gray-800 rounded-2xl overflow-hidden card-hover shadow-2xl"
              data-testid={`program-${program.id}`}>
              <img 
                src={program.image}
                alt={`${program.title} workout`}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {program.icon}
                  <h3 className="text-xl font-oswald font-semibold text-white ml-3">
                    {program.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{program.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Intensity</span>
                    <span className={program.intensityColor}>{program.intensity}</span>
                  </div>
                </div>
                <button 
                  className={`w-full ${program.buttonColor} text-white py-2 rounded-lg transition-colors duration-300`}
                  data-testid={`button-learn-more-${program.id}`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
