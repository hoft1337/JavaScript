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
// let arr = new Array()

// // И можно так:
// let arr2 = []               // <- так всегда лучше

// let arr3 = ['ручка','карандаш']
// let arr4 = [1, 2, 3, 4, 5]
// let arr5 = [
//     {name: 'Name 1', value: 1},
//     {name: 'Name 2', value: 2}
// ]
// console.log(arr4.length)            // .lenght возвращает количество элементов в массиве
// console.log(arr4[2])                // таким образом получаем выбранный элемент из массива. Нумерация начинается с нуля!!!

// arr4[4] = 1337                      // таким образом мы изменяем элемент массива
// console.log(arr4)

// arr4[5] = 'GENIALNO'                // таким образом мы добавляем новый элемент в массив
// console.log(arr4)


// let emptyArray = []
// emptyArray[0] = 'a'
// emptyArray[1] = 'b'
// emptyArray[2] = 'c'
// console.log(emptyArray)

// let oneMoreArray = []
// oneMoreArray.push('вилка')          // таким методом мы добавялем новый элемент в КОНЕЦ!!! массива
// oneMoreArray.push('ложка')
// console.log(oneMoreArray)

// oneMoreArray.unshift('циркуль')     // а таким методом - В НАЧАЛЕ!!!
// console.log(oneMoreArray)

// oneMoreArray.pop()                  // .pop используется для того, чтобы удалить элемент ИЗ КОНЦА МАССИВА
// console.log(oneMoreArray)

// oneMoreArray.shift()                // .shift используется для того, чтобы удалить элемент ИЗ НАЧАЛА МАССИВА
// console.log(oneMoreArray)


// const arrNames = ['Dima', 'Katya', 'Yura', 'Larisa', 'Kolya'] // чтобы пробежаться по массиву и вывести все его элементы, используем такую конструкцию
// for (let i = 0; i < arrNames.length; i++) {
//     console.log(arrNames[i])
// }

// const arrNums = ['1', '2', '3'];    // Так же можно воспользоваться циклов for of. Минус в том, что нельзя получить индекс элемента в массиве.
//     for (let el in arrNums) {
//         console.log(el)
//     }

// const lastArray = ['ia', 'vse', 'smogu']    // Так же можно перебрать массив с помощью встроенного метода массива forEach
// lastArray.forEach((elem, index) => {
//     console.log(elem);
// });


// УРОК №8. Методы массивов splice, slice, concat.

// let languages = ['python', 'java', 'js'] 
// languages.splice(0,2) // Первый аргумент - номер элемента в массиве, с которого нужно начать удаление. Второй аргумент - количество элементов, которое нужно удалить.
// console.log(languages) // Итого, этим методом удалили 2 элемента массива, начания с первого [0].

// let countries = ['Russia', 'Ukraine', 'Tadjikistan']
// countries.splice(0, 2, 'Spain', 'Portugal', 'Brazil') // Таким методом можно удалить необходимое количество элементов, и поставить на их место новые элементы.
// console.log(countries)

// // В этом методе аргументы работают так: первый аргумент - индекс элемента С которого нужно начинать копирование. Второй аргумент - индекс, ДО которого нужно копировать
// // элементы не включая его. То есть citys.slice(1,3) - это значит, скопирей мне элементы массива 1 и 2, не включая третьего, хотя он является аргументом метода.
// // Если аргменты отрицательные числа, то в таком случае отсчет будет начинаться с конца массива.
// let citys = ['Moscow', 'Milan', 'Kiev', 'Minsk', 'Washington']
// const newList = citys.slice(1,3) // Метод копирует указанные элементы массива и создает из них новый. Метод slice не изменяет исходный массив, а возвращает новый, поэтому 
// console.log(newList) // задается новая переменная. (Как я понял, лучше работать через const)

// let number = ['1', '2', '3']
// let letters = ['a', 'b', 'c']
// const summary = number.concat(letters); // Тут всё предельно просто, метод создает из нескольких массивов один, объединяя их. Результатом является создание нового массива.
// console.log(summary)

// let abra = ['1']
// let abraPlus = abra.concat(['kadabra', 'boom'], 'lol') // Ещё можно сделать и так.
// console.log(abraPlus)


// УРОК №9. Методы массивов find | findindex |filter ||||| find | findindex |filter ||||| find | findindex |filter
// const cars = [
//     {id : 1, model : 'Ferrari'},
//     {id : 2, model : 'Audi'},
//     {id : 3, model : 'Toyota'}
// ]

