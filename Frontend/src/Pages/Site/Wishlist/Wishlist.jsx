import React, { useContext } from "react";
import MainContext from "../../../Context/Context";
import WishlistCards from "../../../Components/Site/WishlistCards/WishlistCards";
import './Wishlist.css'

const Wishlist = () => {
  const { wishlistItems } = useContext(MainContext);
  return(
  <div id="wishlist">
    <WishlistCards wishlistItems={wishlistItems}/>
  </div>

  ) 
};

export default Wishlist;
