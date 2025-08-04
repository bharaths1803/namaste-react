import sum from "../utils/sum";

test("Sum function must return sum of 2 numbers", () => {
  const s = sum(3, 4);
  expect(s).toBe(7);
});
