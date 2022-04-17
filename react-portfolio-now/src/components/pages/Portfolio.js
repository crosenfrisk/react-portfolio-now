// import React from 'react';
// // import ProjectsList from '../ProjectsList';
// import { capitalizeFirstLetter } from '../../utils/helpers';

// function Portfolio(props) {
//   const { currentCategory } = props;
//   return (
//     <section>
//       <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <p>{currentCategory.description}</p>
//       {/* <ProjectsList category={currentCategory.name} /> */}
//     </section>
//   );
// }
// export default Portfolio;

import React, { useState } from 'react';

const Portfolio = ({ category }) => {

  const budgetTracker = require('../../assets/screenshots/0.png');
  const expressYourself = require('../../assets/screenshots/1.png');
  const noSQL = require('../../assets/screenshots/2.png');
  const popcorn = require('../../assets/screenshots/3.png');
  const runBuddy = require('../../assets/screenshots/4.png');
  const weatherDash = require('../../assets/screenshots/5.png');

  const [ProjectsList] = useState([
    {
      name: 'Budget Tracker',
      image: budgetTracker,
      technologies: 'IndexedDB, Manifest.json, Service Workers, Heroku, MongoDB Atlas',
      category: 'Mobile PWA',
      description: 'Users can track budget and expenses while on the go!',
      deployedLink: 'https://on-budget-01.herokuapp.com/',
      repo: 'https://github.com/crosenfrisk/on-budget'
    },
    {
      name: 'express-yourself',
      image: expressYourself,
      technologies: 'Express.js, MySQL, Handlebars.js',
      category: 'CMS Fullstack Website',
      description: 'Users create a profile that allows them to write, edit, and delete posts and comments.',
      deployedLink: 'https://express-yourself-01.herokuapp.com/',
      repo: 'https://github.com/crosenfrisk/express-yourself'
    },
    {
      name: 'NoSQL Social Media API',
      image: noSQL,
      technologies: 'Express.js, Mongoose, MongoDB Atlas, Insomnia',
      category: 'Back-end',
      description: 'Users can share their thoughts, create a friend\'s list, and react to friend\'s thoughts.',
      deployedLink: 'https://drive.google.com/file/d/1Syb-fJ8CSP1-D3PGfvBr45s7s2U1I4Hm/view',
      repo: 'https://github.com/crosenfrisk/NoSQL-Social-Network-API'
    },
    {
      name: 'Popcorn!',
      image: popcorn,
      technologies: 'fetch API, Bulma',
      category: 'Web Application',
      description: 'Users choose a movie or a genre to watch, or add to a watchlist for later viewing.',
      deployedLink: 'https://crosenfrisk.github.io/Popcorn/',
      repo: 'https://github.com/crosenfrisk/Popcorn'
    },
    {
      name: 'Run Buddy',
      image: runBuddy,
      technologies: 'HTML, Vanilla CSS',
      category: 'Website',
      description: 'Client website that offers fitness training services.',
      deployedLink: 'https://crosenfrisk.github.io/Run-Buddy-2.0/',
      repo: 'https://github.com/crosenfrisk/Run-Buddy-2.0'
    },
    {
      name: 'Weather Dashboard',
      image: weatherDash,
      technologies: 'Local Storage, fetch API',
      category: 'Web Application',
      description: 'Users can view weather based on city input.',
      deployedLink: 'https://crosenfrisk.github.io/weather-dashboard/',
      repo: 'https://github.com/crosenfrisk/weather-dashboard'
    }
  ]);

  const currentProject = ProjectsList.filter(project => project.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentProject.map((image, i) => (
          <img
            src={require(`../../assets/screenshots/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;