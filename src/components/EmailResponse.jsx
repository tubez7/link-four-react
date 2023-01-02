export default function EmailResponse({ setSuccess, success, setFail, fail }) {
  const handleSuccessClose = (e) => {
    e.preventDefault();
    setSuccess(false);
  };

  const handleFailClose = (e) => {
    e.preventDefault();
    setFail(false);
  };

  return (
    <>
      {success && (
        <div className="contact-success-popup">
          <p>Message sent!</p>
          <button onClick={handleSuccessClose}>x</button>
        </div>
      )}
      {fail && (
        <div className="contact-fail-popup">
          <p>
            There was a problem sending your message. Please try again later.
          </p>
          <button onClick={handleFailClose}>x</button>
        </div>
      )}
    </>
  );
}
