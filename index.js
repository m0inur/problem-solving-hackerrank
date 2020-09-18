function cutTheSticks(arr) {
    var output = [];
    while (arr.length != 0) {

        var minVal = Math.min(...arr);
        output.push(arr.length);
        for (var i = 0; i < arr.length; i++) {
            var sub = arr[i] - minVal;

            if (sub === 0) {
                arr.splice(i, 1);
                i -= 1;
            } else {
                arr[i] = sub;
            }
        }
    }
    return output;
}