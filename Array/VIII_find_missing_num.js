const arr1 = [1, 2, 4, 5, 6, 7];

let n = arr1.length+1;

let sum = arr1.reduce((acc,it) => acc+it , 0);

let acctual_sum = (n*(n+1))/2;
console.log(acctual_sum);


console.log(acctual_sum-sum);