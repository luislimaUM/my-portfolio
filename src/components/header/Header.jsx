import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.jpg'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Luís Lima</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className="scroll__down">Scroll Down</a>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default header