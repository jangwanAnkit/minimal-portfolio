import { HelmetProvider } from 'react-helmet-async';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SEO from './components/SEO';
import Skills from './components/Skills';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <SEO />
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;