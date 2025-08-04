import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center space-y-2">
      <h1 className="text-lg font-bold">Cart</h1>
      <div className="mx-auto w-1/2">
        <button
          className="bg-black text-white p-3 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cart.items.length === 0 && (
          <h1>Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cart.items} />
      </div>
    </div>
  );
};

export default Cart;
