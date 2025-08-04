import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left flex justify-between p-2 m-2 border-b-2 border-gray-200"
          data-testid="foodItems"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className={"absolute"}>
              <button
                className="mx-16 p-2 bg-black text-white rounded-lg shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            {item.card.info.imageId && (
              <img src={IMG_URL + item.card.info.imageId} className="w-full" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
