function processData(input) {
    var mean = 0;
    var distance = 0;
    var distSum = 0;
    input = input.split("\n")[1].split(" ");

    for (var i = 0; i < input.length; i++) {
        input[i] = parseInt(input[i]);
        mean += input[i];
    }

    mean = (mean / input.length).toFixed(1);

    for (var i = 0; i < input.length; i++) {
        distance = Math.pow((input[i] - mean), 2);

        distSum += distance;
    }

    console.log(Math.sqrt(distSum / input.length).toFixed(1));
}