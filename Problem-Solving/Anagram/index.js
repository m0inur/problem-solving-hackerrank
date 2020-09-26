function anagram(s) {
    var n = s.length;
    if (n % 2 !== 0) {
        return -1;
    }
    var a = s.slice(0, n / 2);
    var b = s.slice((n / 2));
    var count = 0;
    for (let i = 0; i < n / 2; i++) {
        a.includes(b[i]) ? a = a.replace(b[i], "") : count++;

    }
    return count;
}