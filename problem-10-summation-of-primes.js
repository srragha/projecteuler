function primeSummation(n) {
  // Good luck!
  // Good luck!
  console.log ("entering...");
  var index = 0;
  var nthPrime1 = 2;
  var sumPrime = 0;
  var nextNum = 2;
  var isPrime = true;
  while (nextNum < n) { 
    isPrime = checkPrime (nextNum);
    if (isPrime) {
      index ++;
      //console.log ("Flag = "+isPrime, "nextNum => "+ nextNum)
      sumPrime = sumPrime + nextNum;
    }
    nextNum = nextNum + 1;
  }
  console.log ("sum => "+sumPrime);
  return sumPrime;
}
function checkPrime (n) {
  //console.log ("Number received is =>"+n);
  var isPrime = true;
  if (n == 1 || n == 2) {
  //  console.log ("checking if 1 or 2")
    return isPrime;
  }
  //console.log ("Sq root = "+ Math.sqrt (4));
  for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      } 
  }
  return isPrime;
}

primeSummation(2001);
