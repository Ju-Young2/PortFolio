import React from 'react';
import SkillBar from '../ui/SkillBar';
import { skillsData } from '../../data/skills';
import '../../styles/components/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">기술 스택</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">
                <i className={category.icon}></i>
                {category.name}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    delay={skillIndex * 0.1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;