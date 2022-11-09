var var1 = [1, 2, 3, "4"];
var var2 = NaN;
var var3 = {
    name: 'Maks'
};
var var5 = 5;

console.log(var1[3], var2, var3.name, var5);
console.log(typeof var1, typeof var2);
var var1 = '10';
console.log(var1)

function calc() {
    console.log('Inside Function!')
}
var calc1 = function () {
    console.log('second Function')
}
calc();
calc1();
var anotherFunc = calc;
anotherFunc();
function string() {
    return 'string'
}
var returned = string();
console.log(returned)
function calc2(number1, number2) {
    return number1 + number2;
}
var sum = calc2(10, 25);
console.log(sum);
var sum2 = calc2;
console.log(sum2(15, 5));
//Control Structures
var condition = false;
var anotherCon = false;
if (condition) {
    console.log('Executed!');
} else if (anotherCon) {
    console.log('Still Executed')
}
else {
    console.log('Not executed')
}

var luckyNumber = 8;

switch (luckyNumber) {
    case 1:
        console.log('Is 1');
        break;
    case 8:
        console.log('Is 8');
        break;
    default:
        console.log('Default');
        break;
}

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 2; j++) {
        if (i == 1) {
            continue;
        }
        console.log(i * j)
    }
}

for (var i = 0; i < 5; i++) {
    if (i == 1) {
        break;
    }
    console.log(i)
}
for (var i = 2; i > 0; i--) {
    console.log(i);
}
var array = [1, 2, 3];
for (var i = 0; i < array.lenght; i++) {
    console.log(array[i]);
}
var number = 5;
while (number < 7) {
    console.log(number)
    number++;
}
var condition = true;
var i = 2;
while (condition) {
    if (i == 3) {
        condition = false;
    }
    console.log(i)
    i++
}

var condition = false;

do {
    console.log('Executed')
} while (condition)

var a=1.3;
var b=2.2;
var result=(a*b).toFixed(2)
console.log(result)
//ternary operators
var a =5;
var b = 6;

console.log(a==b ? 'equal' : 'not equal')
