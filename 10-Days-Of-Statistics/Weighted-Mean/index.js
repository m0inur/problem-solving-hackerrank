function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var arr = input[1].split(" ");
    var weights = input[2].split(" ");

    var mean = 0;
    var weightSum = 0;

    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        weights[i] = parseInt(weights[i]);

        weightSum += weights[i];
        mean += arr[i] * weights[i];
    }

    console.log((mean / weightSum).toFixed(1));
}