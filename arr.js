function available(arr, n, target){
    for(let i = n; i < arr.length; i++){
        if(arr[i]==target){
            return true;
        }
    }
    return false;
}

arr = [1, 2, 3, 1, 4, 2, 5, 6, 1];
const n = arr.length;

arr.push(arr[0]);

for(let i = 1; i < n; i++){
    if(!available(arr, n, arr[i])){
        arr.push(arr[i]);
    }
}

let size = n;
while(size){
    arr.shift();
    size--;
}
console.log(arr);