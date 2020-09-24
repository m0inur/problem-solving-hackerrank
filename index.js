function countingSort(arr) {
    var occur = [];

    console.log(arr.sort(function (a, b) {
        return a - b;
    }))

    for (var i = 0; i < 100; i++) {
        occur.push(0);
    }

    for (var i = 0; i < arr.length; i++) {
        occur[arr[i]] += 1;
    }

    return occur;
}