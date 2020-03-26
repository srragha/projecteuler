function largestPrimeFactor(number) {
  // Good luck!
  
  var count = 2;
  while (number != 1) {
    
    if (number % count == 0) {
        number = number / count;
        console.log ("prime factors are => "+ count)
    } else {
        count ++;
    }
    
  }
  console.log ("And the larget Primefactor is => "+ count);
  return count;
}

largestPrimeFactor(1020);
