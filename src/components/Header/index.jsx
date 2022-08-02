import React from 'react'
import {Logo, HeaderContainer} from './style'
import {FaBook} from 'react-icons/fa'

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <FaBook size={40} color="#000" />
        <Logo title="Book Club logo" />
      </a>
    </HeaderContainer>
  )
}

export default Header
