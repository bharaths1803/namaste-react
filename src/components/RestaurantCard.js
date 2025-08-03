import { IMG_URL, resImage } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="bg-pink-100 w-[250px] p-4 m-4 rounded-lg hover:bg-gray-200">
      <img
        alt="res image"
        className="rounded-lg"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withOpenedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-4 p-4">Opened</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
