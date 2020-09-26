//Enter your code here
var fine = 0;
var myInput = input.split("\n");

var actual = myInput[0].split(" ");
var expected = myInput[1].split(" ");

for (var i = 0; i < actual.length; i++) {
    actual[i] = parseInt(actual[i]);
    expected[i] = parseInt(expected[i]);
}

if (actual[0] <= expected[0] && actual[1] <= expected[1] && actual[2] <= expected[2]) {
    fine = 0;
} else if (actual[0] > expected[0] && actual[1] == expected[1] && actual[2] == expected[2]) {
    fine = 15 * (actual[0] - expected[0]);
} else if (actual[1] > expected[1] && actual[2] == expected[2]) {
    fine = 500 * (actual[1] - expected[1])
} else if (actual[2] != expected[2] && actual[2] > expected[2]) {
    fine = 10000;
}

console.log(fine);