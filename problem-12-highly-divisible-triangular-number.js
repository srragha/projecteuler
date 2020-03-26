function divisibleTriangleNumber(n) {
  // Good luck!
 // console.log ("inside the fn...")
  var noOfDivisor = 0;
  var nextNaturalNo = 0;
  var sumOfNaturalNo = 0;
  while (noOfDivisor <= n) {
      nextNaturalNo = nextNaturalNo + 1;
      sumOfNaturalNo = nextNaturalNo*(nextNaturalNo+1)/2;
      noOfDivisor = checkDivisors (sumOfNaturalNo);
      //console.log ("sum ="+ sumOfNaturalNo, " no of div "+ noOfDivisor);
  }
  console.log ("sumOfNaturalNo ==> "+ sumOfNaturalNo, " noOfDivisor= ", +noOfDivisor);
  
  return sumOfNaturalNo;
}
  function checkDivisors (sumOfNaturalNo) {
    var noOfDivisor = 2; 
    var quotient = 0; 
    var arr = [];
  //  console.log ("inside fn=>"+sumOfNaturalNo);
    for (var i = 2; i <= Math.sqrt(sumOfNaturalNo); i++) {
      quotient = sumOfNaturalNo / i
      if (sumOfNaturalNo % i == 0 && (arr.indexOf(quotient) == -1 && arr.indexOf(i) == -1)) {
          
       //   console.log ("sum of Nat "+ sumOfNaturalNo,"i ="+i, "Quo "+quotient)
          //quotient = sumOfNaturalNo / i;
          //if ( arr.indexOf(quotient) == -1 ) {
             // noOfDivisor++;
             if (i!=quotient) {
              arr.push(quotient);
              arr.push (i);
              noOfDivisor+=2;
             } 
             else 
             {
               arr.push(quotient);
               noOfDivisor++;
             }
          //}
         // noOfDivisor++;
      }
    }
  // console.log ("Nat no = "+ sumOfNaturalNo, "array.. "+arr);
    return noOfDivisor;
  }

divisibleTriangleNumber(145);

