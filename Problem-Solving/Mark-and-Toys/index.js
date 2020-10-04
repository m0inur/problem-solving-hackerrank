function maximumToys(prices, k) {
    var toys = 0;
    prices.sort((a, b) => a - b);

    for (let i = 0; k - prices[i] > 0; i++) {
        toys++;
        k -= prices[i];
    }

    return toys;
}