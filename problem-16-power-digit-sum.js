function powerDigitSum(exponent) {
  // Good luck!
  var answer=[];
  var temp = 0;
  answer[0] = 1;
  var carryfwd = 0;
  var sum = 0; 
  for (var i = 0; i < exponent; i++) {
    for (var j = 0; j < answer.length; j++) {
        temp = answer[j]*2 + carryfwd;
        carryfwd = 0;
        if (temp < 9) {
          answer[j] = temp;  
        } else {
          answer[j] = temp%10;
          carryfwd = Math.trunc (temp / 10);
        }
    }
    if (carryfwd > 0)
      answer[answer.length] = carryfwd;
    carryfwd = 0;
//    console.log ("Answer => "+ answer);
  }

  for (var x = 0; x < answer.length; x++) {
    sum = sum + answer[x];
  }
  console.log ("digit sum "+sum);
  return sum;
}

powerDigitSum(15);
