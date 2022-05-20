import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocials = () => {
  return (
    <div class="header__socials">
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><GoMarkGithub/></a>
        <a href='https://instagram.com' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials