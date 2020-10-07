function getTotalX(a, b) {
    var count = 0;

    for (let x = 0; x <= 100; x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                count++;
            }
        }
    }

    return count;
}