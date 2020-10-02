function minimumAbsoluteDifference(arr) {
    arr.sort();
    var smallestDiff;

    for (var i = 0; i < arr.length - 1; i++) {
        if (smallestDiff == undefined) {
            smallestDiff = Math.abs(arr[i] - arr[i + 1]);
        }

        smallestDiff = Math.min(Math.abs(arr[i] - arr[i + 1]), smallestDiff);
        if (smallestDiff == 0) {
            return 0;
        }
    }

    return smallestDiff;
}