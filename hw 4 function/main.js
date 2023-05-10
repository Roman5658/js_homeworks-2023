

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calc(a, b) {
    return a * b;
}

let A = 4;
let B = 5;
console.log(calc(A, B));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calc1(r) {
    return Math.PI * Math.pow(r, 2);
}

let radius = 5;
console.log(calc1(radius));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calc2(h, r) {
    let baseArea = Math.PI * Math.pow(r, 2);
    let lateralArea = 2 * Math.PI * r * h;
    return 2 * baseArea + lateralArea;
}

let height = 10;
let radius0 = 5;
console.log(calc2(height, radius0));

// - створити функцію яка приймає масив та виводить кожен його елемент

function calc3(h, r) {
    let baseArea = Math.PI * Math.pow(r, 2);
    let lateralArea = 2 * Math.PI * r * h;
    return 2 * baseArea + lateralArea;
}

let height1 = 10;
let radius1 = 5;
console.log(calc3(height1, radius1));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    let paragraph = document.createElement('p'); // Створюємо елемент <p>
    let paragraphText = document.createTextNode(text); // Створюємо текстовий вузол з переданим текстом
    paragraph.appendChild(paragraphText); // Додаємо текстовий вузол до параграфу
    return paragraph; // Повертаємо створений параграф
}


let text = "TEXT PARAGRAPH";
let paragraph = createParagraph(text);
console.log(paragraph); // Виведе <p>Це текст параграфу</p>


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(text) {
    let list = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = text;
        list.appendChild(listItem);
    }

    return list;
}
let text1 = "Text lists";
let list = createList(text1);
console.log(list);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createListWithSameText(text, count) {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = text;
        ulElement.appendChild(liElement);
    }
    let containerElement = document.getElementById('container');
    containerElement.appendChild(ulElement);
}


createListWithSameText('All elements', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createListFromArray(items) {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < items.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = items[i];
        ulElement.appendChild(liElement);
    }
    let container1Element = document.getElementById('container1');
    container1Element.appendChild(ulElement);
}


let array = [1, 'Hello', true, 'World', false];
createListFromArray(array);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function displayObjects(objects) {
    let container2Element = document.getElementById('container2');

    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        let divElement = document.createElement('div');

        let idElement = document.createElement('p');
        idElement.textContent = 'ID: ' + object.id;
        divElement.appendChild(idElement);

        let nameElement = document.createElement('p');
        nameElement.textContent = 'Name: ' + object.name;
        divElement.appendChild(nameElement);

        let ageElement = document.createElement('p');
        ageElement.textContent = 'Age: ' + object.age;
        divElement.appendChild(ageElement);

        container2Element.appendChild(divElement);
    }
}


let objects = [
    { id: 1, name: 'Vika', age: 25 },
    { id: 2, name: 'Alina', age: 30 },
    { id: 3, name: 'Roman', age: 28 }
];
displayObjects(objects);


// - створити функцію яка повертає найменьше число з масиву

function findMinimumNumber(numbers) {
    let minimum = numbers10[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}


let numbers10 = [5, 2, 8, 3, 1, 9];
let minimumNumber = findMinimumNumber(numbers10);
console.log(minimumNumber);




// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

let numbers = [1, 2, 10];
let result = sum(numbers);
console.log(result);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

// Приклад використання функції з масивом
let arr = [11, 22, 33, 44];
let result1 = swap(arr, 0, 1);
console.log(result1); // Виведе [22, 11, 33, 44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let targetCurrency = currencyValues.find(function(currency) {
        return currency.currency === exchangeCurrency;
    });
    if (targetCurrency) {
        return sumUAH / targetCurrency.value;
    } else {
        console.log('нет данных ' + exchangeCurrency);
        return null;
    }
}


let sumUAH = 10000;
let currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
let exchangeCurrency = 'USD';

let exchangedSum = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(exchangedSum);


// ...
