function funnyString(string) {
    var original = [];
    var org = [];
    var reversed = [];

    var originalDiff = [];
    var reversedDiff = [];
    var isMatched = true;

    for (var i = 0; i < string.length; i++) {
        original.push(string[i].charCodeAt(0));
        org.push(string[i].charCodeAt(0));
    }

    reversed = original.reverse();

    for (var i = 0; i < org.length - 1; i++) {
        originalDiff.push(Math.abs(org[i] - org[i + 1]));
        reversedDiff.push(Math.abs(reversed[i] - reversed[i + 1]));
    }

    for (var i = 0; i < org.length - 1; i++) {
        if (originalDiff[i] != reversedDiff[i]) {
            isMatched = false;
        }
    }

    if (isMatched) {
        return "Funny";
    } else {
        return "Not Funny";
    }
}