export const roundToDecimal = (num) => {
  const string = (Math.round(num * 100) / 100).toString();
  const split = string.split(".");
  let afterDecimal = split[1] || "00";
  if (afterDecimal.length === 1) afterDecimal += "0";
  return `${split[0]}.${afterDecimal}`;
};

export const displayNumber = (num) => {
  const trill = 10 ** 11;
  const bill = 10 ** 9;
  const mill = 10 ** 6;
  if (num > trill) return `${roundToDecimal(num / trill)}T`;
  if (num > bill) return `${roundToDecimal(num / bill)}B`;
  if (num > mill) return `${roundToDecimal(num / mill)}M`;
  return roundToDecimal(num);
};
