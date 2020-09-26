const int = 2;

function processData(input) {
    if (input % 2 == 0) {
        console.log("Not prime");
    } else if (input % 3 == 0 || input % 5 == 0 || input % 7 == 0 || input % 11 == 0) {
        console.log("Not prime");
    } else {
        console.log("Prime");
    }
}

processData(int);