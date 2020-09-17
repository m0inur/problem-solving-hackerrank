function isSorted(a) {
    for (var x = 0; x < a.length; x++) {
        if (a[x] < a[x + 1]) {
            return false;
        }

        if (x == a.length - 1) {
            return true;
        }
    }
}

function mySort(a) {
    var index = 0;
    var sorted = false;
    var i = 0;
    while (!sorted) {
        i++;

        if (a[i] < a[i + 1]) {
            index = a[i];
            a.splice(i, 1, a[i + 1]);
            a.splice(i + 1, 1, index);
        }

        if (i == a.length - 1) {
            if (isSorted(a)) {
                return a;
            } else {
                i = -1;
            }
        }
    }
}

function marcsCakewalk(calories) {
    mySort(calories);
    var result = 0;
    var eaten = 0;

    for (var i = 0; i < calories.length; i++) {
        result += Math.pow(2, eaten) * calories[i];
        eaten++;
    }

    return result;
}