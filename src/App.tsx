import { HelmetProvider } from 'react-helmet-async';
import ContactEnhanced from './components/ContactEnhanced';
import ExperienceEnhanced from './components/ExperienceEnhanced';
import HeroEnhanced from './components/HeroEnhanced';
import NavbarEnhanced from './components/NavbarEnhanced';
import ProjectsEnhanced from './components/ProjectsEnhanced';
import SEO from './components/SEO';
import SkillsEnhanced from './components/SkillsEnhanced';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO />
        <NavbarEnhanced />
        <main>
          <HeroEnhanced />
          <SkillsEnhanced />
          <ProjectsEnhanced />
          <ExperienceEnhanced />
          <ContactEnhanced />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;