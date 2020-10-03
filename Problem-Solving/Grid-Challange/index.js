function gridChallenge(grid) {
    for (var i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join('');
    }

    for (var i = 0; i < grid[0].length; i++) {
        for (var j = 0; j < grid.length - 1; j++) {
            if (grid[j][i].charCodeAt(0) > grid[j + 1][i].charCodeAt(0)) {
                return "NO";
            }
        }
    }

    return "YES";
}