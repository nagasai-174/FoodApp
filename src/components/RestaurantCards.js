import { CDN_URL, FIVE_STAR_IMG } from "../utils/common";
const RestaurantCards = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines } =
      resData.info;
    return (
      <div className="res-card">
        <img
          className="res-img"
          alt="res-img"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h2 className="tittle">{name}</h2>
        <p className="rating">
          {avgRating}
          <span>
            <img
              className="five-star-img"
              src={FIVE_STAR_IMG}
            />
          </span>
          <span className="time">{resData?.info?.sla?.deliveryTime} mins</span>
        </p>
        <p className="cuisines">{cuisines.join(", ")}</p>
      </div>
    );
  };
  export default RestaurantCards