export const roundToDecimal = (num) => {
  const string = (Math.round(num * 100) / 100).toString();
  const split = string.split(".");

  const beforeDecimalOld = split[0];
  let beforeDecimalNew = "";
  for (let index = beforeDecimalOld.length - 1; index >= 0; index--) {
    const insertComma =
      (beforeDecimalOld.length - index) % 3 === 0 && // 3 nums behind it
      index < beforeDecimalOld.length && // not the first run
      index !== 0; // not the last run
    beforeDecimalNew = `${insertComma ? "," : ""}${
      beforeDecimalOld[index]
    }${beforeDecimalNew}`;
  }

  let afterDecimal = split[1] || "00";
  if (afterDecimal.length === 1) afterDecimal += "0";
  return `${beforeDecimalNew}.${afterDecimal}`;
};

export const displayNumber = (num) => {
  const trill = 10 ** 12;
  const bill = 10 ** 9;
  const mill = 10 ** 6;
  if (num > trill) return `${roundToDecimal(num / trill)}T`;
  if (num > bill) return `${roundToDecimal(num / bill)}B`;
  if (num > mill) return `${roundToDecimal(num / mill)}M`;
  if (num < 0.01 && num > 0) return "<0.01";
  return roundToDecimal(num);
};
