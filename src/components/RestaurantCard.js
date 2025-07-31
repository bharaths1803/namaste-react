import { resImage } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
   const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
    <img alt="res image" className="res-logo" src={resImage}/>
    <h3>{name}</h3>
    <h4>{avgRating}</h4>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{costForTwo}</h4>
    <h4>{deliveryTime}</h4>    
  </div>
}

export default RestaurantCard