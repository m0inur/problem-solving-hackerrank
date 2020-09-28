var dice1 = [1, 2, 3, 4, 5, 6];
var dice2 = [1, 2, 3, 4, 5, 6];
var counter = 0;

for (var i = 0; i < dice1.length; i++) {
    for (var j = 0; j < dice2.length; j++) {
        if (dice1[i] + dice2[j] > 9) {
            counter++;
        }
    }
}

console.log((Math.pow(dice1.length, 2) - counter) / 6 + "/" + Math.pow(dice1.length, 2) / 6);