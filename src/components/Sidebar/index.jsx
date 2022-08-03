import React from 'react'
import {Nav} from './styles'
import {GiWorld, GiErlenmeyer, GiHedgehog,  GiDragonOrb, GiTalk, GiCrownOfThorns} from 'react-icons/gi'

const Sidebar = ({handleClick}) => {
  return (
    <Nav>
      <ul>
        <li id="fiction" onClick={() => handleClick('hardcover-fiction')}>
          <GiDragonOrb size={50} color="#7172E6" />
        </li>
        <li id="nonfiction" onClick={() => handleClick('hardcover-nonfiction')}>
          <GiWorld size={50} color="#7172E6" />
        </li>
        <li id="advice" onClick={() => handleClick('Advice How-To and Miscellaneous')}>
          <GiTalk size={50} color="#7172E6" />
        </li>
        <li id="young" onClick={() => handleClick('young-adult')}>
          <GiCrownOfThorns size={50} color="#7172E6" />
        </li>
        <li id="science" onClick={() => handleClick('science')}>
          <GiErlenmeyer size={50} color="#7172E6" />
        </li>
        <li id="animals" onClick={() => handleClick('animals')}>
          <GiHedgehog size={50} color="#7172E6" />
        </li>
      </ul>
    </Nav>
  )
}

export default Sidebar
