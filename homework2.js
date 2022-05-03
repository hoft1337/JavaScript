// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// let a = 2
// let b = 1
// while (b < 11){
//     b++
// console.log(a**b)
// }


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// let a = 2
// const umnojatel = function(Stepen){
// console.log("Otvet raven = " + a**Stepen)
// }
// umnojatel(10)


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// let a = 1
// let b = ":)"
// while (a < 6) {
//     if (a <= 1) {
//     console.log(b)
//     a++
//     } else {
//     console.log(b += ":)")
//     a++
//     }
// }

// let b = "AnaClever"
// for (let a = 1; a < 6; a++){
//     if (a <2){
//         console.log(b)
//     } else {
//         console.log(b += "AnaClever")
//     }
// }


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// // e.g. function printSmile(stroka, numberOfRows)

// let empty = ""
// const smile = function(stroka, chislo_strok){
//     for(let c = chislo_strok; c>=1; c--)
//     console.log(empty+=stroka)
// }
// smile("b0t ", 10)



// // 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// function getWordStructure(word) {
//     const vowels = 'aeiouy'.split('')
//     const consontats = 'bcdfghjklmnpqrstvwxz'.split('')
//     let = numberOfVowels = 0
//     let = numberOfConsontats = 0
//     for(char of word.toLowerCase()){
//         if(vowels.includes(char)) numberOfVowels++
//         if(consontats.includes(char)) numberOfConsontats++
//     }
//     console.log('Слово '+ (word) + ' состоит из ' + (numberOfVowels) + ' гласных и ' + (numberOfConsontats) + ' согласных букв')


// }
// getWordStructure('Chara')


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

function isPalindrom(word) {
    word = word.toLowerCase()
    const len = word.length;
    for (let i=0; i < len / 2; i++) {
        if(word[i] !== word[len - 1 - i]) {
            return ('It`s not a palindrom');
        }
    }
    return ('It is a palindrom')
}
console.log(isPalindrom('Abobus'))




