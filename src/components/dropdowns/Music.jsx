import React from 'react'
import { NavLink } from 'react-router-dom'
const Music = () => {
  return (
    <div className="dropdown">
    <ul className="dropdown-menu">
      <li className="dropdown-rel">
        <NavLink to="/shop">RELEASES</NavLink>
        <div className="overlay-left"></div>
      </li>
      <li className="dropdown-songs">
        <NavLink to="/shop">SONGS</NavLink>
        <div className="overlay-right"></div>
      </li>
    </ul>
  </div>
  )
}

export default Music