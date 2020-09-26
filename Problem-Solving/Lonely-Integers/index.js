var arr = [1, 1, 2];
var counter = 0;

for (var i = 0; i < arr.length; i++) {
    if (counter >= 2) {

    }

    for (var j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            counter++;
        }
    }
}