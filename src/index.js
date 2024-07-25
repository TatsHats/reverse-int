module.exports = function reverse (n) {
    let numberStr = Math.abs(n).toString();
    let result = '';
    for (let i = numberStr.length - 1; i >= 0; i--) {
        result += numberStr[i];
    }
    return Number(result);
}
