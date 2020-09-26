var first = true;
var second = true;
var P1 = true;
var P2 = true;

var moves = 4;
var won = false;
var failsafe = 0;

if (moves == 1) {
    first = false;
    won = true;
}

while (!won) {
    if (moves == 1) {
        if (P1) {
            console.log("P1 Remove 1");
            moves -= 1;
            P1 = false;
            P2 = true;
        } else if (P2) {
            console.log("P2 Remove 1");
            moves -= 1;
            P1 = true;
            P2 = false;
        }
    }

    if (moves == 2) {
        if (P1) {
            console.log("P1 Remove 2");
            moves -= 2;
            P1 = false;
            P2 = true;
        } else if (P2) {
            console.log("P2 Remove 2");
            moves -= 2;
            P1 = true;
            P2 = false;
        }
    }

    if (moves >= 3 && moves < 5) {
        if (P1) {
            console.log("P1 Remove 3");
            moves -= 3;
            P1 = false;
            P2 = true;
        } else if (P2) {
            console.log("P2 Remove 3");
            moves -= 3;
            P1 = true;
            P2 = false;
        }
    }

    if (moves >= 5) {
        if (P1) {
            console.log("P1 Remove 5");
            moves -= 5;
            P1 = false;
            P2 = true;
        } else if (P2) {
            console.log("P2 Remove 5");
            moves -= 5;
            P1 = true;
            P2 = false;
        }
    }

    if (moves <= 0) {
        won = true;
        console.log(moves)
        console.log(P1);
        console.log(P2)
        if (P2) {
            first = true;
        }

        if (P1) {
            second = true;
        }
    }
}

if (first) {
    console.log("First");
}

if (second) {
    console.log("Second");
}