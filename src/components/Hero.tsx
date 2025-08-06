
import { ArrowDown, Download, Sparkles, Code, Zap } from 'lucide-react';
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
      {/* Enhanced animated background with particles */}
      <div className="absolute inset-0">
        {/* Main floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Additional smaller particles */}
        <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-gradient-to-br from-cyan-400/15 to-blue-600/15 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-gradient-to-br from-violet-500/15 to-purple-600/15 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced Profile Image with glassmorphism */}
          <div className="w-56 h-56 mx-auto mb-8 relative group">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-blue-500 to-pink-500 p-1 animate-glow relative">
              {/* Glassmorphism ring */}
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-pulse"></div>
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/lovable-uploads/96146d5a-d5be-4880-8376-e1a4dc3e38dd.png"
                  alt="Garwit Mathur"
                  className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
              {/* Floating icons around profile */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                <Code size={16} className="text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1.5s'}}>
                <Zap size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
                <span className="gradient-text relative">
                  Garwit Mathur
                  <Sparkles className="absolute -top-8 -right-8 w-8 h-8 text-yellow-400 animate-pulse opacity-70" />
                </span>
              </h1>
              {/* Floating badge */}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-purple-300 mb-4">
                ✨ Available for collaboration
              </div>
            </div>
            
            <div className="text-xl md:text-3xl text-gray-300 mb-6 font-medium tracking-wide">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                B.Tech CSE | Full-Stack Developer | AI & ML Enthusiast
              </span>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                I'm a 3rd-year Computer Science student passionate about building 
                <span className="text-blue-400 font-semibold"> real-world tech solutions </span>
                using AI, ML, and Web Development. Let's 
                <span className="text-purple-400 font-semibold"> create something amazing </span>
                together.
              </p>
            </div>

            {/* Enhanced CTA Buttons with glassmorphism */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={scrollToProjects}
                className="relative bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              
              <Button 
                variant="outline"
                className="relative border-2 border-purple-500/50 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 backdrop-blur-sm px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Button>
            </div>

            {/* Tech stack indicators */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {['React', 'Python', 'AI/ML', 'Node.js'].map((tech, index) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all duration-300 cursor-default"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce mt-2"></div>
          </div>
          <span className="text-xs text-gray-500 font-medium">Scroll down</span>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
