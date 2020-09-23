// Complete the workbook function below.
function workbook(chapters, probPerPage, arr) {
    var page = 0;
    var specialProbs = 0;

    for (var i = 1; i <= chapters; i++) {
        page++;

        for (var j = 1; j <= arr[i - 1]; j++) {
            if (page == j) {
                specialProbs++;
            }

            if (j % probPerPage == 0 && j != arr[i - 1]) {
                page++;
            }
        }
    }

    return specialProbs;
}