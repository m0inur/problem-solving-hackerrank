function toys(w) {
    w.sort((a, b) => a - b);
    var packs = 1;
    var num = w[0];

    for (let i = 1; i < w.length; i++) {
        if (w[i] > num + 4) {
            num = w[i];
            packs++;
        }
    }

    return packs;
}