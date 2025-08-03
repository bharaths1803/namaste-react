import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIdx, setShowIdx] = useState(false);

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-6">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories?.map((category, idx) => (
        <RestaurantCategory
          data={category.card.card}
          key={category.card.card.categoryId}
          setShowIdx={() => setShowIdx(idx)}
          isVisible={idx === showIdx}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
