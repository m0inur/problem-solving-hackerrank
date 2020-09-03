function chocolateFeast(n, c, m) {
    var candy = n / c;
    var wrappers = candy;

    while (wrappers >= m) {
        wrappers -= m;
        candy++;
        wrappers += 1;
    }

    return Math.floor(candy);
}