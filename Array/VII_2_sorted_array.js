// const arr1 = [1, 3, 5, 6];
// const arr2 = [2, 4, 6, 7];

// let n = arr1.length - 1;
// let m = arr2.length - 1;

// let i = 0, j = 0;

// let res_arr = [];

// while (i <= n && j <= m) {
//     if (arr1[i] <= arr2[j]) {
//         res_arr.push(arr1[i]);
//         i++;
//     }
//     else {
//         res_arr.push(arr2[j])
//         j++;
//     }

// }

// while (i <= n) {
//     res_arr.push(arr1[i]);
//     i++;
// }


// while (j <= m) {
//     res_arr.push(arr2[j]);
//     j++;
// }

// console.log(res_arr);


// sol 2 
// const arr1 = [1, 3, 5, 6];
// const arr2 = [2, 4, 6, 7];

// let i = 0, j = 0;
// let res_arr = [];

// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//         res_arr.push(arr1[i]);
//         i++;
//     } else {
//         res_arr.push(arr2[j]);
//         j++;
//     }
// }


// res_arr.push(...arr1.slice(i), ...arr2.slice(j));

// console.log(res_arr);