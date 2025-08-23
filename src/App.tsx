import { useState, useEffect } from 'react';
import './App.css';
import './i18n';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import InterestsSection from './components/InterestsSection';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-gray-300 min-h-screen flex w-[99vw]' : 'bg-white text-gray-600 min-h-screen flex'}>
      {/* Sidebar and overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 transition-opacity duration-300"
          aria-label="Sidebar overlay"
          tabIndex={-1}
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {/* Hamburger trigger for mobile */}
      {isMobile && !sidebarOpen && (
        <button
          className="fixed top-4 left-4 z-40 bg-[#38adbd] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect y="4" width="24" height="2" rx="1" fill="currentColor"/><rect y="11" width="24" height="2" rx="1" fill="currentColor"/><rect y="18" width="24" height="2" rx="1" fill="currentColor"/></svg>
        </button>
      )}
      <main
        className={`flex-1 ml-[300px] px-8 py-10 transition-all duration-300 text-left`}
        style={isMobile ? { marginLeft: 0, paddingLeft: 20, paddingRight: 20 } : {}}
        aria-label="Main content"
      >
       {/* <Header />*/}
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <InterestsSection />
      </main>
    </div>
  );
}

export default App;
