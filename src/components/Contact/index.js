import "./style.css";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useState } from "react";
import { send } from "emailjs-com";
//import { init } from "@emailjs/browser";
//init(process.env.REACT_APP_USER_ID);

function Contact() {
  const [toSend, setToSend] = useState({
    name: "",
    topic: "",
    message: "",
    email: "",
  });

  const successMessage = "Votre message a bien été envoyé";
  const errorMessage =
    "Il y a eu un problème lors de l'envoi de votre message. Veuillez réessayer";

  const [messageStatus, setMessageStatus] = useState(false);
  const [sendingStatus, setSendingStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID,
    )
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
        setSendingStatus(true);
        setMessageStatus(true);
        setToSend({
          name: "",
          topic: "",
          message: "",
          from: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setSendingStatus(false);
        setMessageStatus(true);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <OverlayTrigger
      onHide={true}
      rootClose={true}
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned-bottom`} className="popover-form">
          <Popover.Header as="h3" className="contact-title">
            CONTACT
          </Popover.Header>
          <Popover.Body>
            <form className="contact-form" onSubmit={onSubmit}>
              <label htmlFor="name">Votre nom</label>
              <input
                name="name"
                type="text"
                value={toSend.name || ""}
                onChange={handleChange}
                required
              ></input>
              <label htmlFor="email">Votre email</label>
              <input
                type="email"
                name="email"
                value={toSend.email || ""}
                onChange={handleChange}
                required
              />
              <label htmlFor="topic">Sujet</label>
              <input
                name="topic"
                type="text"
                value={toSend.topic || ""}
                onChange={handleChange}
                required
              ></input>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows="8"
                cols="33"
                className="contact-message"
                value={toSend.message || ""}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Envoyer</button>
            </form>
            {messageStatus && (
              <div className="message-status">
                {sendingStatus ? successMessage : errorMessage}
              </div>
            )}
          </Popover.Body>
        </Popover>
      }
    >
      <button onClick={() => setMessageStatus(false)}>Contact</button>
    </OverlayTrigger>
  );
}

export default Contact;
