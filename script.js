'use strict';

// 1
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// Сделайте два варианта функции checkAge:
// Используя оператор ?
// Используя оператор ||

function checkAge(age) {
   return (age > 18) || confirm('Родители разрешили?');
}

function checkAge(age) {
   return (age > 18) ? true : confirm('Родители разрешили?');
}

// 2
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function min(a, b) {
//    return (a < b) ? a : b;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// function min(a, b, c) {
//    if ((a < b && a < c) || (a == b || a == c)) {
//       return a;
//    } else if ((b < a && b <= c) || (b == a || b == c)) {
//       return b
//    } else if ((c < a && c < b) || (c == a || c == b)) {
//       return c;
//    }
// }

function min(a, b, c) {
   if (a <= b) {
      if (a <= c) {
         return a;
      } else {
         return c;
      }
   } else {
      if (b <= c) {
         return b;
      } else {
         return c;
      }
   }
}

// function min(a, b, c) {
//    if (a <= b && a <= c) {
//       return a;
//    } else if (b <= a && b <= c) {
//       return b;
//    } else if (c <= a && c <= b) {
//       return c;
//    }
// }
console.log(min(2, 5, 1));
console.log(min(3, -1, -2));
console.log(min(2, -1, 3));
console.log(min(0, 0, 1));


// 3
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

// let num = +prompt('Введите число', '');
// let powNum = +prompt('Введите степень', '');

// function pow(x, n) {
//    return (x ** n);
// }

// alert(pow(num, powNum));

// function pow(x, n) {
//    x = +prompt('Введите число x', '');
//    n = +prompt('Введите число n', '');

//    let result = x ** n;

//    return (n < 1 || n % 1 !== 0) ? alert('Введите корректное значение n') : alert(result);
// }

// pow();