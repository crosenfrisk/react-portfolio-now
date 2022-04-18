import React from 'react'
import coverImage from "../../assets/images/coverImagetransparent.png";

function About() {

  return (
    <section className="about" >
      <img src={coverImage} className="my-2" style={{ width: "90%" }} alt="cover" />
      <h2 id="about">About Me</h2>
      <div className="about-me">
        <p> Hi! My name is Claire. I am a Fullstack Web Developer living in and working from the Twin Cities of Minnesota.</p>
        <p> I have a passion for wellness and fostering connection between people. Over the last decade I have worked with thousands
          of clients as a Licensed Massage Therapist and a Registered Yoga Teacher.</p>
        <p>As I transition into the world of digital work, I strive to bring the same level of care to my clients and team members, 
          producing code that is effective, well-designed, and meaningful. </p>
          
        <p className='about-you'>How can I support <em>you</em> or <em>your business</em> today?</p>
        
          
        
      </div>
    </section>
  )
}

export default About;