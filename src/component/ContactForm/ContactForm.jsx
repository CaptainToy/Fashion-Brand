import React from "react";
import "./ContactForm.css"; 

export default function ContactForm() {
  return (
    <div className="form-container">
          <h1 className="form-design">
            DESIGN <br /><span className="form-deshighlight">THOUGHTS</span>
            </h1>
      <form className="contact-form">
        <div className="form-group-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your@email.com" />
          </div>
        </div>

        <div className="form-group">
          <label>Budget</label>
          <select>
            <option>Select...</option>
            <option>Less than $500</option>
            <option>$500 - $1000</option>
            <option>$1000 - $5000</option>
            <option>$5000+</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Message" rows="4"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
