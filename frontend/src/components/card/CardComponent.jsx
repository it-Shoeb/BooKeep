import React from "react";
import { Link } from "react-router-dom";

export default function CardComponent({props}) {
    const {name, image, price} = props
    
  return (
    <>
      <div className="homepage-card">
        <div className="homecard-cardImage">
          <img
            loading="lazy"
            src={image}
            alt=""
          />
        </div>
        <div className="homepage-cardInfo">
          <div className="homepage-cardInfoInner">
            <h3>{name}</h3>
            <p>${price}</p>
            <p className="homepage-cardDescription">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="homepage-ctaContainer">
            <p className="homepage-buy">
              <Link>Buy</Link>
            </p>
            <p className="homepage-cart">
              <Link>Add to Cart</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
