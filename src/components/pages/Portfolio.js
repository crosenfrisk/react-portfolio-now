import React from "react";
import Projects from "../Projects";

const Portfolio = () => {
  const budgetTracker = require("../../assets/screenshots/0.png");
  const expressYourself = require("../../assets/screenshots/1.png");
  const noSQL = require("../../assets/screenshots/2.png");
  const popcorn = require("../../assets/screenshots/3.png");
  const runBuddy = require("../../assets/screenshots/4.png");
  const weatherDash = require("../../assets/screenshots/5.png");
  const ritualApp = require('../../assets/screenshots/6.png');

  const PROJECTS = [
    {
      name: "Budget Tracker",
      image: budgetTracker,
      technologies:
        "IndexedDB, Manifest.json, Service Workers, Heroku, MongoDB Atlas",
      category: "Mobile PWA",
      description: "Users can track budget and expenses while on the go!",
      deployed: "https://on-budget-01.herokuapp.com/",
      repository: "https://github.com/crosenfrisk/on-budget",
    },
    {
      name: "express-yourself",
      image: expressYourself,
      technologies: "Express.js, MySQL, Handlebars.js",
      category: "CMS Fullstack Website",
      description:
        "Users create a profile that allows them to write, edit, and delete posts and comments.",
      deployed: "https://express-yourself-01.herokuapp.com/",
      repository: "https://github.com/crosenfrisk/express-yourself",
    },
    {
      name: "NoSQL Social Media API",
      image: noSQL,
      technologies: "Express.js, Mongoose, MongoDB Atlas, Insomnia",
      category: "Back-end",
      description:
        "Users can share their thoughts, create a friend's list, and react to friend's thoughts.",
      deployed:
        "https://drive.google.com/file/d/1Syb-fJ8CSP1-D3PGfvBr45s7s2U1I4Hm/view",
      repository: "https://github.com/crosenfrisk/NoSQL-Social-Network-API",
    },
    {
      name: "Popcorn!",
      image: popcorn,
      technologies: "fetch API, Bulma",
      category: "Web Application",
      description:
        "Users choose a movie or a genre to watch, or add to a watchlist for later viewing.",
      deployed: "https://crosenfrisk.github.io/Popcorn/",
      repository: "https://github.com/crosenfrisk/Popcorn",
    },
    {
      name: "Run Buddy",
      image: runBuddy,
      technologies: "HTML, Vanilla CSS",
      category: "Website",
      description: "Client website that offers fitness training services.",
      deployed: "https://crosenfrisk.github.io/Run-Buddy-2.0/",
      repository: "https://github.com/crosenfrisk/Run-Buddy-2.0",
    },
    {
      name: "Weather Dashboard",
      image: weatherDash,
      technologies: "Local Storage, fetch API",
      category: "Web Application",
      description: "Users can view weather based on city input.",
      deployed: "https://crosenfrisk.github.io/weather-dashboard/",
      repository: "https://github.com/crosenfrisk/weather-dashboard",
    },
    {
      name: "Ritual",
      image: ritualApp,
      technologies: "React, MongoDB",
      category: "Web and Mobile Application",
      description: "Users can choose wellness activities and track their goals.",
      deployed: "https://ritual-app-01.herokuapp.com/",
      repository: "https://github.com/Metelak/Ritual",
    }
  ];

  return (
    <div className="portfolio">
      <div>
        <h1>Projects</h1>
      </div>
      {PROJECTS.map((project, i) => (
        <Projects key={i} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;
