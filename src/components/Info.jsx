export default function Info(props) {
  console.log("props", props);
  return (
    <div className="info-block">
      <section className="about-dev">
        <h2>Meet The Developer</h2>
        <p>
          Hi! Thanks for stopping by to check out my app! I'm a full stack
          developer who graduated from the Northcoders full-stack JavaScript
          bootcamp in April 2022.
          <br />
          <br />
          This app was built to practise building apps with React as well as
          building attractive UI/UX designs utilising pure CSS. I've borrowed
          icons and colour schemes from my own band's branding to give it a
          unified theme, with the idea being that the icons and colour pallettes
          can easily be swapped out and re-skinned to suit the branding for
          other organisations or personal preferences I choose.
          <br />
          <br />I hope you enjoy using the app as much as I enjoyed building it
          and thanks again for stopping by!
        </p>
      </section>
      <section className="portfolio-block">
        <h2>Portfolio</h2>
        <h3>Tremolo</h3>
        <p>Some stuff about the app</p>
        <h3>NC News</h3>
        <p>Some more stuff</p>
        <h3>NC News API</h3>
        <p>Some more nonsense</p>
        <h3>Github</h3>
        <p>My github profile</p>
      </section>
      <section className="contact-block">
        <h2>Contact</h2>
        <address>
          <p>email: richardjblack7@gmail.com</p>
          <form className="email-form">
            <fieldset>
              <legend>Contact Me:</legend>
              <textarea></textarea>
              <button disabled={true}>Submit</button>
            </fieldset>
          </form>
        </address>
      </section>
      <section className="links-block">
        <h2>Links</h2>
        <h3>Shaun Gambowl Walsh & The Plagiarists</h3>
        <p>My band's website. Download our tunes and watch our videos</p>
        <h3>We Want Less! on Twitch</h3>
        <p>My band's Twitch channel. Run and maintained by myself</p>
        <h3>SGW&TP on YouTube</h3>
        <p>My band's YouTube channel</p>
        <h3>Waiting For Tubes</h3>
        <p>My personal Twitch channel</p>
      </section>
    </div>
  );
}
