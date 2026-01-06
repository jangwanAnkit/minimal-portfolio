import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Profile } from '../types/portfolio';

const Hero = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetch('/data/profile.json')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Failed to load profile:', err));
  }, []);

  if (!profile) {
    return (
      <section id="about" className="pt-8 pb-2 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="w-32 h-32 rounded-full mx-auto bg-gray-200"></div>
              <div className="h-8 bg-gray-200 rounded max-w-md mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded max-w-2xl mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="pt-8 pb-2 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
            {profile.name}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {profile.title}
          </p>
          <p className="max-w-2xl mx-auto text-gray-500 mb-8">
            {profile.bio}
          </p>
          <div className="flex justify-center space-x-6">
            {profile.socials.github && (
              <a href={profile.socials.github} target="_blank" className="text-gray-600 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </a>
            )}
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            <a href={profile.socials.email} target="_blank" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;