
import { Code, Database, Brain, GitBranch } from 'lucide-react';

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
    <section id="skills" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 card-hover"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar" style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Node.js', 'Python', 'MongoDB', 'Firebase', 'Git', 'Tailwind', 'JavaScript'].map((tech) => (
              <div
                key={tech}
                className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg px-4 py-2 text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300 cursor-default"
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
