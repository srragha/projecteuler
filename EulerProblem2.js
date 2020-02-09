function fiboEvenSum(n) {
  // You can do it!
  var ans = 1;
  var temp = 0;
  var temp1 = 0;
  var sum = 0;
  for (var i=0; i<=n; i++) {
    temp1 = temp + ans;
    temp = ans;
    ans = temp1;
   // console.log (temp1);
    if (temp1 < n && temp1%2 == 0)
      sum = sum + temp1;
  }
  console.log (sum);
  return sum;
}

fiboEvenSum(1000);
