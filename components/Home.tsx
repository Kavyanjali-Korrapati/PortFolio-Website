
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Home = () => {
  return (
    <header id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 animate-up">
            <div className="d-inline-flex align-items-center gap-2 bg-white px-3 py-2 rounded-pill shadow-sm mb-4">
              <span className="status-dot"></span>
              <span className="fw-bold small text-uppercase tracking-wider">Open for Work</span>
            </div>
            <h1 className="display-2 fw-800 mb-4 lh-sm">
              Crafting <span className="text-gradient">Scalable</span> <br />
              MERN Applications.
            </h1>
            <p className="lead text-muted mb-5 pe-lg-5 fs-4">
              I'm {PERSONAL_INFO.name}, a {PERSONAL_INFO.role} based in {PERSONAL_INFO.location}. 
              I specialize in building performant interfaces and robust backends.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-2">
              <a href="#projects" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-lg">
                View Work <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
              <a href={PERSONAL_INFO.resumeUrl} className="btn btn-outline-dark btn-lg rounded-pill px-5 fw-bold">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
