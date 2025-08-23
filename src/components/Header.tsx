import React from 'react';

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/',
    label: 'GitHub',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.18 9.18 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
    ),
  },
  {
    href: 'https://linkedin.com/',
    label: 'LinkedIn',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
    ),
  },
  {
    href: 'mailto:name@email.com',
    label: 'Email',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
    ),
  },
];

const Header: React.FC = () => (
  <header className="mb-12 min-h-screen">
    <h1 className="text-[2.5rem] sm:text-[2.7rem] font-bold uppercase tracking-wider mb-2" style={{lineHeight:1.1}}>
      <span>CLARENCE </span>
      <span className="text-[#38adbd]">TAYLOR</span>
    </h1>
    <div className="text-sm sm:text-base text-gray-700 flex flex-wrap items-center gap-2 mb-2">
      <span>3524 Berry Street, Cheyenne Wells, CO 80810</span>
      <span className="hidden sm:inline">|</span>
      <span>(317) 585-8468</span>
      <span className="hidden sm:inline">|</span>
      <a href="mailto:name@email.com" className="text-[#C85A3A] hover:underline">name@email.com</a>
    </div>
    <div className="flex gap-4 mt-2">
      {SOCIAL_LINKS.map(link => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#333] hover:bg-[#38adbd] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#38adbd]"
        >
          {link.icon}
        </a>
      ))}
    </div>
    <p className="mt-4 text-gray-700 max-w-2xl">
      I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
    </p>
  </header>
);

export default Header;
