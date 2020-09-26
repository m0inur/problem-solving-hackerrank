var arr = ["abcdde", "baccd", "eeabg"];

function gemstones(arr) {
    let counter = 0;
    for (let i = 97; i <= 122; i++) {
        if (arr.every(element => element.includes(String.fromCharCode(i)))) {
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(gemstones(arr));