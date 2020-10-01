function lonelyinteger(a) {
    for (var i = 0; i < a.length; i++) {
        if (a.toString().split(a[i]).length - 1 == 1) {
            return a[i];
        }
    }
}