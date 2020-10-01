function happyLadybugs(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] != "_") {
            if (str.split(str[i]).length - 1 == 1) {
                return "NO";
            }
        }
    }

    if (!str.includes("_")) {
        for (var i = 1; i < str.length - 1; i++) {
            if (str[i - 1] != str[i] && str[i] != str[i + 1]) {
                return "NO";
            }
        }
    }

    return "YES";
}