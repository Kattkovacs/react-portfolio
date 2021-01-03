import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Explore"
              label="Portfolio"
              part="/portfolio"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Pet project"
              label="Pet project"
              part="/portfolio"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Explore"
              label="Portfolio"
              part="/portfolio"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Pet project"
              label="Pet project"
              part="/portfolio"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Explore my works"
              label="Portfolio"
              part="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
