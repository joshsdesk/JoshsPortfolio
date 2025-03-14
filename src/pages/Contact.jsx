import React, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 🌐 Formspree endpoint (replace YOUR_FORM_ID with real Formspree ID)
      const formspreeEndpoint = "https://formspree.io/f/xyzeyrep";

      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form", error);
        alert("Error sending message.");
      }
    }
  };

  return (
    <section id="contact" className="page-section contact">
      <h1 className="page-title">Contact</h1>
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-card">
          <h2>Get in Touch</h2>
          {formSuccess && <p className="success-msg">Thank you! Your message has been sent.</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Your Name"
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Your Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Your Message"
            />
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit" className="btn submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Buttons */}
        <div className="social-media">
          <ul>
            <li>
              <a
                href="https://github.com/JoshsDesk"
                className="btn-social github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/josh-bourassa-375a3948/"
                className="btn-social linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
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
