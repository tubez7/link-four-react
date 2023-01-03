import emailjs from "@emailjs/browser";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import { useState } from "react";
import EmailResponse from "./EmailResponse";

export default function Contact({
  message,
  setMessage,
  firstName,
  setFirstName,
  surname,
  setSurname,
  email,
  setEmail,
}) {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const templateParams = {
    firstName,
    surname,
    email,
    message,
  };

  const handleNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEMailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (e) => {
    if (e.target.value.length < 1) {
      setInvalidEmail(false);
    } else if (!regex.test(e.target.value)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
  };

  const handleMsgChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_qdkojyi",
        "contact_form",
        templateParams,
        "s3ArIuTGr2qWNR5hi"
      )
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setFail(true);
      });
    setMessage("");
  };

  const disabled = () => {
    if (
      message.length < 1 ||
      firstName.length < 1 ||
      surname.length < 1 ||
      invalidEmail
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <section className="contact-block">
      <h2>Contact</h2>
      <address>
        <p>
          email:{" "}
          <a href="mailto:richardjblack7@gmail.com">richardjblack7@gmail.com</a>
        </p>
        <form className="contact-form" id="contact">
          <fieldset>
            <p>
              Send me a message
              <br />
              (* Denotes required field)
            </p>
            <label htmlFor="first-name">First name*</label>
            <br />
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="Your name..."
              onChange={handleNameChange}
            />
            <br />
            <label htmlFor="surname">Surname*</label>
            <br />
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Your surname..."
              onChange={handleSurnameChange}
            />
            <br />
            <label htmlFor="mail">{"Email (optional)"}</label>
            <br />
            {invalidEmail && (
              <p className="email-verify-alert">
                Please enter a correctly formatted email address, or leave this
                field blank
              </p>
            )}
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="Your email address..."
              onBlur={validateEmail}
              onChange={handleEMailChange}
            />
            <br />
            <label htmlFor="message">Your message*</label>
            <br />
            <TextareaAutosize
              className="message-box"
              id="message"
              name="contact"
              form="contact"
              placeholder="Your message..."
              minRows={4}
              onChange={handleMsgChange}
              value={message}
            />
            <br />
            <button onClick={handleSend} disabled={disabled()}>
              Send
            </button>
          </fieldset>
        </form>
      </address>
      {(success || fail) && (
        <EmailResponse
          setSuccess={setSuccess}
          success={success}
          setFail={setFail}
          fail={fail}
        />
      )}
    </section>
  );
}
