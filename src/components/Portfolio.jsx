export default function Portfolio() {
  return (
    <section className="portfolio-block">
      <h2>Portfolio</h2>
      <a href="https://tremolo-project.netlify.app" target="_blank" rel="noreferrer noopener external" >
      <h3>Tremolo</h3>
      </a>
      <p>As part of my team for the Northcoders bootcamp project phase, I created an app that enables musicians to network via geolocation and post classified ads for collaborating.  The front-end architecture was built using Svelte, hosted as a Progressive Web Application, and integrated with Firebase for the database and user authentication implementation.</p>
      <a href="https://richard-nc-news.netlify.app" target="_blank" rel="noreferrer noopener external" >
      <h3>NC News</h3>
      </a>
      <p>For my Northcoders front-end project I built a mobile first designed front-end architecture that acts as a news app to serve news articles via integration with the back-end project news API. Built using React, CSS HTML5, and Material UI.</p>
      <a href="https://nc-news-api.cyclic.app/api" target="_blank" rel="noreferrer noopener external" >
      <h3>NC News API</h3>
      </a>
      <p>For my Northcoders back-end project I built a RESTful API to interact with a PostgreSQL database, incorporating MVC programming principles in order to provide data to the front-end news app project. Built with Express and using full TDD incorporating Jest.</p>
      <a href="https://github.com/tubez7" target="_blank" rel="noreferrer noopener external" >
      <h3>Github</h3>
      </a>
      <p>My personal github profile.</p>
    </section>
  );
}
