function processData(arr) {
    //Enter your code here
    arr = arr.split("\n")[1].split(" ");
    var medianX = 0;
    var medianL = 0;
    var medianH = 0;

    var lowerHalf = [];
    var higherHalf = [];

    arr.sort((a, b) => a - b);

    if (arr.length % 2 == 0) {
        higherHalf = arr.slice(Math.floor(arr.length / 2), arr.length);
        medianX = (parseInt(arr[Math.floor(arr.length / 2)]) + parseInt(arr[Math.floor(arr.length / 2) - 1])) / 2;

    } else {
        higherHalf = arr.slice(Math.floor(arr.length / 2) + 1, arr.length);
        medianX = (parseInt(arr[Math.floor(arr.length / 2)]));
    }

    lowerHalf = arr.slice(0, Math.floor(arr.length / 2));

    lowerHalf.sort((a, b) => a - b);
    higherHalf.sort((a, b) => a - b);

    if (lowerHalf.length % 2 == 0) {
        medianL = (parseInt(lowerHalf[Math.floor(lowerHalf.length / 2)]) + parseInt(lowerHalf[Math.floor(lowerHalf.length / 2) - 1])) / 2;
    } else {
        medianL = (parseInt(lowerHalf[Math.floor(lowerHalf.length / 2)]));
    }

    if (higherHalf.length % 2 == 0) {
        medianH = (parseInt(higherHalf[Math.floor(higherHalf.length / 2)]) + parseInt(higherHalf[Math.floor(higherHalf.length / 2) - 1])) / 2;
    } else {
        medianH = (parseInt(higherHalf[Math.floor(higherHalf.length / 2)]));
    }

    console.log(Math.floor(medianL));
    console.log(Math.floor(medianX));
    console.log(Math.floor(medianH));
}