// // Створіть масив styles з елементами 'jazz' і 'blues'
// // Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// // Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// // Напишіть функцію logItems(array), яка приймає масив як аргумент
// // і виводить у консоль кожен його елемент у форматі:
// // "<номер елемента> - <значення елемента>".
// // Використайте цикл for для перебору елементів масиву.
// // Нумерація елементів повинна починатися з 1 (а не з 0).

// // const styles = ['jazz', 'blues'];

// // styles.push('rock-n-roll');

// // const index = styles.indexOf('blues');
// // if (index !== -1) {
// //     styles.splice(index, 1, 'classic');
// // }

// // console.log(styles);

// // function logItems(array) {
// //     for (let i = 0; i < array.length; i++) {
// //         console.log(`${i + 1} - ${array[i]}`);
         
// //     }
// // }

// // logItems(styles);


// // Напишіть функцію checkLogin(array), яка:
// // Приймає масив логінів як аргумент.
// // Запитує ім'я користувача через prompt.
// // Перевіряє, чи є введене ім'я у переданому масиві.
// // Якщо ім'я є в масиві - виводить повідомлення через alert: "Welcome, <name>!"
// // Якщо ім'я відсутнє - виводить повідомлення: "User not found".

// // const logins = ["Peter", "John", "Igor", "Sasha"];

// // const logins = ["Peter", "John", "Igor", "Sasha"];

// // function checkLogin(array) {
// //     const userName = prompt("Введіть ім'я користувача:");

// //     for (const name of array) {
// //         if (name === userName) {
// //             return alert(`Welcome, ${name}!`)
// //         }
// //     }
// //     return alert("User not found");
// // }

// // checkLogin(logins);

// // Напишіть функцію caclculateAverage(),
// // яка приймає довільну кількість
// // аргументів і повертає їхнє середнє значення.
// // Додайте перевірку, що аргументи - це числа.

// // function caclculateAverage(...args) {
// //     let total = 0;
// //     let count = 0;

// //     for (const arg of args) {
// //         if (typeof arg === "number") {
// //             total += arg;
// //             count += 1;
// //         }
// //         // console.warn(typeof arg);
// //         // console.log(console);
        
// //     }
// //     console.log(total);
    
// //     return total / count;
// // }

// // console.log(caclculateAverage(5, 10, 15, 20, 30, 50, "hello", true));




// // Напишіть функцію findSmallestNumber(numbers),
// // яка шукає найменше число в масиві.
// // Додайте перевірку, що функція отримує саме масив, і
// // якщо функція отримує масив - поверніть з функції найменше число,
// // в іншому випадку - поверніть 'Sory, it is not an array!'.



// // const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];


// // function findSmallestNumber(numbers) {
// //     if (!Array.isArray(numbers)) {
// //         return `Sory, it is not an array!`
// //     }

// //     let smallestNumber = numbers[0];

// //     for (const number of numbers) {
// //         if (number < smallestNumber) {
// //             smallestNumber = number;
// //         }
// //     }

// //     return smallestNumber;
// // }

// // console.log(findSmallestNumber(numbers));



// // Напишіть функцію, яка сумуватиме сусідні числа
// // і пушитиме їх в новий масив.

// // const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // // уточнення: складати необхідно перше число з другим, потім друге - з третім,
// // // третє - з четвертим і так до кінця.
// // // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


// // function caclculate(someArr) {
// //     let totalSum = [];

// //     for (let i = 0; i < someArr.length - 1; i++) {
// //         totalSum.push(someArr[i] + someArr[i + 1]);
// //     }

// //     return totalSum;
// // }

// // console.log(caclculate(someArr));


// // Напишіть функцію findLongestWord(string), яка
// // приймає довільний рядок, що складається лише зі слів, розділених
// // пробілами (параметр string), і повертатиме найдовше слово у реченні.


// // function findLongestWord(string) {
// //     const words = string.split(" ");

// //     let longest = "";

// //     for (const word of words) {
// //         if (word.length > longest.length) {
// //             longest = word;
// //         }
// //     }
// //     return longest;
// // }

// // // Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// // console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// // Напишіть скрипт, який для об'єкту user, послідовно:
// // 1 - додасть поле mood зі значенням 'happy',
// // 2 - замінить hobby на 'skydiving',
// // 3 - замінить значення premium на false,
// // 4 - виведе зміст об'єкта user у форматі
// // '<ключ>:<значення>' використовуя Object.keys() та for...of

// // const user = {
// //     name: "John",
// //     age: 20,
// //     hobby: "tenis",
// //     premium: true,
// // };

// // user.mood = 'happy';
// // user.hobby = 'skydiving';
// // user.premium = false;

// // for (const key of Object.keys(user)) {
// //     console.log(`${key}: ${user[key]}`);
// // }


// // Є об'єкт, в якому зберігаються зарплати команди
// // Напишіть код для додавання усіх зарплат та
// // збережіть його результат в змінній sum.
// // Якщо об'єкт salaries пустий, то результат має бути 0

// // const salaries = {
// //     Mango: 100,
// //     Poly: 160,
// //     Ajax: 1470,
// // };
  
// // let sum = 0;

// // for (const value of Object.values(salaries)) {
// //     sum += value;
// // }

// // console.log(sum);


// // Напишіть функцію calcTotalPrice(fruits, fruitName),
// // яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// // Функція рахує і повертає загальну вартість фрукта
// // з таким ім'ям, ціною та кількістю з об'єкта.

// // Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// // назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ];
  
// function calcTotalPrice(fruits, fruitName) {
//     let total = 0;

//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             return total += fruit.price * fruit.quantity;
//         }
//     }
//     return total;
// }









