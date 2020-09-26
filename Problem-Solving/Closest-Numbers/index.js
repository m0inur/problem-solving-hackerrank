function closestNumbers(arr) {
    var min;
    var diff = 0;
    var ans = [];

    arr.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < arr.length; i++) {
        diff = Math.abs(arr[i] - arr[i + 1]);

        if (diff < min) {
            ans = [];
        }

        min = Math.min(min, diff) || diff;

        if (diff == min) {
            ans.push(arr[i], arr[i + 1]);
        }
    }

    return ans;
}