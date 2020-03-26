function largestPalindromeProduct(n) {
  var lowerend = 10**(n-1);
  var higherend = 10**n -1 ;
  var flag = false;

  for (var i = higherend; i > ((higherend-10)/1); i--) {
      for (var j = higherend; j > ((higherend-88)/1); j--) {
        if (i*j == checkPalinNumber(i*j) ) {
            console.log ("Largest Palin product => "+ i*j);
            flag = true;
            break;
        }
      }
       if (flag) break;
    }
  return i*j;
}

function checkPalinNumber (n) {
  var rem = 0;
  var count = 0;
  var numArr = [];
  var check =0;
  while (n >= 1) {
    rem = n % 10;
    numArr [count] = rem;
    count++;
    n = (n / 10 - rem/10);
  }
  var sum = 0;
  var k = count - 1;
  for (var i=0; i<count; i++) {
      sum = sum + numArr[i]*10**k;
      k--;
  }
  return sum;
}
largestPalindromeProduct(3);
