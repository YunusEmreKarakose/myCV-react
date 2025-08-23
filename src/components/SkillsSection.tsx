import React from 'react';
import { useTranslation } from 'react-i18next';

const SKILL_ICONS_1 = [
  {name:"Solidity",icon:"/resume/images/solidity_logo.svg",link:"https://soliditylang.org/"},
  {name:"Hardhat",icon:"/resume/images/Hardhat.svg",link:"https://hardhat.org/"},
  {name:"Ethers",icon:"/resume/images/ethers.svg",link:"https://ethers.org/"},
  {name:"Truffle",icon:"/resume/images/truffle.svg",link:"https://trufflesuite.com/"},
  {name:"Web3Js",icon:"/resume/images/web3js.svg",link:"https://docs.web3js.org/"},
  {name:"Anchor Framework",icon:"/resume/images/anchor_framework.png",link:"https://www.anchor-lang.com/docs/clients/rust"}
];
const SKILL_ICONS_2 = [
  {name:"Javascript",icon:"/resume/images/javascript.webp",link:"https://www.javascript.com/"},
  {name:"Typescript",icon:"/resume/images/typescript.svg",link:"https://www.typescriptlang.org/"},
  {name:"NodeJs",icon:"/resume/images/Node.js.svg",link:"https://nodejs.org/"},
  {name:"ReactJs",icon:"/resume/images/react.png",link:"https://react.dev/"},
  {name:"ExpressJs",icon:"/resume/images/icons8-express-js-480.svg",link:"https://expressjs.com/"},
  {name:"Bootstrap",icon:"/resume/images/icons8-bootstrap-logo-480.svg",link:"https://getbootstrap.com/"},
  {name:"MongoDB",icon:"/resume/images/mongodb.png",link:"https://www.mongodb.com/"},
  {name:"MySQL",icon:"/resume/images/mysql.png",link:"https://www.mysql.com/"},
];
const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="flex mt-24 mb-12 mr-10 min-h-screen" aria-labelledby="skills-title">
      <div className='my-auto'>
      <h2 id="skills-title" className="pt-20 custom-header text-5xl font-bold uppercase tracking-wide mb-20 text-left">{t('skills')}</h2>
      <div className="flex flex-wrap gap-6 justify-between mb-10">
        {SKILL_ICONS_1.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer"
            tabIndex={0}
            aria-label={skill.name}
          >
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 flex items-center justify-center rounded bg-transparent grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-200"
              title={skill.name}
            >
              <img src={skill.icon} alt={skill.name} width={180} height={180} />
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 justify-between mb-10">
        {SKILL_ICONS_2.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer"
            tabIndex={0}
            aria-label={skill.name}
          >
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 flex items-center justify-center rounded bg-transparent grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-200"
              title={skill.name}
            >
              <img src={skill.icon} alt={skill.name} width={80} height={80}/>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SkillsSection;
