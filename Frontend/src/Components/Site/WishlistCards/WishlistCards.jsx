import React from 'react'
import WishlistCard from '../WishlistCard/WishlistCard'

const WishlistCards = ({wishlistItems}) => {
  return (
    <>
      <div className="container">
        <div className="row wishlistRow">
            {
                wishlistItems.map((wishlistItem,index)=>{
                    return(
                        <WishlistCard wishlistItem={wishlistItem} key={index}/>
                    )
                })
            }
        </div>
      </div>
    </>
  )
}

export default WishlistCards
