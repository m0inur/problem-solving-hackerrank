function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

// Complete the isValid function below.
function isValid(string) {
    var charCounts = [];
    for (var i = 0; i < string.length; i++) {
        charCounts.push(char_count(string, string[i]));
    }
    for (var i = 0; i < charCounts.length; i++) {
        if (charCounts[i] != charCounts[i + 1]) {
            if (charCounts[i] == charCounts[i + 1] - 1) {
                charCounts[i + 1] -= 1;
            }
        }
    }

    for (var i = 0; i < charCounts.length - 1; i++) {
        if (charCounts[i] != charCounts[i + 1]) {
            return "NO";
        }
    }
    return "YES";
}
console.log(isValid("abcdefghhgfedecba"));