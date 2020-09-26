function processData(input) {
    input = input.split("\n");
    var arr = [];
    var frequencies = input[2].split(" ");
    input = input[1].split(" ");

    var q1 = 0;
    var q3 = 0;

    for (var i = 0; i < input.length; i++) {
        input[i] = parseInt(input[i]);
        for (var j = 0; j < frequencies[i]; j++) {
            arr.push(input[i]);
        }
    }

    arr.sort((a, b) => a - b);

    if (arr.length % 2 == 0) {
        var higherHalf = arr.slice(Math.floor(arr.length / 2), arr.length);
        var lowerHalf = arr.slice(0, Math.floor(arr.length / 2));
    } else {
        var higherHalf = arr.slice(Math.floor(arr.length / 2) + 1, arr.length);
        var lowerHalf = arr.slice(0, Math.floor(arr.length / 2));
    }


    if (higherHalf.length % 2 == 0) {
        q1 = ((lowerHalf[Math.floor(lowerHalf.length / 2)] + lowerHalf[Math.floor(lowerHalf.length / 2) - 1]) / 2).toFixed(1);
        q3 = ((higherHalf[Math.floor(higherHalf.length / 2)] + higherHalf[Math.floor(higherHalf.length / 2) - 1]) / 2).toFixed(1);
    } else {
        q1 = (lowerHalf[Math.floor(lowerHalf.length / 2)]);
        q3 = (higherHalf[Math.floor(higherHalf.length / 2)]);
    }

    console.log((q3 - q1).toFixed(1));
}