var arr = [5, 4, 3, 2];

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

function sortArr(arr) {
    var a = arr;

    var i = 0;
    var sorted = false;
    var swaps = 0;

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
    return a;
}

var anotherArr = [];

arr = sortArr(arr)

// console.log(arr);

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] - arr[j] == 1) {
            // console.log("(" + arr[j] + "," + arr[i] + ")");
            anotherArr.push(arr[j])
            anotherArr.push(arr[i])
        }
    }
}

console.log(anotherArr.join(" "));