// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 'Hello', true, null, {name: 'Roman', age: 30}, [1,2,3], undefined, function(){return 'function'}, NaN, Symbol()];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: "To Kill a Mockingbird",
    pageCount: 324,
    genre: "Classic",
}

console.log(book1)

const book2 = {
    title: "The Great Gatsby",
    pageCount: 180,
    genre: "Fiction",
};

console.log(book2)

const book3 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    pageCount: 224,
    genre: "Science Fiction",
};
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


const book4 = {
    title: "The Lord of the Rings",
    pageCount: 1178,
    genre: "Fantasy",
    authors: [
        { name: "J.R.R. Tolkien", age: 81 },
        { name: "Christopher Tolkien", age: 95 },
    ],
};

const book5 = {
    title: "1984",
    pageCount: 328,
    genre: "Dystopian Fiction",
    authors: [{ name: "George Orwell", age: 46 }],
};

const book6 = {
    title: "To Kill a Mockingbird",
    pageCount: 281,
    genre: "Southern Gothic",
    authors: [{ name: "Harper Lee", age: 89 }],
};

console.log(book4);
console.log(book5);
console.log(book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    { name: 'John', username: 'john123', password: 'pass123' },
    { name: 'Kate', username: 'kate123', password: 'qwertyui' },
    { name: 'Mike', username: 'mike123', password: '123456' },
    { name: 'Emily', username: 'emily1', password: 'mypassword' },
    { name: 'Alex', username: 'alex2', password: 'mypassword123' },
    { name: 'Anna', username: 'anna3', password: 'password123' },
    { name: 'Tom', username: 'tom4', password: '123456789' },
    { name: 'Olivia', username: 'olivia5', password: 'iloveyou' },
    { name: 'David', username: 'david6', password: 'password1' },
    { name: 'Emma', username: 'emma7', password: 'p@ssw0rd' },
];




users.forEach(user => console.log(user.password));

// - Є змінна х, якій ви надаєте довільне числове значення.
    // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;

if (x !== 0) {
    console.log('true');
} else {
    console.log('false');
}
console.log(x !== 1)
console.log(x !== 0)
console.log(x !== -3)

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 30;
let quarter;

if (time >= 0 && time <= 14) {
    quarter = "1";
} else if (time >= 15 && time <= 29) {
    quarter = "2";
} else if (time >= 30 && time <= 44) {
    quarter = "3";
} else {
    quarter = "4";
}

console.log(`Число ${time} належить до ${quarter} четверті години`);

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 15;
let decade = Math.ceil(day / 10); // визначаємо декаду
console.log(decade); // 2


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    // - Користувач вводить або має два числа.

let dayOfWeek = prompt("Введіть порядковий номер дня тижня:");

switch (dayOfWeek) {
    case "1":
        console.log("Понеділок: заняття в університеті");
        break;
    case "2":
        console.log("Вівторок: заняття в університеті");
        break;
    case "3":
        console.log("Середа: заняття в університеті");
        break;
    case "4":
        console.log("Четвер: заняття в університеті");
        break;
    case "5":
        console.log("П'ятниця: вільний день");
        break;
    case "6":
        console.log("Субота: зустріч з друзями");
        break;
    case "7":
        console.log("Неділя: відпочинок");
        break;
    default:
        console.log("Неправильний номер дня тижня");
        break;
}



        // Потрібно знайти та вивести максимальне число з тих двох .
        // Також потрібно врахувати коли введені рівні числа.

let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");

if (num1 > num2) {
    console.log(num1 + " - це максимальне число");
} else if (num2 > num1) {
    console.log(num2 + " - це максимальне число");
} else {
    console.log("Числа рівні");
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    // за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


//
// let x = null;
// x = x || "default";
// console.log(x); // "default"
//
// x = 0;
// x = x || "default";
// console.log(x); // "default"
//
// x = "";
// x = x || "default";
// console.log(x); // "default"
//
// x = "hello";
// x = x || "default";
// console.log(x); // "hello"

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);

let JavaScriptComplex = 5;
if (JavaScriptComplex > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}


let JavaComplex = 6;
if (JavaComplex > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}


let PythonComplex = 6;
if (PythonComplex > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}



let QAComplex = 4;
if (QAComplex > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}


let FullStack = 7;
if (FullStack > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}


let Frontend = 4;
if (Frontend > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}




