

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fceabb, #f8b500)",
        padding: "20px",
      }}
    >
      <div
        className="card shadow-lg p-4 rounded-4"
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "#fff9f0",
          animation: "floatUp 0.7s ease-out",
        }}
      >
        <style>
          {`
            @keyframes floatUp {
              0% { transform: translateY(25px); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
          `}
        </style>

        <h2 className="text-center mb-4 fw-bold" style={{ color: "#b5651d" }}>
          📩 Contact Us
        </h2>

        {submitted && (
          <div className="alert alert-success text-center fw-semibold shadow-sm">
            Thank you! Your message has been sent.
          </div>
        )}

        <div className="row">
          {/* FORM LEFT SIDE */}
          <div className="col-md-6 p-3">
            <form onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <div className="input-group shadow-sm rounded-3">
                  <span className="input-group-text bg-warning bg-opacity-25">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <div className="input-group shadow-sm rounded-3">
                  <span className="input-group-text bg-warning bg-opacity-25">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <div className="input-group shadow-sm rounded-3">
                  <span className="input-group-text bg-warning bg-opacity-25">
                    <FaCommentDots />
                  </span>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              {/* BUTTON */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn px-4 py-2 fw-bold rounded-3 shadow-sm"
                  style={{
                    backgroundColor: "#ff9800",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  Send Message 🚀
                </button>
              </div>
            </form>

            {/* Social Media Icons */}
            <div className="text-center mt-4">
              <h5 className="fw-semibold" style={{ color: "#b5651d" }}>Follow Us</h5>
              <div className="d-flex justify-content-center gap-4 fs-3 mt-2">
                <a href="#" className="text-primary">
                  <FaFacebook />
                </a>
                <a href="#" className="text-danger">
                  <FaInstagram />
                </a>
                <a href="#" className="text-info">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* MAP RIGHT SIDE */}
          <div className="col-md-6 p-3">
            <h5 className="fw-semibold mb-3" style={{ color: "#b5651d" }}>
              📍 Our Location
            </h5>

            <div className="shadow-sm rounded-4 overflow-hidden" style={{ height: "350px" }}>
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2296815225073!2d78.38535657406123!3d17.439192483442775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e2fa1b2e47%3A0x3ec3b1c0a2c79144!2sHyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-4">
              <p className="fw-semibold">
                📞 Phone: <span className="text-dark">+91 9876543210</span>
              </p>
              <p className="fw-semibold">
                🕒 Hours: <span className="text-dark">9 AM – 9 PM</span>
              </p>
              <p className="fw-semibold">
                📬 Email: <span className="text-dark">support@foodzone.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
