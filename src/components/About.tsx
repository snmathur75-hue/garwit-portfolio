
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about technology and innovation, I'm on a journey to create impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              As a dedicated Computer Science student at Bennett University, I'm constantly exploring 
              the intersection of artificial intelligence, machine learning, and web development. 
              My goal is to leverage emerging technologies to build solutions that make a real difference.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With hands-on experience in full-stack development and a strong foundation in data science, 
              I enjoy tackling complex problems and turning ideas into reality through code.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-gray-400">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Education */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-gray-400">Academic Background</p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-white font-medium">B.Tech Computer Science Engineering</p>
                <p className="text-purple-400">Bennett University</p>
                <p className="text-gray-400">2023 - 2027</p>
              </div>
            </div>

            {/* Internship */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                  <p className="text-gray-400">Professional Journey</p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-white font-medium">Technical Intern</p>
                <p className="text-purple-400">Honda Cars India Ltd.</p>
                <p className="text-gray-400 text-sm mt-2">
                  • Worked on ACE project and QICS application documentation<br />
                  • Technical documentation and frontend enhancements<br />
                  • Defect tracking and reporting systems
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
                  <p className="text-gray-400">Core Competencies</p>
                </div>
              </div>
              <div className="pl-16">
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
