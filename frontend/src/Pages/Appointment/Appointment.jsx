import React, { useState } from 'react';
import './Appointment.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    type: '',
    fullName: '',
    email: '',
    phone: '',
    dateTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can later send this to a backend using fetch/axios here
    alert('Appointment requested successfully!');
  };

  return (
    <div className="appointment-container">
      <h2>Request New Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>
          Subject*
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        </label>

        <label>
          Description*
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>

        <label>
          Appointment Type
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="">Non selected</option>
            <option value="Consultation">Consultation</option>
            <option value="Follow-up">Follow-up</option>
          </select>
        </label>

        <label>
          Your full name*
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>

        <label>
          Your email*
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Phone (Ex: +1 69 1234 5678)*
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Date / Time*
          <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
        </label>

        <div className="button-group">
          <button type="button" className="available-btn">Available Hours</button>
          <button type="button" className="busy-btn">Busy Hours</button>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
