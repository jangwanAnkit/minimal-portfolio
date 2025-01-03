import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="pt-8 pb-2 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src="https://avatars.githubusercontent.com/u/105637896?v=4&auto=format&fit=crop&w=150&h=150"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
            Ankit Jangwan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer | Cloud Integration Expert
          </p>
          <p className="max-w-2xl mx-auto text-gray-500 mb-8">
            Passionate about creating elegant tailored solutions for complex problems using modern technologies. 
            With 4+ years of experience in web development, I specialize in 
            delivering streamlined full-stack development and seamless B2B solutions integration.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/jangwanAnkit" target="_blank" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ankit-jangwan-969419141/" target="_blank" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:jangwanankitofficial@gmail.com" target="_blank" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;