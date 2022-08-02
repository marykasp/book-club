import React from 'react'
import {Nav} from './styles'
import {FaHome, FaBookmark, FaHatWizard} from 'react-icons/fa'
import {BiBookHeart} from 'react-icons/bi'

const Sidebar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <FaHome size={32} />
          <span>Home</span>
        </li>
        <li>
          <FaBookmark size={32} />
          <span>Popular</span>
        </li>
        <li>
          <FaHatWizard size={32} />
          <span>Fantasy</span>
        </li>
        <li>
          <BiBookHeart size={32} />
          <span>Romance</span>
        </li>
      </ul>
    </Nav>
  )
}

export default Sidebar
