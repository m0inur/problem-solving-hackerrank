function maximumPerimeterTriangle(sticks) {
    sticks = sticks.sort((a, b) => a - b);
    var res = [-1];
    var pre = 0;

    var a = 0;
    var b = 0;
    var c = 0;

    if (sticks.length == 3) {
        if (sticks[0] + sticks[1] <= sticks[2]) {
            return [-1];
        }
    } else {
        for (var i = 1; i < sticks.length - 1; i++) {
            a = sticks[i - 1];
            b = sticks[i];
            c = sticks[i + 1];

            if (a + b > c) {
                var totalSum = a + b + c;
                if (totalSum >= pre) {
                    pre = totalSum;
                    res = [a, b, c];
                }
            }
        }

        return res
    }
}