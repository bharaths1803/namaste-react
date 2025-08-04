import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_RES_DATA from "../mockData/mockResData.json";

it("Should render mock data in Restaurant Card Component", () => {
  render(<RestaurantCard resData={MOCK_RES_DATA} />);

  const name = screen.getByText("Kwality Walls Ice Cream and More");

  expect(name).toBeInTheDocument;
});
