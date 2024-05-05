const arr = [1000, 3, 4, 2, 5 , 200];

// sol 1 

const maxi = (arr) =>{
    let maxi=arr[0];

    for(let i = 1 ; i <= arr.length - 1 ; i++){
        if(arr[i] > maxi){
            maxi=arr[i];
        }
    }

    return maxi;
}


console.log(maxi(arr));