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
  const [ProjectsList] = useState([
    {
      name: 'Budget Tracker',
      category: 'Mobile PWA',
      description: 'Users can track budget and expenses while on the go!',
      deployedLink: 'https://on-budget-01.herokuapp.com/',
      repo: 'https://github.com/crosenfrisk/on-budget'
    },
    {
      name: 'express-yourself',
      category: 'CMS Fullstack Website',
      description: 'Users create a profile that allows them to write, edit, and delete posts and comments.',
      deployedLink: 'https://express-yourself-01.herokuapp.com/',
      repo: 'https://github.com/crosenfrisk/express-yourself'
    },
    {
      name: 'NoSQL Social Media API',
      category: 'Back-end',
      description: 'Users can share their thoughts, create a friend\'s list, and react to friend\'s thoughts.',
      deployedLink: 'https://drive.google.com/file/d/1Syb-fJ8CSP1-D3PGfvBr45s7s2U1I4Hm/view',
      repo: 'https://github.com/crosenfrisk/NoSQL-Social-Network-API'
    },
    {
      name: 'Popcorn!',
      category: 'Web Application',
      description: 'Users choose a movie or a genre to watch, or add to a watchlist for later viewing.',
      deployedLink: 'https://crosenfrisk.github.io/Popcorn/',
      repo: 'https://github.com/crosenfrisk/Popcorn'
    },
    {
      name: 'Run Buddy',
      category: 'Website',
      description: 'Client website that offers fitness training services.',
      deployedLink: 'https://crosenfrisk.github.io/Run-Buddy-2.0/',
      repo: 'https://github.com/crosenfrisk/Run-Buddy-2.0'
    },
    {
      name: 'Weather Dashboard',
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