
function high(x) {
  let arr = x.split(' ');
  console.log('arr', arr);
  let sum = [];
  let wordsum=0;
  let largest=0;
  let hiIndex=0;

  for (i=0; i < arr.length; i++) {
    let word = arr[i];
    console.log('word', word);

    for (k =0; k < word.length; k++) {
      console.log(i,k);
      let ltr = word.charCodeAt(k)-96;
      wordsum = wordsum + ltr;
     console.log('ltr', ltr);
   }
   console.log('increment');
   sum[i] = wordsum;
   wordsum=0;
   console.log('sum', sum);
  }

  for (m=0; m < sum.length; m++) {
    if (sum[m] > largest) {
      largest = sum[m];
      hiIndex = [m];
    }
  }
  return arr[hiIndex]
}

