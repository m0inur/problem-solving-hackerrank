function gameOfStones(n) {
    if (n % 7 == 1 || n % 7 == 0) {
        return "Second";
    } else {
        return "First";
    }
}