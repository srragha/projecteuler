function specialPythagoreanTriplet(n) {
 var a, b, c = 0;
 var abc=0;
 var loopForA = n/4;
 var n1 = n/2
 var aloop =0;
 var bloop = 0;
 var cloop = 0;
 for (a = 1; a <= loopForA; a++){
     aloop++;
     for (b = a+1; b <= n1; b++) {
         bloop++;
         c=b+1;
         while (c <=n1) {
            cloop++; 
            if ((a+b+c == n) && (a*a + b*b == c*c)) {
               abc = a*b*c;
               console.log ("a = "+a, " b = "+b, " c = "+c, " Product = "+abc)
                 break;
             }
             c++;
         } // while c
     } // for b
 } // for a
 console.log (aloop, bloop, cloop);
 return abc;
}

specialPythagoreanTriplet(120);
