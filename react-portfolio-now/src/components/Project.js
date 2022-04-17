const Project = (props) => {

    const { title, image, technologies, deployed, github } = props.project
  
    return (
      <section className='project'>
        <img src={image} alt="" className='screenshot'/>
        <div className='project-text'>
          <div className='title-line'>
            <h2>{title}</h2>
          </div>
          <div className='tech-line'>
         
            <p>{technologies}</p>
          </div>
          <div className='link-line'>
            <p>
              <a href={deployed}>View Live</a>
            </p>
            <p>
              <a href={github}>Repo</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Project