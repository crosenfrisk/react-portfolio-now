const Projects = (props) => {

    const { name, image, technologies, deployed, repository } = props.project
  
    return (
      <section className='project'>
        <img src={image} alt="" className='screenshot'/>
        
        <div>
          <div>
            <h2>{name}</h2>
          </div>

          <div className='tech-line'>
            <p>{technologies}</p>
          </div>

          <div className='project-links'>
            <p>
              <a href={deployed}>View Live</a>
            </p>

            <p>
              <a href={repository}>GitHub</a>
            </p>

          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;