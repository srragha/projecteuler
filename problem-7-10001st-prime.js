function nthPrime(n) {
  // Good luck!
  var index = 0;
  var nthPrime1 = 2;
  var nextNum = 2;
  var isPrime = true;
  while (index <= n) { 
    isPrime = checkPrime (nextNum);
    if (isPrime) {
      index ++;
      nthPrime1 = nextNum;
    }
    nextNum = nextNum + 1;
//    console.log ("Index =>"+index, "Next num => "+nextNum);
  }
  console.log ("Nth prime no is => "+ nthPrime1);
  return nthPrime1;
}
function checkPrime (n) {
  //console.log ("Number received is =>"+n);
  var isPrime = true;
  if (n == 1 || n == 2) {
  //  console.log ("checking if 1 or 2")
    return isPrime;
  }

  for (var i = 2; i < n/2; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      } 
  }
  return isPrime;

}
nthPrime(100);
