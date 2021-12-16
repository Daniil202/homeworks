// Задание 1 //





// Задание 2 //
var a = 2;
var x = 1 + (a *= 2);
alert(x); // 5  

// Задание 3 //

var a = 4;
var b = 2;
if (a > 0 && b > 0){
x = a - b;
alert(x);
}else if(a < 0 && b < 0){
x = a * b;
alert (x);
}else if(a < 0 && b > 0 || a > 0 && b < 0){
x = a + b;
alert (x);
}

// Задание 4 //

a = +prompt('Введите число от 1 до 15');
switch (a) 
{
case 1:
alert ( 'Ваше число 1');
break;
case 2:
alert ('Ваше число 2');
break;
case 3:
alert ('Ваше число 3');
break;
case 4:
alert ('Ваше число 4');
break;
case 5:
alert ('Ваше число 5');
break;
case 6:
alert ('Ваше число 6');
break;
case 7:
alert ('Ваше число 7');
break;
case 8:
alert ('Ваше число 8');
break;
case 9:
alert ('Ваше число 9');
break;
case 10:
alert ('Ваше число 10');
break;
case 11:
alert ('Ваше число 11');
break;
case 12:
alert ('Ваше число 12');
break;
case 13:
alert ('Ваше число 13');
break;
case 14:
alert ('Ваше число 14');
break;
case 15:
alert (' Ваше число 15');
break;
}

// Задание 5 //
 
var x = 4;
var y = 2;

function plus(x,y){
    return x + y
}
function minus(x,y){
    return x - y
}
function  division(x,y){
    return x / y
}
function  multiplication(x,y){
    return x * y
}

 // Задание 7 //

function mathOperation(arg1, arg2, operation){
switch(operation){
case 'addition':
  return arg1 + arg2;
  break;
case 'subtraction':
  return arg1 - arg2;
  break;
case 'division':
  return arg1 / arg2;
  break;
case 'division':
  return arg1 * arg2;
  break;
}
}


  