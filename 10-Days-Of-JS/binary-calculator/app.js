document.getElementById("btn0").addEventListener('click', function () {
    document.getElementById("res").value = document.getElementById("res").value + 0;
});

document.getElementById("btn1").addEventListener('click', function () {
    document.getElementById("res").value = document.getElementById("res").value + 1;
});

document.getElementById("btnClr").addEventListener('click', function () {
    document.getElementById("res").value = "";
});

document.getElementById("btnSum").addEventListener('click', function () {
    document.getElementById("res").value = document.getElementById("res").value + "+";
});

document.getElementById("btnSub").addEventListener('click', function () {
    document.getElementById("res").value = document.getElementById("res").value + "-";
});

document.getElementById("btnMul").addEventListener('click', function () {
    document.getElementById("res").value = document.getElementById("res").value + "*";
});

document.getElementById("btnDiv").addEventListener('click', function () {
    document.getElementById("res").value = document.getElementById("res").value + "/";
});

document.getElementById("btnEql").addEventListener('click', function () {
    var value = document.getElementById("res").value;

    if (value.indexOf("+") >= 0) {
        document.getElementById("res").value = parseInt(value.slice(0, value.indexOf("+") - value.length)) + parseInt(value.slice(value.indexOf("+"), value.length))
    }

    if (value.indexOf("-") >= 0) {
        document.getElementById("res").value = value.slice(0, value.indexOf("-") - value.length) - value.slice(value.indexOf("-") + 1, value.length)
    }

    if (value.indexOf("*") >= 0) {
        document.getElementById("res").value = parseInt(value.slice(0, value.indexOf("*") - value.length)) * value.slice(value.indexOf("*") + 1, value.length);
    }

    if (value.indexOf("/") >= 0) {
        document.getElementById("res").value = parseInt(value.slice(0, value.indexOf("/") - value.length)) / value.slice(value.indexOf("/") + 1, value.length);
    }
});