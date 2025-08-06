
import { Code, Globe, BarChart3, Link } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Web Development",
      description: "Modern, responsive UIs using React.js and Tailwind CSS with focus on user experience and performance.",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description: "Building complete applications with seamless frontend-backend integration and robust architecture.",
      features: ["End-to-end Development", "API Integration", "Database Design", "Scalable Architecture"]
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Machine Learning",
      description: "ML models, data visualization, and analysis using Python for actionable business insights.",
      features: ["Data Visualization", "Predictive Modeling", "Statistical Analysis", "ML Model Development"]
    },
    {
      icon: Link,
      title: "API Integration",
      description: "Seamless data flow between services and web applications with secure and efficient API connections.",
      features: ["RESTful APIs", "Third-party Integration", "Data Synchronization", "Security Implementation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
