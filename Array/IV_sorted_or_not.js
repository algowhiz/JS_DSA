const arr = [1, 3, 4, 20, 50 , 200];

const check  = ( arr ) =>{
    let sorted = true;

    for(let i = 0 ; i <= arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            sorted=false;
            break;
        }
    }

    return sorted;
}

console.log(check(arr));