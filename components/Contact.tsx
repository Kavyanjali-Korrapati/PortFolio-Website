
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container py-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
              <div className="row g-0">
                <div className="col-lg-5 bg-dark text-white p-5 d-flex flex-column justify-content-between">
                  <div>
                    <h2 className="display-5 fw-bold mb-4">Let's <span className="text-primary">Talk.</span></h2>
                    <p className="text-white-50 mb-5">
                      I'm currently available for freelance work and full-time positions. Reach out and I'll get back to you within 24 hours.
                    </p>
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                          <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                          <p className="small text-white-50 mb-0">Email Me</p>
                          <p className="fw-bold mb-0">{PERSONAL_INFO.email}</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                          <p className="small text-white-50 mb-0">Location</p>
                          <p className="fw-bold mb-0">{PERSONAL_INFO.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 p-5 bg-white">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label fw-bold small text-muted">YOUR NAME</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg bg-light border-0 px-4 rounded-3" 
                        placeholder="Leo Sterling"
                        required 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-bold small text-muted">EMAIL ADDRESS</label>
                      <input 
                        type="email" 
                        className="form-control form-control-lg bg-light border-0 px-4 rounded-3" 
                        placeholder="leo@sterling.dev"
                        required 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="mb-5">
                      <label className="form-label fw-bold small text-muted">MESSAGE</label>
                      <textarea 
                        className="form-control form-control-lg bg-light border-0 px-4 rounded-3" 
                        rows={4}
                        placeholder="Describe your project ideas..."
                        required 
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg rounded-pill px-5 fw-bold w-100 shadow-sm"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && (
                      <div className="alert alert-success mt-4 border-0 rounded-4" role="alert">
                        <i className="fa-solid fa-circle-check me-2"></i> Your message has been sent successfully!
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
