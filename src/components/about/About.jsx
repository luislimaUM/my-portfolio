import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolderOpenFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>
            <article className='about_card'>
              <RiFolderOpenFill className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore unde animi dolores aperiam? Aperiam qui ad quae sequi quidem nihil similique ea vitae repudiandae, ducimus minus maxime! Deleniti, architecto.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About