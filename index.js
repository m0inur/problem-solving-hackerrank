function flatlandSpaceStations(n, c) {
    var distances = [];
    var minuses = [];

    for (let i = 0; i < n; i++) {
        if (c.includes(i)) {
            distances.push(0);
        } else {
            minuses = [];

            for (let j = 0; j < c.length; j++) {
                minuses.push(Math.abs(i - c[j]));
            }

            distances.push(Math.min(...minuses));
        }
    }

    return Math.max(...distances);
}