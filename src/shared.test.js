import { roundToDecimal, displayNumber } from "./shared";

test("roundToDecimal adds and removes decimal places", () => {
  const large = 345989760.89734;
  const modified = roundToDecimal(large);
  expect(modified).toEqual("345989760.90");
});
