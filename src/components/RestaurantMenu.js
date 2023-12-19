import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_IMG ,MENU_API} from "../utils/common";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [listmenu, setListmenu] = useState(null);
  const {resid} = useParams()
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
  const { itemCards } =
    listmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;
  return (
    <div className="menu-container">
        <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <h3  class="accordion">{ listmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.title}</h3>
      <div class="panel">
      {itemCards?.map((item) => (
      <div class="menu-item">
      
        <>
      <div class="menu-details">
      <h3>{item?.card?.info?.name}</h3>
        <p>{item?.card?.info?.description}</p>
        <p class="price">{item?.card?.info?.price/100}</p>
      </div>
      <img src={MENU_IMG+item?.card?.info?.imageId}  class="menu-image"/>
      </>
     
    </div>
     ))}
     </div>
    </div>
  );
};
export default RestaurantMenu;
