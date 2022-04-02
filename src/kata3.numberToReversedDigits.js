const numberToReversedDigits = number => {
  const numToString = number.toString();
  const newArray = numToString.split('').reverse;
  const finalResults = [];
  newArray.forEach(element => finalResults.push(Number(element)));

  return finalResults;
};

module.exports = numberToReversedDigits;
