import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: 'General Enquiry',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Query Type *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="queryType"
                value="General Enquiry"
                checked={formData.queryType === 'General Enquiry'}
                onChange={handleChange}
              />
              General Enquiry
            </label>
            <label>
              <input
                type="radio"
                name="queryType"
                value="Support Request"
                checked={formData.queryType === 'Support Request'}
                onChange={handleChange}
              />
              Support Request
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            I consent to being contacted by the team *
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
