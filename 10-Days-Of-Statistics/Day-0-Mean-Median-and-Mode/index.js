var occurOf = (number, numbers) => numbers.reduce((counter, currentNumber) => (number === currentNumber ? counter + 1 : counter), 0);

function processData(arr) {
    arr = arr.split(" ")
    var arr0 = arr[0].split('');
    var sum = 0;
    var occur = 0;
    var maxOccur = 0;

    var mean = 0;
    var median = 0;
    var mode = [];

    while (arr0.includes("\n")) {
        arr0.splice(0, 1);
    }

    arr[0] = arr0;
    arr[0] = arr[0].join('');

    // Mean
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        sum += arr[i];
    }

    mean = sum / arr.length;

    // Median
    arr.sort((a, b) => a - b);

    median += (parseInt(arr[Math.floor(arr.length / 2)]) + parseInt(arr[Math.floor(arr.length / 2) - 1])) / 2;

    // Mode
    for (var i = 0; i < arr.length; i++) {
        occur = occurOf(arr[i], arr);

        if (occur > maxOccur) {
            mode = [];
            maxOccur = occur;
        }

        if (occur == maxOccur) {
            mode.push(arr[i]);
        }
    }

    console.log(mean);
    console.log(median);
    console.log(Math.min(...mode));
}