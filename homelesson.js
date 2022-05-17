// // УРОК №1. ЦИКЛЫ: WHILE, FOR
// // 1. Напиши код, который выводит на экран с помощью цикла while значения от 50 до 100.

// let i = 49
// while (i <= 99) {
//     i++
//     console.log(i)
// }

// console.log('_______________________________________________________________')

// // 2. Напиши код, который выводит на экран с помощью цикла do...while значения от 20 до 30.

// let b = 20
// do {
//     console.log(b)
//     b++
// } while (b <= 30)

// console.log('_______________________________________________________________')

// // 3. Напиши код, который выводит на экран с помощью цикла for значения от 200 до 250.

// for (let c = 200; c <= 250; c++) {
//     console.log(c)
// }

// УРОК №2. ОПЕРАТОРЫ

// let a = "5"
// let b = "10"
// console.log(+a+ +b) // выведится значение 15, т.к + перед оператором принудительно приводит значение к типу "Number"

// Логические операторы - ||, &&, ! (Их существует всего 3!)

// let a = false
// let b = true
// if (a || b) {
//     console.log('Я буду появляться всегда, т.к. один из оаргументов возвращает логическое значение: true')
// } else {
//     console.log('Я никогда не появлюсь в данном случае')
// }

// let ageuser = 21
// let countMsg = 500
// if (ageuser >= 21 && countMsg > 500) {
//     console.log('Вам разрешено прикреплять файлы к сооюбщению')
// } else {
//     console.log('Вам запрещено прикреплять файлы к сообщению')
// }


// Задача: Пользователю с помощью функции prompt предлагается ввести 'возраст'.
// Если возраст больше 18 лет, то с помощью ещё одного prompt, нужно запросить имя пользователя?
// Все эти данные нужно сохранить в переменных.
// Как только ты получишь от пользователя все необходимые данные, ты должен сделать следующие проверки: если пользователю больше 25 лет и его имя Dima,
// ты должен с помощью функции alert() вывести фразу "Welcome, Dima". В противном случае, ты должен вывести ему фразу "Who are you? I don`t know you".

// let age = prompt('How old are you?')
// if (age < 18) {
//     alert('Who are you? I don`t know you!')
// } else {
//     let name = prompt('What is your name?')
//     if (age >= 18 && name == 'Dima'){
//         alert('Welcome, ' + name)
//     } else {
//         alert('Who are you? I don`t know you!')
//     }
// }

// УРОК №3. ЗНАКОМСТВО С switch

// let arg = 2
// switch(arg) {
//     case 1:
//         console.log('Значение переменной arg равно 1')
//         break;
//         case 3:
//             console.log('Значение переменной arg равно 3')
//             break;
//             case 5:
//                 console.log('Значение переменной arg равно 5')
//                 break;
//             default:
//                 console.log('Нет совпадений')
// }

// Задача: 
// Написать конструкцию switch, которая будет проверять сколько опыта получил ваш герой в игре, в зависимости от количества убитых врагов.
// Условия задачи:
//  - за 1 врага ему начисляется 100 очков опыта
//  - за 3 врага ему начисляется 400 очков опыта
//  - за 5 врага ему начисляется 700 очков опыта
//  - за 10 врага ему начисляется 1000 очков опыта
// Если же он набрал другое количество очков, то умножай количество убитых врагов на 100 очков.
// Далее, запроси (с помощью функции prompt), сколько игроу убил врагов, а потом с помощью alert выведи игроку информацию о том, сколько очков опыта он заработал.

// let frags = 3
// switch(+frags) {
//     case 1:
//         console.log('За количество убийств = ' + frags + ' вы получаете 100 очков опыта')
//         break;
//         case 3:
//             console.log('За количество убийств = ' + frags + ' вы получаете 400 очков опыта')
//             break;
//             case 5:
//                 console.log('За количество убийств = ' + frags + ' вы получаете 700 очков опыта')
//                 break;
//                 case 10:
//                     console.log('За количество убийств = ' + frags + ' вы получаете 1000 очков опыта')
//                     break;
//                 default:
//                     console.log('За количество убийств = ' + +frags + ' вы получаете ' + (+frags*100) + ' очков опыта')
                
// }

// ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML --

// let frags = prompt('Сколько убийств вы совершили?')
// switch(+frags) {
//     case 1:
//         alert ('За количество убийств = ' + +frags + ' вы зарабатываете 100 очков опыта')
//         break;
//         case 3:
//             alert ('За количество убийств = ' + +frags + ' вы зарабатываете 400 очков опыта')
//             break;
//             case 5:
//                alert ('За количество убийств = ' + +frags + ' вы зарабатываете 700 очков опыта')
//                 break;
//                 case 10:
//                     alert ('За количество убийств = ' + +frags + ' вы зарабатываете 1000 очков опыта')
//                     break;
//                 default:
//                     alert ('За количество убийств = ' + +frags + ' вы зарабатываете ' +frags*100 + ' очков опыта')
// }


// УРОК №4. ФУНКЦИИ

// const CellPayment = function(amount) {
//     console.log(`Счет пополнен на сумму ${amount} $`);
// }
// CellPayment(500)

// ДЛЯ HTML, если нужно сменить валюту пополнения (например)

// function callPayment(currency = '$') {
//     let amount = +prompt(`На какую сумму Вы хотите пополнить счет?`)
//     alert(`Счет пополнен на сумму ${amount} ${currency}`)
// }
// let = userCurrencyRub = '₽'
// let = userCurrencyEuro = '€'
// let = userCurrencyUSD = '$'

