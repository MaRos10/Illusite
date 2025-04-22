import React, { useState } from "react";
import "../styles/contact.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call to send form data
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Ditt meddelande har skickats!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-form" role="form">
        <h2>Kontakta oss</h2>
        {successMessage && (
          <div className="success-message" role="status">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Förnamn Efternamn"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="dinmail@mail.se"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Meddelande</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Skickar..." : "Skicka meddelande"}
          </button>
        </form>
      </div>
    </div>
  );
}
