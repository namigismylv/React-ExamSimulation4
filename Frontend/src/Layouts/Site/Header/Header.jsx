import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import MainContext from "../../../Context/Context"
import Carousel from '../../../Components/Site/Sections/Carousel/Carousel'
const Header = () => {
  const {basketItems,wishlistItems}=useContext(MainContext)
  return (
    <header>
      <div className="header">
        <div className="header__left">
          <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
          <span>course</span>
          
        </div>
        <div className="header__middle">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="basket">Cart({basketItems.length})</Link>
            </li>
            <li>
              <Link to="wishlist">Wishlist({wishlistItems.length})</Link>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <img src="https://preview.colorlib.com/theme/course/images/phone-call.svg"  alt="" />
          <span>+43 4566 7788 2457</span>
        </div>

      </div>
    </header>
  )
}

export default Header
