var arr = "RBY_YBR".split('');

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[i + 1] == "_") {
            arr[i + 1] = arr[arr.lastIndexOf(arr[i].toString())];
            arr[arr.lastIndexOf(arr[i].toString())] = "_";
        }
    }
}

console.log(arr)