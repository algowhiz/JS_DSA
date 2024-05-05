function linearSearch(arr,n){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == n ){
            return i+1;
        }
    }
    return -1;
    
}

console.log(linearSearch([-5,2,10,4,6],10));
console.log(linearSearch([-5,2,10,4,6],11));
console.log(linearSearch([-5,2,10,4,6],55));