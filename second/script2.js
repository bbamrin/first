var b = document.getElementById("bt");
b.addEventListener("click", function () {

    var spl1;
    var string;
    var wrd, buf = 1,
        max = 0;;
    var dict = {};
    var txt = document.getElementById("txt");
    var text = txt.value;
    spl1 = text.split(",");
    string = spl1.join(" ");
    spl1 = string.split(".");
    string = spl1.join(" ");
    string = string.toLowerCase();
    spl1 = string.split(" ");
    string = spl1.join(" ");
    spl1 = string.split("!");
    string = spl1.join(" ");
    spl1 = string.split("-");
    string = spl1.join(" ");
    spl1 = string.split(" ");
    wrd = spl1.filter(function (word) {
        return word.length > 4;
    });
    wrd.forEach(function (word) {
        if (!(word in dict)) {
            dict[word] = 0;
        } else {
            dict[word] += 1;
        }
    });
    for (word in dict) {
        if (dict[word] > max) {
            buf = word;
            max = dict[word];
        }
    }
    console.log(buf);
});