function binarySearch(arr,n){
    
    return search(arr,n,0,arr.length - 1);
    
}

function search(arr,n,st,ed){
    
    if(st>ed) return -1;
    
    let mid=Math.floor((st+ed)/2);
    
    if(arr[mid]==n) return mid+1;

    if(n < arr[mid]) {
        return search(arr,n,st,mid-1);
    }
    else
        return search(arr,n,mid+1,ed);


}


console.log(binarySearch([-5,2,4,6],1));
console.log(binarySearch([-5,2,4,6],6));