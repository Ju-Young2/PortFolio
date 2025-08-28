// import React, { useState } from 'react';
import LabCard from '../components/ui/LabCard';
import { labsData } from '../data/labs';

const LabsPage = () => {

  return (
    <div className="page projects-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">실험실</h1>
          
          <div className="projects-grid">
            {labsData.map((lab, index) => (
              <LabCard
                key={lab.id}
                lab={lab}
                delay={index * 0.1}
              />
            ))}
          </div>


        </div>
      </section>
    </div>
  );
};

export default LabsPage;