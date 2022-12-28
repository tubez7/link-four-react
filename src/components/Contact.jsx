export default function Contact() {
  return (
    <section className="contact-block">
      <h2>Contact</h2>
      <address>
        <p>email: richardjblack7@gmail.com</p>
        <form className="email-form">
          <fieldset>
            <label>Send me a msg:</label>
            <textarea></textarea>
            <button disabled={true}>Submit</button>
          </fieldset>
        </form>
      </address>
    </section>
  );
}
