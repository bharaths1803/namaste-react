import "@testing-library/jest-dom";
import MOCK_DATA from "../mockData/mockResMenu.json";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../utils/appStore.js";
import RestaurantMenu from "../components/RestaurantMenu.js";
import Cart from "../components/Cart.js";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load restaurant menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Family Tubs - (4)");
  fireEvent.click(accordianHeader);

  const items = screen.getAllByTestId("foodItems");
  expect(items.length).toBe(4);

  const cartItemsText = screen.getByText("Cart (0 items)");
  expect(cartItemsText).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  const cartItemsText2 = screen.getByText("Cart (1 items)");
  expect(cartItemsText2).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  const cartItemsText3 = screen.getByText("Cart (2 items)");
  expect(cartItemsText3).toBeInTheDocument();

  const itemsAdded = screen.getAllByTestId("foodItems");
  expect(itemsAdded.length).toBe(6);

  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearBtn);

  const itemsRemoved = screen.getAllByTestId("foodItems");
  expect(itemsRemoved.length).toBe(4);

  const emptyCartText = screen.getByText(
    "Cart is empty. Add Items to the cart!"
  );
  expect(emptyCartText).toBeInTheDocument();
});
