import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="pt-20 pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
            John Doe
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer | React Specialist | Open Source Contributor
          </p>
          <p className="max-w-2xl mx-auto text-gray-500 mb-8">
            Passionate about creating elegant solutions to complex problems. 
            With 5+ years of experience in web development, I specialize in 
            building scalable applications using modern technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;