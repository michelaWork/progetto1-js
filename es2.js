var arr = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

for(var i = 0; i < arr.length; i++) {
    for(var j=i+1; j < arr.length; j++) {
        if(arr[i] < arr[j]) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("Array:: ", arr);