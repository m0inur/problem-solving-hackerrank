function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        var biggest = 0;
        var bitwise = 0;
        // console.log("ANOTHA 1");
        // console.log("K = " + k)
        for (var i = 1; i <= n; i++) {
            for (var j = i + 1; j <= n; j++) {
                // console.log(i&j);
                bitwise = i & j;
                if (bitwise > biggest) {
                    if (bitwise < k) {
                        biggest = bitwise;
                    }
                }
            }
        }
        console.log(biggest)
    }
}