var timer = 10;
function bomb() {
    console.log("Explosion in " + timer);
    timer--;
    if (timer === 0) {
        setTimeout((function () {
            console.log("BOOOOOOOOOOOOOOOOOOOM")
        }), 1000);
        clearInterval(1);
    }
}
setInterval(bomb, 1000);
