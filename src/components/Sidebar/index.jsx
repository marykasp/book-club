import React from 'react'
import {Nav} from './styles'
import {FaHome, FaBookmark, FaHatWizard} from 'react-icons/fa'
import {BiBookHeart} from 'react-icons/bi'

const Sidebar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <FaHome size={50} color="#7172E6" />
        </li>
        <li>
          <FaBookmark size={50} color="#7172E6" />
        </li>
        <li>
          <FaHatWizard size={50} color="#7172E6" />
        </li>
        <li>
          <BiBookHeart size={50} color="#7172E6" />
        </li>
      </ul>
    </Nav>
  )
}

export default Sidebar
