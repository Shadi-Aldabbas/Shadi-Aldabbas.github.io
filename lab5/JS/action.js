"use strict";

function max(n1, n2) {
  if (n1 > n2) return n1;
  else if (n2 > n1) return n2;
  else return 0;
}
console.log("max of 2,4 = " + max(2, 4));

//ES6
const maxOfThree = (n1, n2, n3) =>
  n1 > n2 && n1 > n3 ? n1 : n2 > n1 && n2 > n3 ? n2 : n3;

console.log("maxOfThree of 2,4,-2 = " + maxOfThree(2, 4, -2));

const isVowel = (s) =>
  ["a", "e", "i", "o", "u"].indexOf(s.toLowerCase()) !== -1;

console.log("isVowel of a = " + isVowel("a"));

const sum = (list) => list.reduce((curr, next) => curr + next);
console.log("sum of [1,2,3,4,5] = " + sum([1,2,3,4,5]));

const multiply = (list) => list.reduce((curr, next) => curr * next);
console.log("multiply of [1,2,3,4,5] = " + multiply([1,2,3,4,5]));

const reverse = (s) => s.split('').reverse().join('');
console.log("reverse of WAP = " + reverse("WAP"));

const findLongestWord = (list) => Math.max(...(list.map(el => el.length)));
console.log("findLongestWord of ['WAP','is This The Longest !?!','Maharishi'] = " + findLongestWord(['WAP','is This The Longest !?!','Maharishi']));

const filterLongWords = (list,i) => list.filter(el => el.length > i);
console.log("filterLongWords of (['WAP','is This The Longest !?!','Maharishi'], 4) = " + filterLongWords(['WAP','is This The Longest !?!','Maharishi'], 4));

const computeSumOfSquares = (list) => list.map(value => value * value).reduce((curr, next) => curr + next);
console.log("computeSumOfSquares of [1,2,3,4,5,6] = " + computeSumOfSquares([1,2,3,4,5,6]));

const printOddNumbersOnly = (list) => list.filter(v => v % 2 == 1);
let res = printOddNumbersOnly([1,2,3,4,5,6]);
console.log("printOddNumbersOnly of [1,2,3,4,5,6] =" + res);

const computeSumOfSquaresOfEvensOnly = (list) => list.filter(v => v % 2 == 0).map(v => v * v).reduce((curr, next) => curr + next);
res = computeSumOfSquaresOfEvensOnly([1,2,3,4,5]);

console.log("computeSumOfSquaresOfEvensOnly of [1,2,3,4,5] = " + res );

// 11 already done ↑↑↑↑

const findSecondBiggest = (list) => {
    const max = Math.max.apply(null, list);
    list.splice(list.indexOf(max), 1); 
    return Math.max.apply(null, list); 
}
res = findSecondBiggest([1,2,3,4,5]);
let res2 = findSecondBiggest([12,11,14,15]);
console.log("findSecondBiggest of [1,2,3,4,5] = " + res );
console.log("findSecondBiggest of [12,11,14,15] = " + res2 );

const printFibo = (n,a,b) => {
    let i;
    const fib = []; // Initialize array!
    
    fib[0] = a;
    fib[1] = b;
    for (i = 2; i < n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}
res = printFibo(10,0,1);
console.log("printFibo of (n=10,a=0,b=1) = " + res );

const getTime = () =>{
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const time = year + "-" + month+ "-" + day+ " " + h + ":" + m + ":" + s + " " ;
  
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(getTime, 1000);

}
getTime();

