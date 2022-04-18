import React from "react";

function Resume() {
  // add resume
  return (
    <section id="resume-section">
      <h2>Fullstack Developer</h2>
      <h3>Current Proficiencies</h3>

      <div>
        <h4>Programming Languages</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>JSON</li>
        </ul>
      </div>

      <div>
        <h4>APIs</h4>
        <ul>
          <li>REST APIs</li>
          <li>Third Party APIs</li>
          <li>Web APIs</li>
        </ul>
      </div>

      <div>
        <h4>Databases</h4>
        <ul>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>SQL</li>
        </ul>
      </div>

      <div>
        <h4>Environments, Libraries, and Frameworks</h4>
        <ul>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>jQuery</li>
          <li>Node.js</li>
          <li>React.js</li>
        </ul>
      </div>

      <div>
        <h4>ORM | Object Relational Mappers</h4>
        <ul>
          <li>Mongoose</li>
          <li>Sequelize</li>
        </ul>
      </div>

      <div>
        <h4>Additional Technologies</h4>
        <ul>
          <li>Bulma - An open source framework, comparative to Bootstrap. </li>
          <li>
            Heroku - A complete development and deployment environment for
            online applications.
          </li>
        </ul>
      </div>

      <div>
        <p id="resume-link">
          Download my full resume
          <em>
            <a href="https://bit.ly/3vmKanT" target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </em>
        </p>
      </div>
    </section>
  );
}

export default Resume;
