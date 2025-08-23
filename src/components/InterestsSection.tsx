import React from 'react';
import { useTranslation } from 'react-i18next';

const InterestsSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="interests" className="flex mt-24 mb-12 mr-10 min-h-screen" aria-labelledby="interests-title">
      <div className='my-auto'>
      <h2 id="interests-title" className="pt-20 custom-header text-5xl font-bold uppercase tracking-wide mb-20 text-left">{t('interests')}</h2>
      <p>{t('interestsText')}</p>
      </div>
    </section>
  );
};

export default InterestsSection;
