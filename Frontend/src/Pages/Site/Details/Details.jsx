import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../Context/Context'
import { Helmet } from 'react-helmet'
import "./Details.css"

const Details = () => {
  const {id}=useParams()
  const [item,setItem]=useState({})
  const {addToBasket,addToWishlist}=useContext(MainContext)
  useEffect(()=>{
    axios.get(`http://localhost:2000/courses/${id}`).then(res=>{
    setItem(res.data)
    })
  },[])
  return (
    <>
    <Helmet>
      <title>
        {item.title}
      </title>
    </Helmet>
      <div className="details">
      <div className="container">
        <div className="row" id='detailsRow'>
          <div className="col-6 detailImgCol">
            <div className="card-img">
            <img src={item.image} width="500px" alt="" />
            </div>
            <div className="author">
                <div className="author__img">
                    <img src={item.authorImage} alt="" />
                </div>
                <div className="author__name">
                    <p>{item.author},<span>Author</span></p>
                </div>
                <div className="author__price">
                    <span>${item.price}</span>
                </div>
            </div>
            
          </div>
          <div className="col-6">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="card__fundamentals">
            <button className='btn btn-primary' id='button' onClick={()=>addToBasket(item)}>Add To Basket</button>
            <button className='btn btn-warning' id='button' onClick={()=>addToWishlist(item)}>Add To Wishlist</button>

            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Details
