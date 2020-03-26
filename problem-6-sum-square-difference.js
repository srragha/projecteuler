function sumSquareDifference(n) {
  return getDiff (n) ;
}

function getDiff (n) {
  var sumOfTheSquares = 0;
  var squareOfTheSum = 0;
  for (var i = 1; i<=n; i++) {
    sumOfTheSquares = sumOfTheSquares + i**2;
    squareOfTheSum = squareOfTheSum + i;
  }
  squareOfTheSum = squareOfTheSum**2
  return squareOfTheSum - sumOfTheSquares ;
}

sumSquareDifference(10);
