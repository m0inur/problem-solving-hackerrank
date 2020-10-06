function pickingNumbers(arr) {
    var num = -1;
    var len = 0;
    var maxLen = 0;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (num < 0) {
            num = arr[i];
        }

        if (arr[i + 1] - num <= 1) {
            len++;
        } else {
            len++;
            if (maxLen < len) {
                maxLen = len;
            }

            num = -1;
            len = 0;
        }
    }

    return maxLen;
}