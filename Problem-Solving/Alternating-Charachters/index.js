function alternatingCharacters(string) {
    var deletes = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] == "A" && string[i + 1] == "A" || string[i] == "B" && string[i + 1] == "B") {
            string = string.slice(0, i) + string.slice(i + 1);
            i--;
            deletes++;
        }
    }

    return deletes;
}