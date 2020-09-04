var ans;

if (year == 1918) {
    ans = "26.09." + year;
} else if (year <= 1917) {
    if (year % 4 == 0) {
        ans = "12.09." + year;
    } else {
        ans = "13.09." + year;
    }
} else {
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        ans = "12.09." + year;
    } else {
        ans = "13.09." + year;
    }
}

return ans;