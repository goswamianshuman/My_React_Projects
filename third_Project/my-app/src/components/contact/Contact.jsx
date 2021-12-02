import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { ThemeContext } from "../../context";

const Contact = () => {
  const form = useRef();
  const [done, Setdone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ic9c477",
        "template_hgdy9ko",
        form.current,
        "user_bwSFJf6mNkd3G77UGBDxw"
      )
      .then(
        (result) => {
          console.log(result.text);
          Setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <p className="c-desc">
            <b>What's your story?</b>
            Get in touch. Always ready to collaborate and work together. send me
            a response and feedback too. I would love to work together and learn something
            new while creating new projects and stuff.
          </p>
          <p className="c-thankyou">
            <h1> Thankyou For Visiting.</h1>
            </p>

          <form ref={form} onSubmit={sendEmail}>
            <input
              style={{
                background: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                background: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                background: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                background: darkMode && "#333",
                color: darkMode && "white",
              }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button className="f-button">Submit</button>
            <div className="done-msg">{done && "Message Sent ThankYou!"}</div>
          </form>
        </div>
        <div className="c-right">
          <h1 className="c-title">Lets discuss the project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="./images/phone.png" alt="" className="c-icon" />
              +91 7987296658
            </div>

            <div className="c-info-item">
              <img src="./images/email.png" alt="" className="c-icon" />
              anshumangoswami07@gmail.com
            </div>
            <div className="c-info-item">
              <img src="./images/location.png" alt="" className="c-icon" />
              Indore, MadhyaPradesh, 452010 India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
