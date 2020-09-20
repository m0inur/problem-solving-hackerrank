function kaprekarNumbers(p, q) {
    var l = 0;
    var r = 0;
    var n = 0;
    var org = n;
    var d = 0;
    var kaprekarNums = 0;

    for (var i = p; i <= q; i++) {
        n = i;
        org = n;
        d = n.toString().length;
        n = Math.pow(n, 2);

        l = 0;
        r = 0;

        n = n.toString();

        if (n.length % 2 == 0) {
            l = n.slice(0, n.length / 2);
            r = n.slice(n.length / 2, n.length);
        } else {
            l = n.slice(0, (n.length - 1) / 2);
            r = n.slice(n.length / 2, n.length);
        }


        if (r.length == d) {
            l = parseInt(l);
            r = parseInt(r);

            if (l) {
                if (l + r == org) {
                    process.stdout.write(org + " ")
                    kaprekarNums++;
                }
            } else {
                if (r == org) {
                    process.stdout.write(org + " ")
                    kaprekarNums++;
                }
            }
        }
    }

    if (kaprekarNums == 0) {
        console.log("INVALID RANGE");
    }
}