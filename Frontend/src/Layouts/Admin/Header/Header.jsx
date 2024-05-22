import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header>
      <div className="header">
        <div className="header__left">
          <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
          <span>course</span>
          
        </div>
        <div className="header__middle">
        <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="add">Add</Link>
            </li>
            
          </ul>
        </div>
        <div className="header__right">
          <img src="https://preview.colorlib.com/theme/course/images/phone-call.svg"  alt="" />
          <span>+43 4566 7788 2457</span>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
