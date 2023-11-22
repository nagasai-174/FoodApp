import RestaurantCards from "./RestaurantCards";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [reslist,setReslist]=useState(resObj)
    return (
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