var h = 0;
var m = 0;
function digitalClock() {
    console.clear();
    if (h < 24 && m < 60) {
        if (h < 10 && m >= 10) {
            console.log("0" + h + ":" + m);
        } else if (h >= 10 && m < 10) {
            console.log(h + ":0" + m);
        } else if (h < 10 && m < 10) {
            console.log("0" + h + ":0" + m)
        } else {
            console.log(h + ":" + m);
        }
        m++;
    } else if (h < 24 && m >= 60) {
        m = 0;
        h++;
    } else if (h >= 24) {
        clearInterval(1);
    }
}
setInterval(digitalClock, 1000);