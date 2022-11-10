import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import handshake from "../../img/shake.svg";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_a92bq4t",
        "template_g4mhqtl",
        form.current,
        "UvNVTKbAeQ1MqPhml"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={handshake} alt="handshake" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" id="name" name="from_name" placeholder="Name" />
          <input type="email" id="email" name="from_email" placeholder="Email" />
          <textarea placeholder="Message" name="message" id="message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>
              Thank you. I will respond to your message as soon as I can!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
