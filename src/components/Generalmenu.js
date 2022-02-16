import React from 'react'
import {
  Link
} from "react-router-dom";

export default function header() {
  return (
      <nav className='nav_centre'>
        <ul className='gmenu'>
            <li className='livertical'><Link className='a_menu' to='/' title='Головна'>Головна</Link></li>
            <li className='livertical'><Link className='a_menu' to='/reabit' title='Архів репресованих ссср'>Архів репресованих</Link></li>
        </ul>
      </nav>
  )
}