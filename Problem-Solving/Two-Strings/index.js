function twoStrings(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1[i]) >= 0) {
            return "YES";
        }
    }

    return "NO"
}