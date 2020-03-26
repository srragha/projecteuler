function smallestMult(n) {
  var m = 1;
  for (var i=1; i<=n; i++) {
    
    if (m % i == 0)
      m = m * 1;
    else  
      m = m * checkPrime (i);
    console.log ("m = "+m);
  }
  console.log ("Smallest multiple => ", +m);
  return m;
}

function checkPrime (n1) {
    var count = 2;
    while (n1 != 1) {
        if (n1 % count == 0)
          n1 = n1  / count;
        else 
          count ++;
      }
      console.log ("count => "+count);
      return count; 
}
smallestMult(6);
