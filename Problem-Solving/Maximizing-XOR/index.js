function maximizingXor(l, r) {
    var maxXOR = 0;

    for (var i = l; i <= r; i++) {
        for (var j = i; j <= r; j++) {
            if ((i ^ j) > maxXOR) {
                maxXOR = (i ^ j);
            }
        }
    }

    return maxXOR;
}