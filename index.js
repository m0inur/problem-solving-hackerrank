function isEven(B) {
    for (var i = 0; i < B.length; i++) {
        if (B[i] % 2 != 0) {
            return false;
        }

        if (i == B.length - 1) {
            return true;
        }
    }
}

function fairRations(B) {
    var loafs = 0;
    var ans;

    for (var i = 0; i < B.length; i++) {
        if (B[i] % 2 != 0) {
            if (B[i + 1]) {
                B[i] += 1;
                B[i + 1] += 1;
            } else {
                B[i] += 1;
                B[i - 1] += 1;
            }
            loafs += 2;
        }

        if (i == B.length - 1) {
            if (isEven(B)) {
                ans = loafs;
                break;
            } else {
                ans = "NO"
            }
        }
    }

    return ans;
}