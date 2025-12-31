
import React from 'react';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">My Technical <span className="text-primary">Skills</span></h2>
          <p className="text-muted mx-auto" style={{maxWidth: '600px'}}>
            A comprehensive list of technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 skill-card rounded-4 transition">
                <div className="mb-3">
                  <i className={`${skill.icon}`}></i>
                </div>
                <h5 className="fw-bold mb-1">{skill.name}</h5>
                <span className="badge bg-light text-primary border border-primary-subtle rounded-pill small">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
