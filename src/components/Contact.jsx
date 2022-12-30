export default function Contact() {
  return (
    <section className="contact-block">
      <h2>Contact</h2>
      <address>
      <p>email: <a href="mailto:richardjblack7@gmail.com">richardjblack7@gmail.com</a></p>
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
