function caesarCipher(str, k) {
    var lowercaseRegex = RegExp(/[a-z]/);
    var highercaseRegex = RegExp(/[A-Z]/);
    var newStr = "";
    var index = 0;

    // letter generator start and end points
    var start = 'a'.charCodeAt(0);
    var last = 'z'.charCodeAt(0);

    // Letter maps
    var orgLettersArr = [];
    var changedLetters = new Map();
    var orgLetters = new Map();

    // Counters
    var keyCounter = 0;
    var counter = 0;
    var counter2 = 0;
    var iterate = 0;

    // Generate Alphabets

    for (var i = start; i <= last; i++) {
        orgLettersArr.push(String.fromCharCode(i));
    }

    for (var i = 0; i < k; i++) {
        index = orgLettersArr[0];
        orgLettersArr.splice(0, 1);
        orgLettersArr.push(index);
    }

    for (var i = start; i <= last; i++) {
        keyCounter++;
        changedLetters.set(keyCounter, orgLettersArr[iterate]);
        orgLetters.set(String.fromCharCode(i), keyCounter);
        iterate++;
    }

    for (var i = 0; i < str.length; i++) {
        if (lowercaseRegex.test(str[i])) {
            newStr += changedLetters.get(orgLetters.get(str[i]));
        }

        if (highercaseRegex.test(str[i])) {
            newStr += changedLetters.get(orgLetters.get(str[i].toLowerCase())).toUpperCase();
        }

        if (!lowercaseRegex.test(str[i]) && !highercaseRegex.test(str[i])) {
            newStr += str[i];
        }
    }

    return newStr;
}