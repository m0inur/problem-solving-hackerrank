function timeInWords(h, m) {
    var timeInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', "fourteen", 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'];

    if (m.toString().split('') == 0) {
        return timeInWords[h] + " o' clock";
    } else {
        if (m <= 30) {
            if (m == 30) {
                return "half past " + timeInWords[h];
            } else if (m == 15) {
                return "quarter past " + timeInWords[h];
            } else if (m.toString().split('') == 1) {
                return timeInWords[m] + " minute past " + timeInWords[h];
            } else {
                return timeInWords[m] + " minutes past " + timeInWords[h];
            }
        } else {
            if (m == 45) {
                return "quarter to " + timeInWords[h + 1];
            } else {
                return timeInWords[Math.abs(m - 60)] + " minutes to " + timeInWords[h + 1];
            }
        }
    }
}