/**
 * Provides an appropriate prefix for numbers based on their digits
 * @param {*} num the number to check
 * @param {*} digits the digits set
 * @returns
 */
export const numberFormatter = (num, digits = 0) => {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
};
/**
 * Converts milliseconds to a hours|minutes|seconds format
 * @param {integer} duration  the current milliseconds
 * @returns
 */
export const msToTime = (duration) => {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};

/**
 * Calculates how much content can fit within a container of the specified with
 * @param {*} containerWidth the width of the container
 * @param {*} objectWidth  the width of the items fillng the container
 */
export const contentAmountInSpace = (containerWidth, objectWidth) => {
  const result = Math.floor(containerWidth / objectWidth);
  return result > 12 ? 12 : result;
};
