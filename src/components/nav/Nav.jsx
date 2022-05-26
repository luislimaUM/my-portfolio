import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage2Line} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BiBookBookmark/></a>
      <a href='#services'><RiServiceLine/></a>
      <a href='#contact'><RiMessage2Line/></a>
    </nav>
  )
}

export default Nav