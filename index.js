function squares(a, b) {
    var found = 0;

    for (var i = 1; i * i < a; i++) {

    }

    while (i * i <= b) {
        found++;
        i++;
    }

    return found
}

console.log(squares(0, 999999))