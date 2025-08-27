import React from 'react';
import Skills from '../components/sections/Skills';
// certificatesData는 Skills 컴포넌트 내부에서 import하므로 여기서는 제거

const SkillsPage = () => {
  return (
    <div className="page skills-page">
      <Skills />
    </div>
  );
};

export default SkillsPage;