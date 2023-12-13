import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [reslist,setReslist]=useState([])
  useEffect(()=>{fetchData()},
  [])
  const fetchData = async () => {
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4426899&lng=78.3884872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json = await data.json()
console.log("json")
setReslist(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
?.restaurants)
  }
  
    return reslist.length === 0 ? <Shimmer/> : (
      <div>
        <button className="rating-btn" 
        onClick={()=>{ 
          const filterData = reslist.filter(
            (res)=>res.info.avgRating>4);
            setReslist(filterData)
          }}>
          Ratings 4.0+
          </button>
          <button className="del-time"
          onClick={()=> {
            const filterTime= reslist.filter(
              (res)=>res.info?.sla?.deliveryTime<20)
              setReslist(filterTime)

          }}
          >Short Time</button>
        <div className="rest-container">
          {reslist.map((resturant) => (
            <RestaurantCards key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body