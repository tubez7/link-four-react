import emailjs from "@emailjs/browser";

export default function Contact({
  message,
  setMessage,
  firstname,
  setFirstName,
  surname,
  setSurname,
  email,
  setEmail,
}) {
  const templateParams = {
    firstname,
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
      .then((res) => {
        console.log("SUCCESS", res.text);
      })
      .catch((err) => {
        console.log("FAILED", err.text);
      });
    setMessage("");
  };

  const disabled = () => {
    if (message.length < 1 || firstname.length < 1 || surname.length < 1) {
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
        <form className="email-form" id="contact">
          <fieldset>
            <p>Send me a message</p>
            <label htmlFor="fname">First name</label>
            <br />
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name..."
              onChange={handleNameChange}
            />
            <br />
            <label htmlFor="sname">Surname</label>
            <br />
            <input
              type="text"
              id="sname"
              name="surname"
              placeholder="Your surname..."
              onChange={handleSurnameChange}
            />
            <br />
            <label htmlFor="mail">{"Email (optional)"}</label>
            <br />
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="Your email address..."
              onChange={handleEMailChange}
            />
            <br />
            <label htmlFor="message">Your message</label>
            <br />
            <textarea
              id="message"
              name="contact"
              form="contact"
              placeholder="Your message..."
              onChange={handleMsgChange}
              value={message}
            ></textarea>
            <br />
            <button onClick={handleSend} disabled={disabled()}>
              Send
            </button>
          </fieldset>
        </form>
      </address>
    </section>
  );
}
