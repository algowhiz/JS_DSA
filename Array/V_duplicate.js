const arr = [1, 3, 4, 20, 50, 50 , 55 , 200, 200];

// console.log(arr.indexOf(51));

function Duplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

const result = Duplicates(arr);
console.log(result);
