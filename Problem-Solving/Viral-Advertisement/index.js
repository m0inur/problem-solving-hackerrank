var cumulative = 0;
var shares = 5;
var like = 0;
var days = n;

while (days >= 1) {
    days--;
    like = Math.floor(shares / 2);
    cumulative += like;
    shares = Math.floor(shares / 2) * 3;
}

return cumulative;