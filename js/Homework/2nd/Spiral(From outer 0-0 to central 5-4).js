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
var resArr = [];
    var stopStep = Math.ceil(arr.length/2);
    for(var step = 0; step < stopStep; step++){
        var start = step;
        var end = arr[0].length - step;
        var endStep = arr.length - step;
        for (var i = start; i < end; i++) {
            resArr.push(arr[step][i]);
        }
        for (var j = step+1; j < endStep; j++) {
            resArr.push(arr[j][end-1]);
        }
        for (var k = end-2; k > start; k--) {
            resArr.push(arr[endStep-1][k]);
        }
        for (var l = endStep-1; l > step; l--) {
            resArr.push(arr[l][start]);
        }
    }
console.log(resArr);