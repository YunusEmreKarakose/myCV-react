import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const SIDEBAR_WIDTH = 'w-[300px]';
const SIDEBAR_BG = 'bg-[#38adbd]';
const SIDEBAR_TEXT = 'text-gray-300';
const SIDEBAR_PADDING = 'py-10 px-5';
const SIDEBAR_PROFILE_IMG = 'mt-22 w-40 h-40 rounded-full border-8 border-[#236e78] mb-6 mx-auto';
const NAV_LINK = 'block py-3 px-2 text-base font-bold uppercase uppercase tracking-wider hover:opacity-80 transition';

const NAV_ITEMS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'skills', label: 'skills' },
  { id: 'interests', label: 'interests' },
];

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
  { code: 'de', label: 'DE' },
];

interface SidebarProps {
  isMobile: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile, sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) => {
  const { t, i18n } = useTranslation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const currentLang = i18n.language;

  // Focus trap for accessibility
  useEffect(() => {
    if (!isMobile || !sidebarOpen) return;
    const sidebar = sidebarRef.current;
    if (!sidebar) return;
    const focusable = sidebar.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0] as HTMLElement;
    const last = focusable[focusable.length - 1] as HTMLElement;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      } else if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    };
    sidebar.addEventListener('keydown', handleKey);
    first.focus();
    return () => sidebar.removeEventListener('keydown', handleKey);
  }, [isMobile, sidebarOpen, setSidebarOpen]);

  return (
    <aside
      id="sidebar"
      ref={sidebarRef}
      className={
        `${SIDEBAR_WIDTH} ${SIDEBAR_BG} ${SIDEBAR_TEXT} ${SIDEBAR_PADDING} fixed top-0 left-0 h-full z-30 flex flex-col justify-between transition-transform duration-300 outline-none` +
        (isMobile ? (sidebarOpen ? ' translate-x-0' : ' -translate-x-full') : '')
      }
      style={{ minWidth: 280, maxWidth: 320 }}
      aria-label="Sidebar navigation"
      tabIndex={isMobile && sidebarOpen ? 0 : -1}
    >
      <div>
        {/* Dark mode and language controls */}
        <div className="flex items-center justify-between">
          {/* Dark mode toggle */}
          <button onClick={() => setDarkMode(!darkMode)}
            className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            {
              darkMode ?
                <svg className="fill-violet-700 block" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    fillRule="evenodd" clipRule-="evenodd"></path>
                </svg>
                :
                <svg className="fill-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd" clipRule="evenodd"></path>
                </svg>

            }
          </button>
          {/* Language switcher */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  className={
                    `
                    px-2 py-1 text-xs font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white 
                    ${currentLang === lang.code
                      ? 'bg-gray-800/50 bg-opacity-30 text-white'
                      : 'bg-gray-800/50 bg-opacity-10 text-white hover:bg-opacity-20'
                    }`
                  }
                  onClick={() => i18n.changeLanguage(lang.code)}
                  aria-label={`Switch to ${lang.label} language`}
                  tabIndex={sidebarOpen || !isMobile ? 0 : -1}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Hamburger for mobile */}
        {isMobile && (
          <button
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ×
          </button>
        )}
        {/* Profile image */}
        <img
          src="/assets/img/profile.jpg"
          alt="Profile avatar"
          className={SIDEBAR_PROFILE_IMG}
        />
        {/* Navigation */}
        <nav className="mt-8 flex justify-center text-center" aria-label="Section navigation">
          <ul className="list-none p-0 m-0">
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={NAV_LINK + ' focus:outline-none focus:ring-2 focus:ring-white'}
                  tabIndex={sidebarOpen || !isMobile ? 0 : -1}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}

            <li key="resume">
              <a
                className={NAV_LINK + ' focus:outline-none focus:ring-2 focus:ring-white'}
                href={t('resume')}
                target="_blank"
                tabIndex={sidebarOpen || !isMobile ? 0 : -1}
              >
                {t('download')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
