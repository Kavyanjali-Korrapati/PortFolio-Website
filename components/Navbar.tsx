
import React from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-custom py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#home">
          {PERSONAL_INFO.name.split(' ')[0]}<span className="text-primary">.</span>
        </a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.name}>
                <a className="nav-link fw-semibold px-lg-3" href={link.href}>{link.name}</a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a href="#contact" className="btn btn-primary rounded-pill px-4 fw-bold">Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
