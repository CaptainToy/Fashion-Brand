import React, { useState } from "react";
import Swal from "sweetalert2";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form Data:", formData);

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", "8ab6f305-eefb-492a-ab31-82f8466f99ea");
      formPayload.append("Full Name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);

      // Send data to API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        // Success alert
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent.",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
        });

        // Clear form after success
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      // Error alert
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Try again later.",
        icon: "error",
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-design">
        DESIGN <br />
        <span className="form-deshighlight">THOUGHTS</span>
      </h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
