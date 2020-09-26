function numberSort(a, b) {
    return a - b;
};

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    var failsafe = 0;
    var counter = 0;
    var hourglasses = [];

    for (var i = 0; i < arr.length - 2; i++) {
        counter = 0;
        for (var j = 0; j < arr[0].length - 2; j++) {
            hourglasses.push(arr[i].slice(j, 3 + j), arr[i + 1].slice(1 + j, 2 + j), arr[i + 2].slice(j, 3 + j));
        }
    }
    var sums = [];
    var sum = 0;
    var counter = 0;

    for (var i = 0; i < hourglasses.length; i++) {
        counter++;
        for (var j = 0; j < hourglasses[i].length; j++) {
            sum += hourglasses[i][j];
        }

        if (counter == 3) {
            sums.push(sum)
            sum = 0;
            counter = 0;
        }
    }

    sums.sort(numberSort);
    console.log(sums[sums.length - 1]);
}