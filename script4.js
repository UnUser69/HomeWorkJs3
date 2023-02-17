/*Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения 
в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity 
делать не нужно.*/
function additionFunction(num1 , num2){
    addition = num1 + num2;
    return addition;
}
function differenceFunction(num1 , num2){
    if (num1 > num2) {
        difference = num1 - num2;
    } else {
        if (num2 > num1) {
            difference = num2 - num1;
        } else {
            difference = 0;
        }
    }
    return difference;
}
function multiplicationFunction(num1 , num2){
    multiplication = Math.round(num1 * num2);
    return multiplication;
}
function divisionFunction(num1 , num2){
    division = Math.round(num1 / num2);
    return division;
}
let addition = 0;
let difference = 0;
let multiplication= 0;
let division = 0;

let num1 = parseInt(prompt("Введите первое число:", ''));
let num2 = parseInt(prompt("Введите второе число:", ''));

alert(`Результат сложения: ${additionFunction(num1,num2)}!`);
alert(`Результат разности: ${differenceFunction(num1,num2)}!`);
alert(`Результат умножения: ${multiplicationFunction(num1,num2)}!`);
alert(`Результат деления: ${divisionFunction(num1,num2)}!`);
