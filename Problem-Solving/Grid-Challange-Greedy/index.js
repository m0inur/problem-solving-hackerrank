function isSorted(a) {
    for (var x = 0; x < a.length; x++) {
        if (a[x].charCodeAt(0) > a[x + 1].charCodeAt(0)) {
            return false;
        }

        if (x == a.length - 2) {
            return true;
        }
    }
}

function mySort(a) {
    var index = 0;
    var sorted = false;
    var i = 0;
    while (!sorted) {
        if (a[i + 1]) {
            if (a[i].charCodeAt(0) > a[i + 1].charCodeAt(0)) {
                index = a[i];
                a.splice(i, 1, a[i + 1]);
                a.splice(i + 1, 1, index);
            }
        } else {
            if (isSorted(a)) {
                return a;
            } else {
                i = -1;
            }
        }
        i++;
    }
}

// Complete the gridChallenge function below.
function gridChallenge(arr) {
    var hori = [];
    var index = 0;
    // Sort array
    for (var i = 0; i < arr.length; i++) {
        arr[i] = mySort(arr[i].split(''));
    }
    for (var i = 0; index < arr.length; i++) {
        hori.push(arr[i][index]);
        // console.log(hori);
        if (i == arr[index].length - 2) {
            console.log(hori);
            for (var j = 0; j < hori.length; j++) {
                if (hori[j + 1]) {
                    if (hori[j].charCodeAt(0) > hori[j + 1].charCodeAt(0)) {
                        return "NO";
                    }
                }
            }

            index++;
            hori = [];
            i = -1
        }
    }
    return "YES"
}

var arr = ["mpxz", "abcd", "wlmf"];
// var arr = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];
console.log(gridChallenge(arr));