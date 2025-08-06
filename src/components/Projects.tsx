
import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Food Demand & Donation Management System",
      description: "A comprehensive platform connecting food donors with those in need, featuring real-time demand tracking and efficient distribution management.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Supabase"],
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Fitness Tracker Web App",
      description: "Interactive fitness tracking application with workout planning, progress visualization, and goal setting features.",
      technologies: ["React.js", "Firebase", "Chart.js"],
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Quiz Game Application",
      description: "Engaging quiz platform with multiple categories, scoring system, and interactive user interface for educational purposes.",
      technologies: ["HTML", "CSS", "JavaScript"],
      role: "Developer",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Supply Chain Optimization Model",
      description: "Data-driven optimization model for supply chain efficiency using linear programming and predictive analytics.",
      technologies: ["Python", "Pandas", "PuLP"],
      role: "Data Analyst",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-32 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">My work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my work spanning web development, data science, and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 card-hover group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium text-purple-300 border border-purple-500/30">
                  {project.role}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 flex items-center gap-2 backdrop-blur-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-600 hover:to-blue-600 flex items-center gap-2 backdrop-blur-sm border border-purple-500/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button
            variant="outline"
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 text-lg backdrop-blur-sm"
          >
            <Eye className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
