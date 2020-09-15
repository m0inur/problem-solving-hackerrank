var sent = "";
var diff = 0;

for (var i = 0; i < Math.floor(str.length / 3); i++) {
    sent += "SOS";
}

for (var i = 0; i < str.length; i++) {
    if (str[i] != sent[i]) {
        diff++;
    }
}

return diff;