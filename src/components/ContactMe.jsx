import React from "react";
import "../style.css";
export const ContactMe = () => {
  return (
    <section className="contactme__section">
      <div className="contactme__form-container">
        <div>
          <h2>GET IN TOUCH</h2>
        </div>
        <form action="" className="contactme__form">
          <div className="contactme__input-container">
            <div className="contactme__input-group">
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="last_name" placeholder="Last Name" />
            </div>
            <div className="contactme__input-email">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="contactme__input-message">
              <textarea name="message"></textarea>
            </div>
            <div className="contactme__input-submit">
              <button type="submit">SEND</button>
            </div>
          </div>
        </form>
      </div>
      <div className="contactme__logo-container">
        <img src="public/mi_logo.svg" alt="" />
      </div>
    </section>
  );
};
