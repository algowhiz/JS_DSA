function binarySearch(arr,n){
    
    let st=0,ed=arr.length-1;

    while(st<=ed){
        let mid=Math.floor((st+ed)/2);

        if(arr[mid] == n ){
            return mid+1;
        }

        else if(arr[mid] > n ){
            ed=mid-1;
        }

        else    
            st=mid+1;
    }

    return -1;
    
}

console.log(binarySearch([-5,2,4,6],1));
console.log(binarySearch([-5,2,4,6],6));