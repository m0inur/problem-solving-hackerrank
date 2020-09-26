var m = 4;
var arr = [1, 4, 5, 3, 2];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] == m) {
            console.log("summed to 4");
        }
    }
}