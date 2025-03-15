// // 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector("body");
// console.log(body);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.querySelector("#title");
// console.log(title);

// // 3 - отримай елемент class="list" і виведи його в консоль;
// const lists = document.querySelector(".list")
// console.log(lists);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const elements = document.querySelectorAll("[data-topic]");
// console.log(elements);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstChild = document.querySelector("[data-topic]");
// console.log(firstChild);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastChild = elements[elements.length - 1];
// console.log(lastChild);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// console.log(title.nextElementSibling);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const elementTitleThree = document.querySelectorAll("h3");
// console.log(elementTitleThree);

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// elementTitleThree.forEach(elementTitleThree => {
//     elementTitleThree.classList.add("active");
// });

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const liNav = document.querySelectorAll('li[data-topic="navigation"]');
// console.log(liNav);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// const colorElem = document.querySelector('[data-topic="navigation"]');
// colorElem.style.backgroundColor = "yellow";

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// colorElem.querySelector("p").textContent = "Я змінив тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation"
// const element = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(element);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// element.style.backgroundColor = "blue";

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const titleCompleted = document.querySelector('.completed');
// console.log(titleCompleted);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const liElement = titleCompleted.closest('li');
// liElement.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const title = document.querySelector("#title");
// const text = document.querySelector("p");

// text.textContent = "Об'єктна модель документа (Document Object Model)";
// title.insertAdjacentElement('afterend', text);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// // 20 - очисти список
// document.querySelector(".list").innerHTML = "";

// Task 2

// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const container = document.createElement("div");
// container.classList.add("numberContainer");


// document.body.appendChild(container);
// const elements = [];

// for (let i = 0; i < 100; i++) {
//     const div = document.createElement("div");
//     div.classList.add("number");
//     const random = randomNumber();
//     div.textContent = random;
//     if (random % 2 === 0) {
//         div.classList.add("even")
//     } else {
//         div.classList.add("odd")
//     }
//     elements.push(div);
//     container.appendChild(div);
// }


