// const audi = cars.find(function(item, index, arr){
//     return item.model === 'Audi'
// })
// console.log (audi)

// Так как второй и третий аргументы функции нам не нужны (они используются крайне редко), то мы можем вообще от них избавиться. И записать всё через стрелочную функцию.
// const cars = [
//     {id : 1, model : 'Ferrari'},
//     {id : 2, model : 'Audi'},
//     {id : 3, model : 'Toyota'}
// ]

// const audi = cars.find(item => item.model === 'Audi') // Так запись выглядит намного короче и читается проще.
// console.log(audi)

// const cars = [
//     {id : 1, model : 'Ferrari'},
//     {id : 2, model : 'Audi'},
//     {id : 3, model : 'Toyota'}
// ]

// const audi = cars.findIndex(item => item.model === 'Audi') // Метод findindex работает точно так же как и метод find, но возвращает не сам элемент, а просто его индекс.
// console.log(audi)

// const cars = [
//     {id : 1, model : 'Ferrari'},
//     {id : 2, model : 'Audi'},
//     {id : 3, model : 'Toyota'},
//     {id : 2, model : 'Suzuki'}
// ]

// const filterCars = cars.filter(item => item.id % 2 === 0) // Отличие этого метода от метода find в том, что он не прекращает свою работу после первого найденного элемента, а
// console.log(filterCars) // продолжает ее. И соответственно этот метод возвращает массив элементов в call-back функцию. Тут кстати запись item => item.id % 2 означает найти все 
// // четные id массива. И перебираться будет массив до самого конца, пока не найдутся все элементы с четным id.

//УРОК №9. Методы массивов map | sort ||||| map | sort ||||| map | sort ||||| map | sort 

// let numbers = [2, 3, 4, 5, 6, 7]
// let result = numbers.map(n => n**5) // Тут не до конца понятно как работает, нужно разбираться дальшею. Не понимаю как его можно применить на практике.
// console.log(result)

// let characters = ['a', 'z', 'g', 'q', 'e'] 
// characters.sort() // При помощи этой команды мы просто отсортировали элементы массива по латинскому алфавиту
// console.log(characters)

// let numbers = [45, 4, 2, 1, -50, 300, 0];
// numbers.sort();
// console.log(numbers)
// При такой постановке задачи, числа не сортируются в порядке возрастания, так как метод преобразует элементы к строковому типу. И по лексикографическому порядку строка 300
// больше чем строка 4. Короче говоря, не понятно почему так, но нужно указывать ещё ряд аргументов.


// let numbers = [45, 4, 2, 1, -50, 300, 0];

// function compare (a,b) {  // Чтобы сортировка сработала правильно, нужно писать такие условия для этого метода
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
// }
// numbers.sort(compare)
// console.log(numbers)

// Но ещё это можно записать и так!!! Через стрелочную функцию


// let numbers = [45, 4, 2, 1, -50, 300, 0]; // Но это работает не всегда, к сожалению.
// numbers.sort((a,b) => a - b)
// console.log(numbers)

//УРОК №10. Методы массивов reverse | split | join ||||| reverse | split | join ||||| reverse | split | join 

// let languages = ['python', 'java', 'c++', 'js']
// languages.reverse() // Тут всё просто. Данный метод переворачивает массив - первый элемент становится последним, а последний первым.

// console.log(languages)

// let words = 'cat, dog, snake, elephant, tiger'
// const arr = words.split(',') // Этот метод помагает получить из строки массив. Аргумент, который мы передает (в нашем случае ",") является разделителем для метода.

// console.log(arr)

// let str = 'Im fucking elite man'
// const arr = str.split('') // А ещё можно сделать так, чтобы разбить строку побуквенно и преобразовать это в массив.
// console.log(arr)

// let str = 'Strongest Array'
// const arr = str.split() // Если аргумент вообще не указывать, то вся строка просто превратится в массив
// console.log(arr)

// let arr = ['cat', 'dog', 'snake']
// const str = arr.join('#') // Обратный методу split - переводит массив в строку вставляя между элементами указанный разделитель (в нашем случае #)
// console.log(str)


// let arr = ['cat', 'dog', 'snake']
// const str = arr.join('') // Если разделитель вообще не ставить, то весь массив превращается в одну большую строку.
// console.log(str)

