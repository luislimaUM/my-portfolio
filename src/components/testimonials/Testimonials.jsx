import React from 'react'
import './testimonials.css'
import ME from '../../assets/me.png'

const data = [
  {
    avatar: ME,
    name: 'Luis Lima',
    review: 'Teste 123456 09876 kilojiugyufhkjoipoihjhfia'
  },
  {
    avatar: ME,
    name: 'Luis Cunha',
    review: 'Teste'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
      {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials