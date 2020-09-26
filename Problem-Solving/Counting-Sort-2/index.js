function countingSort(arr) {
    var occur = [];
    var printed = [];
    var ans = [];

    arr = arr.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < 100; i++) {
        occur.push(0);
    }

    for (var i = 0; i < arr.length; i++) {
        occur[arr[i]] += 1;
    }

    for (var i = 0; i < arr.length; i++) {
        if (!printed.includes(arr[i])) {
            printed.push(arr[i]);
            for (var j = 0; j < occur[arr[i]]; j++) {
                ans.push(arr[i]);
            }
        }
    }

    return ans;
}