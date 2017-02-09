function rand(min, max) {
    return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}
var arr = [];
for (var i = 0; i < 30; i++) {
    arr.push(rand(0, 100));
}
console.log(arr);
//Searching for the number 98 in the array (arr)
console.log(arr.indexOf(98), '//using indexOf'); //using indexOf, just to be sure
var index = -1;
for (i = 0; i < arr.length; i++) {
    if (arr[i] === 98) {
        index = i;
        break;
    }
}
console.log(index, '//using \'for\' loop'); //using 'for' loop