// callPayment(userCurrencyEuro)
// // or
// callPayment(userCurrencyRub)
// // or
// callPayment(userCurrencyUSD)

// Чтобы задать значения аргумента по умолчанию - пользуемся такой строкой function callPayment(currency = '$')

// Задачи:
// 1. Определить функцию, которая будет запрашивать число (с помощью prompt), умножать его на 327 и делать на 10.
// С помощью alert выдавать полученное значение.

// const calculation = function(number) {
//     console.log(`Результатом умножения на 327 и делением числа ${number} на 10 является ` + +(number*327/10))
// }
// calculation(1)

// ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- 

// function calculation() {
//     let number = +prompt(` Введите любое число. Оно будет умножено на 327 и разделено на 10`)
//     alert (`Ответ = ` + +(number*327/10))
// }
// calculation()

// 2. Определить функцию с аргументом, которая будет запрашивать число (с помощью prompt), умножать его на то значение, указанное 
// качестве аргумента. И с помощью alert выдавать полученное значение.

// let a = 0.0001
// typeof(a) == Number
// const calculation = function(factor = 1337){
//     console.log(`Ответ = ` + a*factor)
// }
// calculation()

// ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML --
// function calculation(factor = `1337`) {
//     let number = +prompt(` Введите любое число`)
//     alert (`Ответ = ` + number*factor)
// }
// calculation()

// УРОК №5. Функции. Возврат значений.

// const sqr = function(a) {
//     let result = a*a
//     return result
// }
// let result = sqr(4)
// console.log(result)

// Задача:
// Написать функцию, которая с помощью prompt запрашивает число у пользователя. Затем эта функция умножает введенное число на 100 и возвращает это значение. 
// Результат функции должен быть записан в переменнуюю.


// let a = 2 // Вместо 'a' подставить любое число
// const math = function(a){
//     let result = +a*100
//     return result
// }
// let result = math(a)
// console.log(result)

// ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML --

// let a = +prompt ('Введите любое число')
// function math() {
//     let result = a * 100
//     return result
// }
// let result = math(a)
// alert(result)

// УРОК №6. Стрелочные функции.

// const func = () => console.log('Я стрелочная функция')
// func()

// // все что выше равносильно тому, что ниже

// const func_2 = function() {
//     console.log('Я тоже функция, но не стрелочная')
// }
// func_2()

// // Для выполнения нескольких действий необходимо добавлять {} и ;

// const func_3 = () => {
//     console.log ('Я стрелочная функция');
//     console.log ('Отвечаю!11');
// }
// func_3()

// // Если функция должна принимать аргумент, то поступаем так

// let a = 1337
// const func_4 = (a) => console.log(a)
// func_4(a)

// const func_5 = () => 1 + 1
// func_5()

// Задача:
// Напиши стрелочную функцию, которая будет запрашивать с помощью prompt два числа у пользователя и перемножать их между собой. Полученное значение
// функция должна возвращать с помощью ключевого слова return. Результат выполнения функции сохранить в переменную.

// const func1337 = (a, b) => {
//     let result = a*b
//     return result
// }
// let result = func1337(0.01, 100)
// console.log(result)


// ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML -- ДЛЯ HTML --

// let func1337 = () => {
//     let a = +prompt ('Введите первое число');
//     let b = +prompt ('Введите второе число');
//         let result = a*b;
//         return result;
//     };
//         let result = func1337()
//             alert(result)
//
// УРОК №7. Массивы.

// Можно так:
let arr = new Array()

// И можно так:
let arr2 = []               // <- так всегда лучше

let arr3 = ['ручка','карандаш']
let arr4 = [1, 2, 3, 4, 5]
let arr5 = [
    {name: 'Name 1', value: 1},
    {name: 'Name 2', value: 2}
]
console.log(arr4.length)            // .lenght возвращает количество элементов в массиве
console.log(arr4[2])                // таким образом получаем выбранный элемент из массива. Нумерация начинается с нуля!!!

arr4[4] = 1337                      // таким образом мы изменяем элемент массива
console.log(arr4)

arr4[5] = 'GENIALNO'                // таким образом мы добавляем новый элемент в массив
console.log(arr4)


let emptyArray = []
emptyArray[0] = 'a'
emptyArray[1] = 'b'
emptyArray[2] = 'c'
console.log(emptyArray)

let oneMoreArray = []
oneMoreArray.push('вилка')          // таким методом мы добавялем новый элемент в КОНЕЦ!!! массива
oneMoreArray.push('ложка')
console.log(oneMoreArray)

oneMoreArray.unshift('циркуль')     // а таким методом - В НАЧАЛЕ!!!
console.log(oneMoreArray)

oneMoreArray.pop()                  // .pop используется для того, чтобы удалить элемент ИЗ КОНЦА МАССИВА
console.log(oneMoreArray)

oneMoreArray.shift()                // .shift используется для того, чтобы удалить элемент ИЗ НАЧАЛА МАССИВА
console.log(oneMoreArray)


const arrNames = ['Dima', 'Katya', 'Yura', 'Larisa', 'Kolya'] // чтобы пробежаться по массиву и вывести все его элементы, используем такую конструкцию
for (let i = 0; i < arrNames.length; i++) {
    console.log(arrNames[i])
}

const arrNums = ['1', '2', '3'];    // Так же можно воспользоваться циклов for of. Минус в том, что нельзя получить индекс элемента в массиве.
    for (let el in arrNums) {
        console.log(el)
    }

const lastArray = ['ia', 'vse', 'smogu']    // Так же можно перебрать массив с помощью встроенного метода массива forEach
lastArray.forEach((elem, index) => {
    console.log(elem);
});


















