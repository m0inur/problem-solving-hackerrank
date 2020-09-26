// Return the minimum number of characters to make the password strong
function minimumNumber(n, password) {
    var add = 0;
    var regexDigit = RegExp(/[0-9]/);
    var regexLowercase = RegExp(/[a-z]/);
    var regexHighercase = RegExp(/[A-Z]/);
    var regexSpecialChars = RegExp(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);

    if (!regexDigit.test(password)) {
        add++;
    }

    if (!regexHighercase.test(password)) {
        add++;
    }

    if (!regexLowercase.test(password)) {
        add++;
    }

    if (!regexSpecialChars.test(password)) {
        add++;
    }

    n += add;

    if (n < 6) {
        add += Math.abs(6 - n);
        n += Math.abs(6 - n);
    }

    return add;
}