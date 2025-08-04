import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mockData/mockResList.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for searching kfc restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(resCardsBeforeSearch.length).toBe(8);

  const searchInput = screen.getByTestId("searchInput");

  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, { target: { value: "KFC" } });
  fireEvent.click(searchBtn);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");

  expect(resCardsAfterSearch.length).toBe(1);
});

it("Should find top rated restaurants correctly", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(resCardsBeforeSearch.length).toBe(8);

  const selectTopResBtn = screen.getByRole("button", {
    name: "Select Top Restaurants",
  });

  fireEvent.click(selectTopResBtn);

  const resCardsAfterFilter = screen.getAllByTestId("resCard");

  expect(resCardsAfterFilter.length).toBe(3);
});
