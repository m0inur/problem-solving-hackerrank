function icecreamParlor(money, cost) {
    var index = [];
    var found = false;

    for (var i = 0; i < cost.length; i++) {
        if (found) {
            break;
        }

        for (var j = 0; j < cost.length; j++) {
            if (i != j) {
                if (cost[i] + cost[j] == money) {
                    index.push(i + 1, j + 1);
                    found = true;
                    break;
                }
            }
        }
    }

    return index;
}