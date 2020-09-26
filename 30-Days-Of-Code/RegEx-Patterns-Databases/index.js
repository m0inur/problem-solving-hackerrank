function main() {
    const N = parseInt(readLine(), 10);
    var names = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];


        var regex = RegExp(/\b@gmail.com/);
        if (regex.test(emailID)) {
            names.push(firstName);
        }
    }

    names.sort();

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}