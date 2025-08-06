
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-blue-500 to-pink-500 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <img
                  src="/lovable-uploads/96146d5a-d5be-4880-8376-e1a4dc3e38dd.png"
                  alt="Garwit Mathur"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Garwit Mathur</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
            B.Tech CSE | Full-Stack Developer | AI & ML Enthusiast
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm a 3rd-year Computer Science student passionate about building real-world tech solutions 
            using AI, ML, and Web Development. Let's create something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
