import React from 'react'
// import coverImage from '../../assets/images/coverImage.png'

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p> Hi! My name is Claire Rosenfrisk. I am a Fullstack Web Developer living in and working from the Twin Cities of Minnesota.
          I have a passion for wellness and fostering connection between people. Over the last decade I have worked with hundreds of 
          clients as a Licensed Massage Therapist and a Registered Yoga Teacher. As I transition into the world of digital work, I 
          strive to bring the same level of care to my clients and team members, producing code that is effective, well designed, and 
          meaningful. 
          
          <em>How can I support your business today?</em>
          
        </p>
      </div>
    </section>
  )
}

export default About;