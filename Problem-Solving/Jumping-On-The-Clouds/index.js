var arr = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0];

// function jumpingOnClouds(arr) {
//     var player = 0;
//     var jumps = 0;

//     for (var i = 0; i + 1 < arr.length; i++) {
//         if (arr[i + 1] == 1) {
//             player = arr[i + 2];
//             console.log("\nPlusing by 2")
//             console.log("I = " + (i + 2) + " Player = " + player)
//             i++;
//         } else {
//             player = arr[i + 1];
//             console.log("\nPlusing by 1")
//             console.log("I = " + (i + 1) + " Player = " + player)
//         }
//         jumps++;
//     }

//     return jumps;
// }
function jumpingOnClouds(arr) {
    var count = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == 0) i++;
        count++;
    }
    console.log(count);
}
console.log(jumpingOnClouds(arr));