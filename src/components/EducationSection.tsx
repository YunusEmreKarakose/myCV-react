import React from 'react';
import { useTranslation } from 'react-i18next';

const EducationSection: React.FC = () => {
  const { t } = useTranslation();
  const educationList = t('educationList', { returnObjects: true }) as Array<any>;
  return (
    <section id="education" className="flex mt-24 mb-12 mr-10 min-h-screen" aria-labelledby="education-title">
      <div className='my-auto'>
      <h2 id="education-title" className="pt-20 custom-header text-5xl font-bold uppercase tracking-wide mb-20 text-left">{t('education')}</h2>
      <ul className="space-y-8">
        {educationList.map((edu, idx) => (
          <li key={idx} className="">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
              <div>
                <a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/generalinfo.aspx?pid=9&lang=2" target="_blank">
                  <img src='/resume/images/ktu.png'></img>
                </a>
                <div className="font-bold text-lg uppercase tracking-wide">&emsp;{edu.degree}</div>
                <div>&emsp;&nbsp;GPA: 2.88</div>
              </div>
              <span className="text-sm text-[#38adbd] italic mt-1 sm:mt-0">{edu.year}</span>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default EducationSection;
