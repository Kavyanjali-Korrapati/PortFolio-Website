
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="py-5 bg-white border-top mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h5 className="fw-bold mb-1">{PERSONAL_INFO.name.toUpperCase()}</h5>
            <p className="text-muted small mb-0">Crafting high-quality software solutions.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              <a href={PERSONAL_INFO.socials.github} className="btn btn-outline-dark btn-sm rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '36px', height: '36px'}} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} className="btn btn-outline-dark btn-sm rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '36px', height: '36px'}} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href={PERSONAL_INFO.socials.twitter} className="btn btn-outline-dark btn-sm rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '36px', height: '36px'}} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <p className="text-muted small mb-0">
              &copy; {new Date().getFullYear()} All Rights Reserved. Built with React & Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
