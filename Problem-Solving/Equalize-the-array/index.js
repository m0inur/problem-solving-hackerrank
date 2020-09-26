function equalizeArray(arr) {
    var deletes = 0;
    var highestOccur = 0;
    var biggestOccurIndex = 0;
    let occurMap = arr.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());

    for (let [key, value] of occurMap) {
        if (value > highestOccur) {
            highestOccur = value;
            biggestOccurIndex = key;
        }
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != biggestOccurIndex) {
            arr.splice(i, 1);
            i -= 1
            deletes++;
        }
    }

    return deletes;
}