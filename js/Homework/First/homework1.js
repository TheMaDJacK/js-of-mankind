var a = 20,
    b = 40,
    c = 10,
    d = 50;
e = 30;
console.log(a, b, c, d, e);
var theArray = [a, b, c, d, e];
function compareNumeric(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
}
theArray.sort(compareNumeric);
console.log(theArray);
//biggest var
if (a > b && a > c && a > d && a > e) {
    console.log(a = a * 10000, 'multiplied by 10000');
} else if (b > a && b > c && b > d && b > e) {
    console.log(b = b * 10000, 'multiplied by 10000');
} else if (c > a && c > b && c > d && c > e) {
    console.log(c = c * 10000, 'multiplied by 10000');
} else if (d > a && d > b && d > c && d > e) {
    console.log(d = d * 10000, 'multiplied by 10000');
} else {
    console.log(e = e * 10000, 'multiplied by 10000');
}
//next after the biggest
if ((a < b && a > c && a > d && a > e) || (a > b && a < c && a > d && a > e) || (a > b && a > c && a < d && a > e) || (a > b && a > c && a > d && a < e)) {
    console.log(a = a * 1000, 'multiplied by 1000');
} else if ((b < a && b > c && b > d && b > e) || (b > a && b < c && b > d && b > e) || (b > a && b > c && b < d && b > e) || (b > a && b > c && b > d && b < e)) {
    console.log(b = b * 1000, 'multiplied by 1000');
} else if ((c < a && c > b && c > d && c > e) || (c > a && c < b && c > d && c > e) || (c > a && c > b && c < d && c > e) || (c > a && c > b && c > d && c < e)) {
    console.log(c = c * 1000, 'multiplied by 1000');
} else if ((d < a && d > b && d > c && d > e) || (d > a && d < b && d > c && d > e) || (d > a && d > b && d < c && d > e) || (d > a && d > b && d > c && d < e)) {
    console.log(d = d * 1000, 'multiplied by 1000');
} else {
    console.log(e = e * 1000, 'multiplied by 1000');
}
//third
if ((a > b && a > c && a < d && a < e) || (a > b && a > d && a < c && a < e) || (a > c && a > d && a < b && a < e) ||
    (a < b && a < c && a > d && a > e) || (a < b && a < d && a > c && a > e) || (a < c && a < d && a > b && a > e)) {
    console.log(a = a * 100, 'multiplied by 100');
} else if ((b > a && b > c && b < d && b < e) || (b > a && b > d && b < c && b < e) || (b > c && b > d && b < a && b < e) ||
    (b < a && b < c && b > d && b > e) || (b < a && b < d && b > c && b > e) || (b < c && b < d && b > a && b > e)) {
    console.log(b = b * 100, 'multiplied by 100');
} else if ((c > a && c > b && c < d && c < e) || (c > a && c > d && c < b && c < e) || (c > a && c > e && c < b && c < d) ||
    (c < a && c < b && c > d && c > e) || (c < a && c < d && c > b && c > e) || (c < a && c < e && c > b && c > d)) {
    console.log(c = c * 100, 'multiplied by 100');
} else if ((d > a && d > b && d < c && d < e) || (d > c && d > a && d < b && d < e) || (d > a && d > e && d < b && d < c) ||
    (d < a && d < b && d > c && d > e) || (d < c && d < a && d > b && d > e) || (d < a && d < e && d > b && d > c)) {
    console.log(d = d * 100, 'multiplied by 100');
} else {
    console.log(e = e * 100, 'multiplied by 100');
}
//fourth
if ((a > b && a < c && a < d && a < e) || (a < b && a > c && a < d && a < e) || (a < b && a < c && a > d && a < e) || (a < b && a < c && a < d && a > e)) {
    console.log(a = a * 10, 'multiplied by 10');
} else if ((b > a && b < c && b < d && b < e) || (b < a && b > c && b < d && b < e) || (b < a && b < c && b > d && b < e) || (b < a && b < c && b < d && b > e)) {
    console.log(b = b * 10, 'multiplied by 10');
} else if ((c > a && c < b && c < d && c < e) || (c < a && c > b && c < d && c < e) || (c < a && c < b && c > d && c < e) || (c < a && c < b && c < d && c > e)) {
    console.log(c = c * 10, 'multiplied by 10');
} else if (((d > a && d < b && d < c && d < e) || (d < a && d > b && d < c && d < e) || (d < a && d < b && d > c && d < e) || (d < a && d < b && d < c && d > e))) {
    console.log(d = d * 10, 'multiplied by 10');
} else {
    console.log(e = e * 10, 'multiplied by 10');
}
//last, but not least... oh wait :)
if (a < b && a < c && a < d && a < e) {
    console.log(a, 'untouched');
} else if (b < a && b < c && b < d && b < e) {
    console.log(b, 'untouched');
} else if (c < a && c < b && c < d && c < e) {
    console.log(c, 'untouched');
} else if ((d < a && d < b && d < c && d < e)) {
    console.log(d, 'untouched');
} else {
    console.log(e, 'untouched');
}