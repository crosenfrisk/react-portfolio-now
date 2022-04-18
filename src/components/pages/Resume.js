import React from "react";

function Resume() {
  return (

    <section className="resume-section">

      <div id="resume-title">
        <h2>
          Full Stack Developer</h2>
      </div>

      <div id="resume-link">
        <p>
          <em>
            <a
              href="https://bit.ly/3vmKanT"
              target="_blank"
              rel="noopener noreferrer"
            > Download my resume here.
            </a>
          </em>
        </p>
      </div>

      <div id="resume-subtitle">
        <h3>
            Current Proficiencies
        </h3>
      </div>

      <div id="resume-div">
        <h4>Programming Languages</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>JSON</li>
        </ul>
      </div>

      <div id="resume-div">
        <h4>APIs</h4>
        <ul>
          <li>REST APIs</li>
          <li>Third Party APIs</li>
          <li>Web APIs</li>
        </ul>
      </div>

      <div id="resume-div">
        <h4>Databases</h4>
        <ul>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>SQL</li>
        </ul>
      </div>

      <div id="resume-div">
        <h4>Environments, Libraries, and Frameworks</h4>
        <ul>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>jQuery</li>
          <li>Node.js</li>
          <li>React.js</li>
        </ul>
      </div>

      <div id="resume-div">
        <h4>ORM | Object Relational Mappers</h4>
        <ul>
          <li>Mongoose</li>
          <li>Sequelize</li>
        </ul>
      </div>

      <div id="resume-div">
        <h4>Additional Technologies</h4>
        <ul>
          <li>Bulma</li>
          <li>
            Heroku
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
