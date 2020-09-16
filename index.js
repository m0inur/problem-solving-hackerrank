function stringConstruction(string) {
    var found = [];
    var append = 0;

    for (var i = 0; i < string.length; i++) {
        if (found.indexOf(string[i]) == -1) {
            found.push(string[i]);
            append++;
        }
    }

    return append;
}
