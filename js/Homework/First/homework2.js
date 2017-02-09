var a = 10;
var b = 20;
var c;
console.log(a, b, '//right after declaring');
//Without using third variable
b = [a, a = b][0];
console.log(a, b, '//first swap(without using third variable)');
//Without using third variable, another way
a = a + b;
b = b - a;
b = -b;
a = a - b;
console.log(a, b, '//second swap(without using third variable, another way)');
//Using third variable
c = a;
a = b;
b = c;
console.log(a, b, '//third swap(using third variable)');
//xd
var arr = [a, b];
a = arr[1];
b = arr[0];
console.log(a, b, '//xd');