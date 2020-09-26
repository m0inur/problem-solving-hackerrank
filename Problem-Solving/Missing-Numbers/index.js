var str = "11 4 11 7 13 4 12 11 10 14";
var str1 = "11 4 11 7 3 7 10 13 4 8 12 11 10 14 12";

var arr = str.split(" ");
var bArr = str1.split(" ");

var arrMap = new Map();
var bArrMap = new Map();

var occur = 0;
var missing = [];

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

function mySorter(a) {
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

for (var i = 0; i < bArr.length; i++) {
    occur = 0;
    if (bArrMap.get(bArr[i])) {
        occur = bArrMap.get(bArr[i]);
        occur++;
        bArrMap.delete(bArr[i]);
        bArrMap.set(bArr[i], occur);
    } else {
        occur++;
        bArrMap.set(bArr[i], occur);
    }
    occur = 0;
    if (arr[i]) {
        if (arrMap.get(arr[i])) {
            occur = arrMap.get(arr[i]);
            occur++;
            arrMap.delete(arr[i]);
            arrMap.set(arr[i], occur);
        } else {
            occur++;
            arrMap.set(arr[i], occur);
        }
    }
}

for (let [key, value] of bArrMap) {
    if (arrMap.has(key)) {
        if (arrMap.get(key) != value) {
            missing.push(parseInt(key));
        }
    } else {
        missing.push(parseInt(key));
    }
}

missing = mySorter(missing);
return missing;