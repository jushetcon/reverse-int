module.exports = function reverse(n) {
    if (n < 0) {
        n = Math.abs(n);
    }
    let stringNumb = String(n);
    let numberArray = Array.from(stringNumb);
    let result = "";

    for (let i = numberArray.length - 1; i >= 0; i--) {
        result += String(numberArray[i]);
    }
    return +result;
};
