import React from 'react';
import { useTranslation } from 'react-i18next';
const SOCIAL_LINKS = [
  {
    href: 'https://github.com/YunusEmreKarakose',
    label: 'GitHub',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.18 9.18 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" /></svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/yunus-emre-karak%C3%B6se/',
    label: 'LinkedIn',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
    ),
  },
];
const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="flex min-h-screen mr-10" aria-labelledby="about-title">
      <div className='m-auto'>
        <p className="text-[40px] custom-header sm:text-[75px] font-extrabold uppercase tracking-wider mb-4 text-left" style={{ lineHeight: 1.1 }}>
          <span>Yunus Emre </span>
          <span className="text-[#38adbd]">Karaköse</span>
        </p>
        <div className=" custom-header text-sm sm:text-base flex flex-wrap items-center gap-2 mb-8">
          <span>70734 FELLBACH</span>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:karakose.y.emre@gmail.com" className="text-[#38adbd] font-bold uppercase hover:underline">karakose.y.emre@gmail.com</a>
        </div>
        <p className="text-[20px] mt-2 mb-8">{t('aboutText')}</p>
        <div className="flex gap-4 mt-2 mb-8">
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-[#333] hover:bg-[#38adbd] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#38adbd]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
