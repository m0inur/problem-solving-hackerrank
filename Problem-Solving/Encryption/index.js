function encryption(s) {
    var n = s.length;
    var rows = Math.floor(Math.sqrt(n));
    var columns = Math.ceil(Math.sqrt(n));

    var arr = [];
    var str = "";

    if ((rows + 1) * 2 < n) {
        rows++;
    }

    if (rows * columns < n) {
        rows++;
    }

    for (var i = 0; i < rows; i++) {
        arr.push(s.slice(0, columns));
        s = s.slice(columns);
    }

    for (var i = 0; i < arr[0].length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j][i]) {
                str += arr[j][i];
            }
        }
        str += " ";
    }

    return str;
}