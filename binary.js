

module.exports = function Binary (binaryNum) {

  var decimalNum = 0;
  var counter = 0;

  this.toDecimal = function () {
    for (var i = binaryNum.length - 1; i > -1; i--) {
      if (binaryNum[i] !== '0' && binaryNum[i] !== '1')
        return 0;
      else {
        decimalNum += parseInt(binaryNum[i]) * Math.pow(2,[counter]);
      }
      counter++;
    }
    return decimalNum;
  }
}
