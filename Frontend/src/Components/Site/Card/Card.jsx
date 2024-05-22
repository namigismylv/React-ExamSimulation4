import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
const Card = ({dataItem}) => {
  return (
    <>
      <div className="col-4 coursesCol">
        <div class="card" style={{ width: "21.875rem" }}>
          <img src={dataItem.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="card-title">
            <Link to={`details/${dataItem._id}`}>{dataItem.title}</Link>
            </div>
            <p class="card-text">
              {dataItem.desc}
            </p>
            <div className="author">
                <div className="author__img">
                    <img src={dataItem.authorImage} alt="" />
                </div>
                <div className="author__name">
                    <p>{dataItem.author},<span>Author</span></p>
                </div>
                <div className="author__price">
                    <span>${dataItem.price}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
