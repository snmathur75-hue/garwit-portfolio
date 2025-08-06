
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would integrate with EmailJS or similar service
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "garwitmathur316@gmail.com",
      link: "mailto:garwitmathur316@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9711857947",
      link: "tel:+919711857947"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/garwit-mathur-48458b277",
      link: "https://linkedin.com/in/garwit-mathur-48458b277"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Garwit",
      link: "https://github.com/Garwit"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow developers. 
                Whether you have a project idea, need technical consultation, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-400 transition-all duration-300 group card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Greater Noida, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-purple-500/20 focus:border-purple-400 text-white placeholder-gray-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-purple-500/20 focus:border-purple-400 text-white placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-background/50 border-purple-500/20 focus:border-purple-400 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-purple-500/20">
          <p className="text-gray-400">
            © 2024 Garwit Mathur. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
