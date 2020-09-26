var n = 50;

function fact(n) {
    var sum = 0;

    if (n == 1) {
        return 1;
    }

    sum = n * fact(n - 1);
    return sum;
}


console.log(fact(n));