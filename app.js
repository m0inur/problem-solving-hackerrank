document.getElementById("btn5").addEventListener('click', function () {
    var btnVal2 = 0
    for (var i = 1; i < 9; i++) {
        var btnVal = document.getElementById("btn" + i).textContent;
        // if (btnVal2 < 9) {
        btnVal2 = parseInt(btnVal.slice(-1)) + 1
        // }

        document.getElementById("btn" + i).innerHTML = parseInt(btnVal2)
        document.getElementById("btn" + btnVal2).innerHTML = parseInt(btnVal)
    }

    document.getElementById("btn1").innerHTML = "2"
    document.getElementById("btn2").innerHTML = "1"

});