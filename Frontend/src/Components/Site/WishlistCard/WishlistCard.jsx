import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link,  } from "react-router-dom";
import MainContext from "../../../Context/Context";
import './WishlistCard.css'
const WishlistCard = ({ wishlistItem }) => {
  const {deleteFromWishlist}=useContext(MainContext)
  return (
    <>
    <Helmet>
        <title>
            Wishlist
        </title>
    </Helmet>
      <div className="col-4 wishlistCol">
        <div class="card" style={{ width: "21.875rem" }}>
          <img src={wishlistItem.item.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="card-title">
              <Link to={`/details/${wishlistItem.item._id}`}>
                {wishlistItem.item.title}
              </Link>
            </div>
            <p class="card-text">{wishlistItem.item.desc}</p>
            <div className="author">
              <div className="author__img">
                <img src={wishlistItem.item.authorImage} alt="" />
              </div>
              <div className="author__name">
                <p>{wishlistItem.item.author},Author</p>
              </div>
              <div className="author__price">
                <span>${wishlistItem.item.price}</span>
              </div>
            </div>
            <div className="deleteFromWishlist">
                <button className="butn" id="wishlist-delete__button" onClick={()=>deleteFromWishlist(wishlistItem.item)}><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistCard;