// let arr = ['cat', 'dog', 'snake']
// const str = arr.join() // Ну а если скобки аргумента вообще оставить пустыми, то метод сам по-умолчанию разделит элементы запятой
// console.log(str)

//УРОК №11. Методы массивов indexOf | lastIndexOf | includes ||||| indexOf | lastIndexOf | includes ||||| indexOf | lastIndexOf | includes

// const languages = ['python', 'java', 'js']
// const javaIndex = languages.indexOf('java') // Вообще данный метод имеет два аргумента: 1 - значение, которое ты пытаешься найти в массиве, 2 - с какого индекса начать поиск
// console.log(javaIndex) // Если указанного значения не существует - результатом выдачи будет просто "-1"

// const languages = ['python', 'java', 'js']
// const javaIndex = languages.lastIndexOf('python') // Чет криво работает, но поидее тоже самое что и indexOf, только начинает поиск с конца массива.
// console.log(javaIndex) 

// const languages = ['python', 'java', 'js']
// console.log(languages.includes('js')) // Этот метод проверяет, существует ли указанное значние в массиву или нет. Возвращает true либо false.
// console.log(languages.includes('c++')) // Этот метод так же имеет и второй аргумент, который будет указывать на то, с какого элемента массива необходимо начать поиск.

//УРОК №12. Методы массивов reduce | spread

// const numbers = [50, 51, 1]
// const results = numbers.reduce(function(previousValue, currentElem){
//     return previousValue + currentElem //Этот метод сосчитал для нас сумма массива, непонятно каким образом xd
// }, 0);
// console.log(results) // Данный метод - "что-то на тяжелом", лучше обращаться к справочнику и работать с ним с данным методом.
// Так же у вышеуказанного метода есть собрат - метод reduceRight, который делает всё то же самок, только начиная с конца.

// const numbers = [1, 2, 3, 4]
// const array = [...numbers, ...[5, 6, 7]] //таким образом можно присоединить к массиву другой массив. оператор spread = ... (да, он записывается тремя точками)
// console.log(array)

// const numbers = [1,2,3,4,5]
// const newArray = [6,7,8,9,10]

// const resultArr = [...numbers, ...newArray] // Так же можно объединять 2 и более массивов в один.
// console.log(resultArr)


// const numbers = [1,3,5,7]
// const newArray = [...numbers] // А ещё и просто скопировать массив.
// console.log(newArray)

//УРОК №13. Методы массивов Array.isArray | some | every

// const object = {name : 'Dimas'};
// const arr = [1,2,3]
// console.log(Array.isArray(arr))  //Просто показывает, являются ли переданные данные массивом в виде true или false.
// console.log(Array.isArray(object))

// const numbers = [20, 45, 12, -4, 5, 7]
// const has = numbers.some(n => (n/2) >= 10) // Таким методом можно определить, есть ли числа в массиве, которые делятся на 2 и их остаток больше 10. Не знаю зачем :)
// console.log(has) // Резульатат - true или false

// const numbers = [20, 30, 40]
// const othernumbers = [20, 10, 40]

// const hasInNumbers = numbers.every(n => (n/2) >= 10) // Данный метод похож на метод some, только поставленному условию должны удовлетворять все элементы массива.
// const hasInOtherNumbers = othernumbers.every(n => (n/2) >= 10) // В этом случае условию не удовлетворяет элемент массива = 10

// console.log(hasInNumbers)
// console.log(hasInOtherNumbers)

//УРОК №13. Методы массивов flat | fill

// const arr = [1,2,3,[4,5],[[7,8]]]
// const transformArr = arr.flat() // Данный метод создает один общий массив из подмассивов на указанное значние. В () как раз указывается число уровней, на которых нужно
// // распаковать массив. По умолчанию это 1, поэтому резульатом такой функции будет - [ 1, 2, 3, 4, 5, [ 7, 8 ] ]. Если в () поставим 2 - то всё превратится в 1 массив.

// console.log(transformArr)

// const arr = [1,2,3,[4,5],[[7,8]]]
// const transformArr = arr.flat(Infinity) // Ну а если нужно убрать прямо все уровни, то в виде аргумента просто передаем бесконечность. Так точно останется 1-уровневый массив.

// console.log(transformArr)

const arr = [1,2,3,4]
arr.fill(1337,2,4)
console.log(arr)

// Рассмотрим как  работает. Первый аргумент - значение, которое  заполняет или  заменяет элементы массива. Второй аргумент - с какого элемента начинаем, третий - каким закончим.




