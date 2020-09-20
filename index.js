function circularArrayRotation(arr, k, queries) {
    var newArr = [];

    for (var i = 0; i < k; i++) {
        arr.unshift(arr[arr.length - 1]);
        arr.splice(arr.length - 1, 1);
    }

    for (var i = 0; i < queries.length; i++) {
        newArr.push(arr[queries[i]]);
    }

    return newArr;
}