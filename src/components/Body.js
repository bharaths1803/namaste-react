import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { RES_API } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../context/UserContext.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  const { loggedinUser, setUsername } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const RestaurantCardOpened = withOpenedLabel(RestaurantCard);

  const fetchData = async () => {
    const res = await fetch(RES_API);
    const json = await res.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!onlineStatus)
    return <h1>Oops You're offline. Check your internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex ">
        <div className="p-4 m-4">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-black border-solid"
            data-testid="searchInput"
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
            }}
            className="bg-green-100 px-4 py-2 rounded-lg m-4"
          >
            Search
          </button>
        </div>
        <div className="flex items-center p-4 m-4">
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredListOfRestaurants(filteredList);
            }}
            className="bg-gray-100 px-4 py-2 rounded-lg"
          >
            Select Top Restaurants
          </button>
        </div>
        <div className="flex items-center p-4 m-4">
          <input
            value={loggedinUser}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-black"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.availability.opened ? (
              <RestaurantCardOpened resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
