function numberLetterCounts(limit) {

 var count = 0; 
 for (var i = 1; i <= limit; i++){
   count = count + numberLetterCountsGET (i);
 }
 console.log ("Count of words "+ count)
 numberLetterCountsGET (limit);
  return count;
}

function numberLetterCountsGET(limit) {
  // Good luck!
  //console.log ("Limit... "+limit);
  // Code to get the number to words
  var unitWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  var tenWord = ['Ten','Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']; 
  var tenWord2 = ['','','Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty','Seventy','Eighty','Ninety'];
  var hundredWord = ['Hundred'];
  var thousandWord = ['Thousand'];
  var thousandDigit = 0;
var n = limit; var place = 0;
var temp1 = 0; var multi = 10; var runningNo=0;
var unitDigit = 0; var tenDigit = 0; var hundredDigit = 0; 
var inWords = "";

while (n >= 1 ) { // traverse the digit
  temp1 = n%10; runningNo = temp1; 
  place++; multi = 10**(place-1);
  temp1 = temp1*multi;

  if (multi == 1) { // Units place
    unitDigit = runningNo;
    //console.log ("Units digit is "+ unitWord [unitDigit])
    //inWords = ""+ unitWord [unitDigit];
  }
  else if (multi == 10) { // Tens place
      tenDigit = runningNo;
      if (tenDigit == 0 && unitDigit == 0) {
        //console.log ("Tens 1 "+ " hundred ");
        //inWords = " Hundred "+ inWords;
      }
      else if (tenDigit == 0 && unitDigit >0) {
        //console.log ("Tens 2 "+ "and"+ unitWord[unitDigit]);
        inWords = unitWord[unitDigit] + inWords;
      }
      else if (tenDigit == 1) {
        temp1 = tenDigit + unitDigit; 
        //console.log ("Tens 3=> "+ tenWord[unitDigit]);
        inWords = tenWord[unitDigit] + inWords;
        temp1 = 0;
      }
      else if (tenDigit >= 2) {
        if (unitDigit == 0) {
          //console.log ("Tens4 "+ "and"+ tenWord2[tenDigit]);
       inWords = tenWord2[tenDigit] + inWords;
        } else {
      //    console.log ("Tens4 "+ "and"+ tenWord2[tenDigit] +" "+ unitWord[unitDigit]);
       inWords = tenWord2[tenDigit] +""+ unitWord[unitDigit] + inWords;
        }
      }
  } // End of tens traversal

  else if (multi == 100) { // 100s traversal
    hundredDigit = runningNo;
    if (hundredDigit == 0 && tenDigit == 0 && unitDigit == 0) {
      //console.log("thousand");
    }
    else {
      //console.log ("M100 "+ unitWord[runningNo] + "hundred");
      if (unitDigit ==0 && tenDigit == 0)
        inWords = unitWord[runningNo] + "hundred" + inWords;
      else 
        inWords = unitWord[runningNo] + "hundredand" + inWords;
    }
  } // End of 100

  else if (multi == 1000) {
    thousandDigit = runningNo;
      if (unitDigit ==0 && tenDigit == 0 && hundredDigit ==0)
        inWords = unitWord[thousandDigit] +"thousand"+inWords;
      else
       inWords = unitWord[thousandDigit] +"thousandand"+inWords;
  }
  n = Math.trunc(n / 10);
  //console.log ("n = "+n)
}
  if (place == 1) {
    inWords = unitWord[unitDigit];
  } 
  //console.log ("Final numbers in Words is "+ inWords);
  return inWords.length;
}

numberLetterCounts(1000);
