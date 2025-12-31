
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectIcon = ({ id }: { id: number }) => {
  const icons = [
    { icon: 'fa-cart-shopping', color: '#6366f1' },
    { icon: 'fa-chart-pie', color: '#a855f7' },
    { icon: 'fa-list-check', color: '#10b981' }
  ];
  const item = icons[(id - 1) % icons.length];
  return (
    <div className="d-flex align-items-center justify-content-center h-100 w-100" style={{ backgroundColor: `${item.color}10`, color: item.color }}>
      <i className={`fa-solid ${item.icon} display-3`}></i>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container py-lg-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div>
            <h2 className="display-6 fw-bold mb-0">Building & <span className="text-primary">Learning</span></h2>
            <p className="text-muted mb-0 mt-2">A selection of projects demonstrating my growth and technical foundation.</p>
          </div>
          <a href={PROJECTS[0].github} className="btn btn-link text-primary fw-bold text-decoration-none p-0">
            Github Repositories <i className="fa-solid fa-chevron-right ms-1 small"></i>
          </a>
        </div>
        <div className="row g-4">
          {PROJECTS.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-5 overflow-hidden project-card border border-light">
                <div style={{height: '200px'}}>
                  <ProjectIcon id={project.id} />
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map(t => (
                      <span key={t} className="badge bg-light text-muted border py-1 px-2 fw-medium">{t}</span>
                    ))}
                  </div>
                  <h4 className="card-title fw-bold">{project.title}</h4>
                  <p className="card-text text-muted mb-4 small flex-grow-1">{project.description}</p>
                  <div className="mt-auto pt-3 d-flex gap-3">
                    <a href={project.github} className="btn btn-dark btn-sm rounded-pill px-3 fw-bold flex-grow-1 py-2" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github me-1"></i> Source
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-bold flex-grow-1 py-2" target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
