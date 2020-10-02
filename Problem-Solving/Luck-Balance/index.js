function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    } else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

// Complete the luckBalance function below.
function luckBalance(k, contests) {
    var luck = 0;
    var lost = 0;
    contests.sort(sortFunction);

    for (var i = 0; i < contests.length; i++) {
        if (contests[i][1] == 0) {
            luck += contests[i][0];
        } else {
            if (k != lost) {
                luck += contests[i][0];
                lost++;
            } else {
                luck -= contests[i][0];
            }
        }
    }

    return luck;
}