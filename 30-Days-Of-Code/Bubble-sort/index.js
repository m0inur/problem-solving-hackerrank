var a = [3, 2, 1, 4, 0, 4, 5, 7, 2, 6, 6, 3, 1, 34, 35, 4, 6, 58, 78, 2, 34, 435, 54, 7, 6, 8];
var i = 0;
var sorted = false;
var swaps = 0;

function isSorted(a) {
    for (var x = 0; x < a.length; x++) {
        if (a[x] > a[x + 1]) {
            return false;
        }

        if (x == a.length - 1) {
            return true;
        }
    }
}

while (!sorted) {
    i++;

    if (a[i] > a[i + 1]) {
        var index = a[i];
        a.splice(i, 1, a[i + 1]);
        a.splice(i + 1, 1, index);

        swaps++;
    }

    if (i == a.length - 1) {
        if (isSorted(a)) {
            break;
        } else {
            i = -1;
        }
    }
}

console.log("Array is sorted in " + swaps + " swaps.")
console.log("First Element: " + a[0]);
console.log("Last Element: " + a[a.length - 1]);