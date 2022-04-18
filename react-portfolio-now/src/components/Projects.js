const Projects = (props) => {
  const { name, image, technologies, deployed, repository } = props.project;

  return (
    <section className="project">
      <div>
        <h2>{name}</h2>
      </div>
      <img src={image} alt="" className="screenshot" />

      <div>
        <div className="tech-line">
          <p>{technologies}</p>
        </div>

        <div className="project-links">
          <p>
            <a href={deployed} target="_blank"
              rel="noopener noreferrer">View Live</a>
          </p>

          <p>
            <a href={repository} target="_blank"
              rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
