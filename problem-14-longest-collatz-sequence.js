function longestCollatzSequence(limit) {
  // Good luck!
  var count = 1; var nextNum = 0; var temp = 1;
  var longestChainNo=1;
  for (var i = 1;  i < limit; i++) {
    nextNum = i;
      while (nextNum != 1) {
        nextNum = getNextNum (nextNum);
        count++;
      }
      if (count > temp) {
        temp  = count;
        longestChainNo = i;
      }
      count = 0;
     // nextNum = 0;
  }
  console.log ("Longest producing chain no is "+longestChainNo, " and count is "+temp);
  return longestChainNo;
}

function getNextNum (n) {
  if (n == 1) return n
  else {
    if (n%2 == 0) return n/2;
    else return 3*n + 1;
  }
}
longestCollatzSequence(14);
