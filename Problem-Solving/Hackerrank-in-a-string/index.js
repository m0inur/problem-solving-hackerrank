function hackerrankInString(str) {
    var regex = new RegExp('.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k.*');
    if (regex.test(str)) {
        return "YES";
    } else {
        return "NO";
    }
}