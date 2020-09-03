var arr = [1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23];

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    var last_element = arr[n - 1];
    var last_index = 0;

    var counter = 0;
    var isSorted = false;

    for (var i = 1; i <= n; i++) {
        if (arr[n - i] > last_element) {
            arr[n - i + 1] = arr[n - i];
            console.log(arr.join(" "))
            last_index = n - i;
        } else {
            if (counter != 0) {
                arr[last_index] = last_element;
                console.log(arr.join(" "))
                isSorted = true;
                return;
            }
            counter++;
        }

        if (i == n) {
            if (!isSorted) {
                arr[n - i] = last_element;
                console.log(arr.join(" "))
            }
            return;
        }
    }
}

insertionSort1(arr.length, arr);