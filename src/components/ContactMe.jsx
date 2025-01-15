import React, { useRef } from "react";
import "../style.css";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_A7328",
        "template_4i7vjif", 
        form.current,
        "fXT2oO43dC2RXoABx" 
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito");
          form.current.reset(); 
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          alert("Hubo un problema al enviar el mensaje.");
        }
      );
  };

  return (
    <section className="contactme__section" id="contact">
      <div className="principal">
        <div className="contactme__form-container">
          <form ref={form} onSubmit={sendEmail} className="contactme__form">
            <div className="contactme__input-container">
              <div className="contactme__input-group">
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="last_name" placeholder="Last Name" required />
              </div>
              <div className="contactme__input-email">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="contactme__input-phone">
                <input type="text" name="phone" placeholder="Phone" />
              </div>
              <div className="contactme__input-message">
                <textarea name="message" placeholder="Message" required></textarea>
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
            <p>
              Let's get in touch if you are interested in a project creation,
              maintenance or you want to take your business to the next level
            </p>
          </div>
          <div className="contactme_info-containerExtras">
            <div className="extras_group">
              <img src="../header_icons/email_icon.svg" alt="" width={20} height={20} />
              <p>dxniel7328@gmail.com</p>
            </div>
            <div className="extras_group">
              <img src="../header_icons/telephone.png" alt="" width={20} height={20} />
              <p>+57 317-310-9595</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
