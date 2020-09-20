function rotateLeft(d, arr) {
    for (var i = 0; i < d; i++) {
        arr.push(arr[0]);
        arr.splice(0, 1);
    }

    return arr;
}