import React from 'react';
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_IMG ,MENU_API} from "../utils/common";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [listmenu, setListmenu] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showData , SetShowData] = useState(false)
  const {resid} = useParams()
  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      MENU_API + resid
    );
    const json = await data.json();
    console.log(json);
    setListmenu(json.data);
  };
  if (listmenu === null) return <Shimmer />;
  const { name, cuisines } = listmenu?.cards[0]?.card?.card?.info;
  //  const { itemCards } =
  //    listmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
  //     ?.card;
      const {cards} = listmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  return (
    <div className="menu-container">
        <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      {cards?.map((item, index) => (
        <React.Fragment key={index}>
          <h3
            className={`accordion ${index === openAccordion ? "active" : ""}`}
            onClick={() => handleAccordionClick(index)}
          >
            {item?.card?.card?.title}
          </h3>
          <div className={`panel ${index === openAccordion ? "show" : ""}`}>
            {Array.isArray(item?.card?.card?.itemCards) &&
              item.card.card.itemCards.map((innerItem, innerIndex) => (
                <div key={innerIndex} className="menu-item">
                  <div className="menu-details">
                    <h3>{innerItem?.card?.info?.name}</h3>
                    <p>{innerItem?.card?.info?.description}</p>
                    <p className="price">{innerItem?.card?.info?.price / 100}</p>
                  </div>
                  <img
                    src={MENU_IMG + innerItem?.card?.info?.imageId}
                    className="menu-image"
                    alt={innerItem?.card?.info?.name}
                  />
                </div>
              ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
export default RestaurantMenu;
