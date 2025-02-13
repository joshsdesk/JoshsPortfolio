import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted! (Replace with actual functionality)");
    }
  };

  return (
    <section className="contact">
      <h1 className="page-title">Contact</h1>
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}

            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Social Media Buttons */}
        <div className="social-media">
          <ul>
            <li>
              <a href="https://github.com/JoshsDesk" className="btn-social github" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourprofile" className="btn-social linkedin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
