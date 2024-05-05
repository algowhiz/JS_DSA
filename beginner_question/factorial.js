function fact(n){
    let ans=1;

    for(let i=n;i>0;i--){
        ans*=i;
    }

    return ans;
}




console.log(fact(4));
console.log(fact(7));
console.log(fact(10));