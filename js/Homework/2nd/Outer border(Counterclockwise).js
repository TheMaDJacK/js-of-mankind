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
var topSide = [],
    rightSide = [],
    bottomSide = [],
    leftSide = [];
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (j === 0) {
            leftSide.push(arr[i][j]);
        }else if (i === arr.length - 1 && j !== arr.length -1) {
            bottomSide.push(arr[i][j]);
        }else if (j === arr.length - 1  && i !== arr.length) {
            rightSide.push(arr[i][j]);
        }else if (i === 0 && j !== arr.length - 1) {
            topSide.push(arr[i][j]);
        }
    }
}
rightSide.reverse();
topSide.reverse();
var resArr = leftSide.concat(bottomSide).concat(rightSide).concat(topSide);
console.log(resArr);