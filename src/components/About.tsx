
import { GraduationCap, Briefcase, Award, Sparkles, Code2, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about technology and innovation, I'm on a journey to create impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hero-glow">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As a dedicated Computer Science student at Bennett University, I'm constantly exploring 
                the intersection of artificial intelligence, machine learning, and web development. 
                My goal is to leverage emerging technologies to build solutions that make a real difference.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                With hands-on experience in full-stack development and a strong foundation in data science, 
                I enjoy tackling complex problems and turning ideas into reality through code.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '50+', label: 'Projects', icon: Code2 },
                { number: '3+', label: 'Years Learning', icon: TrendingUp },
                { number: '10+', label: 'Technologies', icon: Sparkles }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-purple-500/20 text-center card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 card-hover group">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-gray-400">Academic Background</p>
                </div>
              </div>
              <div className="pl-18">
                <p className="text-white font-medium text-lg">B.Tech Computer Science Engineering</p>
                <p className="text-purple-400 font-medium">Bennett University</p>
                <p className="text-gray-400">2023 - 2027</p>
              </div>
            </div>

            {/* Internship */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 card-hover group">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                  <p className="text-gray-400">Professional Journey</p>
                </div>
              </div>
              <div className="pl-18">
                <p className="text-white font-medium text-lg">Technical Intern</p>
                <p className="text-purple-400 font-medium">Honda Cars India Ltd.</p>
                <div className="text-gray-300 text-sm mt-3 space-y-1">
                  <p>• Worked on ACE project and QICS application documentation</p>
                  <p>• Technical documentation and frontend enhancements</p>
                  <p>• Defect tracking and reporting systems</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 card-hover group">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
                  <p className="text-gray-400">Core Competencies</p>
                </div>
              </div>
              <div className="pl-18 space-y-2">
                <p className="text-white font-medium">AI & Machine Learning</p>
                <p className="text-white font-medium">Full-Stack Development</p>
                <p className="text-white font-medium">Data Science & Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
