function insertionSort2(n, arr) {
    var counter = -1;
    var value = 0;
    for (var i = 1; i < n; i++) {
        counter++;
        for (var j = 0; j <= counter; j++) {
            if (arr[i] < arr[j]) {
                value = arr[i];
                arr.splice(i, 1, arr[j]);
                arr.splice(j, 1, value);
            }
        }
        console.log(arr.join(' '));
    }
}