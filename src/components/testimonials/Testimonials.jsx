import React from 'react'
import './testimonials.css'
import ME from '../../assets/me.png'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={ME} alt="Avatar One"></img>
          </div>
          <h5>Luis Lima</h5>
          <small className='client__review'>
            Teste 123456 09876 kilojiugyufhkjoipoihjhfia
          </small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={ME} alt="Avatar One"></img>
          </div>
          <h5>Luis Lima</h5>
          <small className='client__review'>
            Teste 123456 09876 kilojiugyufhkjoipoihjhfia
          </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials