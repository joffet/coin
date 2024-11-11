import { roundToDecimal, displayNumber } from "./shared";

const SMALL = 0.00056;
const MED = 34;
const LARGE = 475638923.097045;
const EXTRA = 72998562398476.4;

test("roundToDecimal adds and removes decimal places and commas", () => {
  const smallMod = roundToDecimal(SMALL);
  expect(smallMod).toEqual("0.00");

  const medMod = roundToDecimal(MED);
  expect(medMod).toEqual("34.00");

  const largeMod = roundToDecimal(LARGE);
  expect(largeMod).toEqual("475,638,923.10");

  const extraMod = roundToDecimal(EXTRA);
  expect(extraMod).toEqual("72,998,562,398,476.40");
});

test("displayNumber summarizes very large and very small numbers", () => {
  const smallMod = displayNumber(SMALL);
  expect(smallMod).toEqual("<0.01");

  const medMod = displayNumber(MED);
  expect(medMod).toEqual("34.00");

  const largeMod = displayNumber(LARGE);
  expect(largeMod).toEqual("475.64M");

  const extraMod = displayNumber(EXTRA);
  expect(extraMod).toEqual("73.00T");
});
