function quickSort(arr) {
    var equal = arr[0];
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > equal) {
            right.push(arr[i]);
        } else if (arr[i] < equal) {
            left.push(arr[i]);
        }
    }

    return [left.join(' '), equal, right.join(' ')];
}