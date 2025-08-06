
import { Code, Database, Brain, GitBranch, Sparkles, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "C++", level: 85 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 88 },
      ]
    },
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React.js", level: 92 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "SQL", level: 82 },
      ]
    },
    {
      title: "AI/ML & Tools",
      icon: Brain,
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 88 },
        { name: "scikit-learn", level: 80 },
        { name: "Git/GitHub", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Technical expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 card-hover group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-purple-500/50"
                        style={{ width: `${skill.level}%`, animationDelay: `${skillIndex * 0.2}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Technologies I work with</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'Python', 'MongoDB', 'Firebase', 'Git', 'Tailwind', 'JavaScript'].map((tech, index) => (
              <div
                key={tech}
                className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-xl px-6 py-3 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-white/10 transition-all duration-300 cursor-default card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
