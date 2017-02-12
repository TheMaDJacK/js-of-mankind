var ARR_SIZE = 10;
var MIN_VALUE = 0;
var MAX_VALUE = 100;
var arr = [];
function rand(min, max) {
    return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}
for (var i = 0; i < ARR_SIZE; i++) {
    arr[i] = [];
    for (var j = 0; j < ARR_SIZE; j++) {
        arr[i][j] = (rand(MIN_VALUE, MAX_VALUE));
    }
}
console.table(arr);
var mainDiagonal = [],
    leftSide = [],
    bottomSide = [];
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (i === j) {
            mainDiagonal.push(arr[i][j]);
        }else if (i === arr.length - 1 && j !== arr.length) {
            bottomSide.push(arr[i][j]);
        }else if (j === 0) {
            leftSide.push(arr[i][j]);
        }
    }
}
bottomSide.reverse();
leftSide.reverse();
var resArr = mainDiagonal.concat(bottomSide).concat(leftSide);
console.log(resArr);