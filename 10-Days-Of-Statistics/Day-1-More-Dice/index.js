var dice1 = [1, 2, 3, 4, 5, 6];
var counter = 0;
var diff = 0;

for (let i = 0; i < dice1.length; i++) {
    diff = Math.abs(dice1[i] - 6)
    if (dice1.includes(diff)) {
        // Unique Values
        if (dice1[i] != diff) {
            counter++;
        }
    }
}

console.log(counter / counter + "/" + (Math.pow(dice1.length, 2) / counter));