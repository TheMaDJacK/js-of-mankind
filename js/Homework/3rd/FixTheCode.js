// Broken
/* for (var i = 1; i <= 10; i++) {
 setTimeout(function() {
 console.log(i);
 }, 1000 * i);
 }*/
// Fixed
for (var i = 1; i <= 10; i++) {
    setTimeout((function (index) {
        console.log(index);
    })(i), 1000 * i);
}