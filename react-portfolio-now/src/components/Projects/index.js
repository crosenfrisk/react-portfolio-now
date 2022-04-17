// import React, { useState } from 'react';

// const PhotoList = ({ category }) => {
//   const [photos] = useState([
//     {
//       name: 'Budget Tracker',
//       category: 'Mobile PWA',
//       description: 'Users can track budget and expenses while on the go!'
//     },
//     {
//       name: 'express-yourself',
//       category: 'CMS Fullstack Website',
//       description: 'Users create a profile that allows them to write, edit, and delete posts and comments.'
//     },
//     {
//       name: 'NoSQL Social Media API',
//       category: 'Back-end',
//       description: 'Users can share their thoughts, create a friend's list, and react to friend's thoughts.'
//     },
//     {
//       name: 'Popcorn!',
//       category: 'Application',
//       description: 'Users choose a movie or a genre to watch, or add to a watchlist for later viewing.'
//     },
//     {
//       name: 'Run Buddy',
//       category: 'Website',
//       description: 'Client website.'
//     },
//     {
//       name: 'Weather Dashboard',
//       category: 'Application',
//       description: 'Users can view weather based on city input.'
//     }
//   ]);

//   const currentPhotos = photos.filter(photo => photo.category === category);

//   return (
//     <div>
//       <div className="flex-row">
//         {currentPhotos.map((image, i) => (
//           <img
//             src={require(`../../assets/small/${category}/${i}.jpg`).default}
//             alt={image.name}
//             className="img-thumbnail mx-1"
//             key={image.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoList;