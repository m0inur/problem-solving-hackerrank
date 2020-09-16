function pangrams(str) {
    // Turn string into all lowercase and remove whitespaces
    str = str.toLowerCase();
    str = str.replace(/ /g, '');
    var found = [];

    for (var i = 0; i < str.length; i++) {
        if (found.indexOf(str[i]) < 0) {
            found.push(str[i]);
        } else {
            str = str.slice(0, i) + str.slice(i);
        }
    }

    if (found.length == 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}