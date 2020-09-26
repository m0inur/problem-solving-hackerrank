function theLoveLetterMystery(s) {
    let count=0;
    for(let i=0; i<(s.length-1)/2; i++){
        let a = s[i].charCodeAt(0) - 96,
            b = s[s.length-1-i].charCodeAt(0) - 96;
        count += Math.abs(a-b);
    }
    return count;
}