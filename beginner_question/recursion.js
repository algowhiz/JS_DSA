// // given num n find the first n ele of the fibonacci sequence....
// function recursion(n){
//     if(n<2) return n;

//     return recursion(n-1) + recursion(n-2);
// }


// console.log(recursion(4));
// console.log(recursion(7));
// console.log(recursion(10));

function fact(n){
    // let ans=1;

    // for(let i=n;i>0;i--){
    //     ans*=i;
    // }

    // return ans;
     if(n==0) return 1;

    return n*fact(n-1);
}

console.log(fact(4));
console.log(fact(7));
console.log(fact(10));