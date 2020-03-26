function largeSum(arr) {
  var index = 50;
  var a=0;
  var b=[0];
  var c=[];
  var flag = false;
   for (var j = 0; j < index; j++) {
   a=0; 
  for (var i = 0; i < arr.length; i++) { //
     a =  a + parseInt (arr[i][index-1-j]);
  }// for I
      
      if (flag) a = a + c.pop();
      if (a > 9 ) {
        c.push (a%10);
        c.push (Math.trunc (a/10));
        flag = true;
      }
      else {
        flag = false;
        c.push (a);
      }
} // for J

// checking if the last digit is more than 1 digit
a = c.pop();
  if (a > 9 ) {
        c.push (a%10);
        c.push (Math.trunc (a/10));
      }
      else {
        c.push (a);
   }
// end of checking

var sum = 0;
sum = c.reverse();
var sum1 = ""+c.slice(0,10)
sum1 = sum1.split(",");
var sum2=0;
for (var k = 0; k<10; k++){
    sum2 = sum2 + sum1[k];
}
sum2 = parseInt(sum2);
console.log ("50Digit sum=> "+sum2)
return sum2;
}

// only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
