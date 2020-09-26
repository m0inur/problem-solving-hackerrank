function pageCount(n, p) {
    var pages = [];
    var book = [];
    var flipped = -1;
    var i = 1;
    var failsafe = 0;

    var forwardCounter = 0;
    var backwardCounter = 0;
    var foundReversed = false;

    for (i = 1; pages[0] != n; i += 2) {
        if (pages[1] != n) {
            pages = [];
            pages.push(i - 1);
            pages.push(i);

            book.push(pages);
        } else {
            break;
        }
    }

    var i = 0

    console.log(book);
    console.log();

    for (i = 0; i < book.length; i++) {
        if (book[i].indexOf(p) > -1) {
            forwardCounter = i;
        }

        if (book[book.length - (i + 1)].indexOf(p) > -1) {
            foundReversed = true;
        }

        if (foundReversed == false) {
            backwardCounter++;
        }
    }

    if (forwardCounter < backwardCounter) {
        return forwardCounter;
    } else {
        return backwardCounter;
    }
}