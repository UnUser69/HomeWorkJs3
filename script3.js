/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/
function maxFinding(a,b,c){
    for (let i=0; i<3; i++){
        if (a>max){
            max=a;
        } else{
            if(b>max){
                max=b;
            } else{
                if(c>max){
                    max=c;
                }
            }
        }
    }
    return max;
}
let max=0;
let a = parseInt(prompt("Введите первое число:", ''));
let b = parseInt(prompt("Введите второе число:", ''));
let c = parseInt(prompt("Введите третье число:", ''));
alert(`Максимальное число: ${maxFinding(a,b,c)}!`);