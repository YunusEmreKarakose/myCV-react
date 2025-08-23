import React from 'react';
import { useTranslation } from 'react-i18next';

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  const experienceList = t('experienceList', { returnObjects: true }) as Array<any>;
  return (
    <section id="experience" className="mt-24 mb-12 mr-10 min-h-screen" aria-labelledby="experience-title">
      <h2 id="experience-title" className="pt-20 custom-header text-5xl font-bold uppercase tracking-wide mb-20 text-left">{t('experience')}</h2>
      <ExperienceList data={experienceList} />
    </section>
  );
};
const ListIcon = () => {
  return (
    <svg style={{ width: 24, height: 24, minWidth: 24, minHeight: 24 }} className="text-[#38adbd] dark:text-[#38adbd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd" />
    </svg>
  );
};
const ListIcon2 = () => {
  return (
    <svg style={{ width: 24, height: 24, minWidth: 24, minHeight: 24 }} className="text-[#38adbd] dark:text-[#38adbd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z" />
    </svg>
  );
};
const ListIcon3 = () => {
  return (
    <svg style={{ width: 24, height: 24, minWidth: 24, minHeight: 24 }} className="text-[#38adbd] dark:text-[#38adbd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
    </svg>

  );
};
type Detail = {
  description: string;
  details?: Detail[];
};

type Experience = {
  title: string;
  date: string;
  company: string;
  description: string;
  details?: Detail[];
};

type ExperienceListProps = {
  data: Experience[];
};

// Recursive details renderer
const DetailList: React.FC<{ details: Detail[]; level?: number }> = ({
  details,
  level = 0,
}) => {
  const listIcons = [ListIcon, ListIcon2, ListIcon3];
  return (
    <ul className={`ml-6`}>
      {details.map((d, idx) => (
        <li key={idx}>
          <div className="flex items-start">
            <span className="mr-2">{listIcons[level % listIcons.length]()}</span>
            {d.description}
          </div>
          {d.details && d.details.length > 0 && (
            <DetailList details={d.details} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
};

const ExperienceList: React.FC<ExperienceListProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      {data.map((exp, idx) => (
        <div key={idx} className="p-4 rounded-2xl shadow dark:shadow-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
            <span className="custom-header font-bold text-lg uppercase tracking-wide text-left">{exp.title}</span>
            <span className="custom-header text-sm text-[#38adbd] italic mt-1 sm:mt-0 text-left">{exp.date}</span>
          </div>
          <div className="text-[#38adbd] font-medium mb-1 text-left">{exp.company}</div>
          <div className="text-left pr-34">{exp.description}</div>
          {exp.details && exp.details.length > 0 && (
            <div className="mt-2">
              <DetailList details={exp.details} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ExperienceSection;
