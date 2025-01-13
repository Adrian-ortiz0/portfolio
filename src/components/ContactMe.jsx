import React from "react";
import "../style.css";
export const ContactMe = () => {
  return (
    <section className="contactme__section" id="contact">
      <div className="principal">
      <div className="contactme__form-container">
        <form action="" className="contactme__form">
          <div className="contactme__input-container">
            <div className="contactme__input-group">
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="last_name" placeholder="Last Name" />
            </div>
            <div className="contactme__input-email">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="contactme__input-phone">
              <input type="phone" name="phone" placeholder="Phone" />
            </div>
            <div className="contactme__input-message">
              <textarea name="message"></textarea>
            </div>
            <div className="contactme__input-submit">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
      <div className="contactme__info-container">
        <div className="contactme_info-containerText">
          <h2>GET IN TOUCH</h2>
          <p>Let's get in touch if you are interested in a project creatiom, maintenance or you want to take your business to the next level</p>
        </div>
        <div className="contactme_info-containerExtras">
          <div className="extras_group">
            <img src="../header_icons/email_icon.svg" alt="" width={20} height={20}/>
            <p>dxniel7328@gmail.com</p>
          </div>
          <div className="extras_group">
            <img src="../header_icons/telephone.png" alt="" width={20} height={20}/>
            <p>+57 317-310-9595</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
