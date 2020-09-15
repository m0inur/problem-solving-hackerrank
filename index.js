// Complete the beautifulBinaryString function below.
function beautifulBinaryString(b) {
    var counter = 0;

    for (var i = 0; i < b.length; i++) {
        if (b[i] == 0 && b[i + 1] == 1 && b[i + 2] == 0) {
            i += 2;
            counter++;
        }
    }

    return counter;
}