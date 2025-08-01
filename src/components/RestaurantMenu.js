import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const res = await fetch(MENU_API + resId);
    const json = await res.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(itemCards);

  console.log(name, cuisines, costForTwoMessage);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs. "} {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
