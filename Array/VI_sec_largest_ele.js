const arr = [1000, 3, 4, 2, 5 , 200];

// // sol 1 

// const maxi = (arr) =>{
//     let maxi=arr[0];
//     let sec_maxi=-1;

//     for(let i = 1 ; i <= arr.length - 1 ; i++){
//         if(arr[i] > maxi){
//             sec_maxi=maxi;
//             maxi=arr[i];
//         } else if(arr[i] > sec_maxi && arr[i] !== maxi) {
//             sec_maxi = arr[i];
//         }
//     }

//     return sec_maxi;
// }


// console.log(maxi(arr));

// //  sol 2 

// arr.sort((a,b) => a-b );
// let maxi=arr[arr.length-1];
// for(let i = arr.length - 2 ; i>=0;i--){
   
//     if(maxi > arr[i]) {
//         console.log(arr[i]);;
//         break;
//     }
// }