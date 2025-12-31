
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 order-lg-2">
            <div className="position-relative p-5 bg-light rounded-5 border border-dashed border-primary border-2 text-center">
              <div className="mb-4">
                <i className="fa-solid fa-code-merge text-primary display-1 opacity-25"></i>
              </div>
              <h3 className="fw-bold text-dark">Modern Foundations</h3>
              <p className="text-muted small mb-4">Focusing on modern best practices and clean, maintainable code architectures from day one.</p>
              
              <div className="d-flex flex-column gap-2 text-start">
                <div className="bg-white p-3 rounded-4 shadow-sm border-start border-primary border-4">
                  <h6 className="fw-bold mb-1">Rapid Growth Mindset</h6>
                  <p className="small text-muted mb-0">Committed to mastering the evolving MERN ecosystem.</p>
                </div>
                <div className="bg-white p-3 rounded-4 shadow-sm border-start border-accent border-4">
                  <h6 className="fw-bold mb-1">Lifelong Learner</h6>
                  <p className="small text-muted mb-0">Consistently exploring new tools and methodologies.</p>
                </div>
              </div>

              <div className="position-absolute top-0 start-50 translate-middle badge bg-primary rounded-pill px-4 py-2 shadow-lg border border-white border-2">
                <span className="fw-bold">Ready to Contribute</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7 order-lg-1">
            <h6 className="text-primary fw-bold text-uppercase mb-3">About Me</h6>
            <h2 className="display-5 fw-bold mb-4">Passionate About Building the <span className="text-gradient">Future.</span></h2>
            <p className="lead text-muted mb-4">{PERSONAL_INFO.bio}</p>
            <p className="text-muted mb-5">
              As a developer early in my career, I bring a fresh perspective and a high degree of adaptability. 
              I am dedicated to writing readable code and staying at the forefront of the React and Node.js communities.
            </p>
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="p-3 border rounded-4 bg-white shadow-sm hover-up transition">
                  <span className="text-muted small d-block mb-1">EMAIL</span>
                  <span className="fw-bold">{PERSONAL_INFO.email}</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-3 border rounded-4 bg-white shadow-sm hover-up transition">
                  <span className="text-muted small d-block mb-1">LOCATION</span>
                  <span className="fw-bold">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
