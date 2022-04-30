let item_1 = 5;
let item_2 = 3;
let item_3 = item_1 + item_2
let item_4 = "yolochka"
let item_5 = item_3
let item_6 = 15
let item_6_type = typeof(item_6)
let item_7 = String(item_6)
let item_7_type = typeof(item_7)

// CHAPTER #1

// console.log(item_1)
// console.log(item_2)
// console.log(item_3)
// console.log(item_4)
// console.log(item_3 + item_4)
// console.log(item_3 * item_4)
// console.log("item_6 == " + item_6,  "item_6_type == " + item_6_type)
// console.log("item_7 ==" + item_7, "item_7_type == " + item_7_type)

// CHAPTER #2

let age_1 = 62
let age_2 = 18
let age_3 = 60
// if(age_1 < age_2)
// console.log("You dont have acces cause your age is " + age_1 + " Its less then")
// if(age_1 >= age_2 && age_1 < age_3)
// console.log("Welcome!")
// if(age_1 > age_3)
// console.log("Keep CALM and look culture channels")

// CHAPTER#3

// const checkAGE = function(age) {
// if(age < age_2)
// console.log("You dont have acces cause your age is " + age + " Its less then")
// else if(age >= age_2 && age < age_3)
// console.log("Welcome!")
// else if(age > age_3)
// console.log("Keep CALM and look culture channels")
// }
// checkAGE(17)
// checkAGE(18)
// checkAGE(62)

// CHAPTER #4

// const checkAGE = function(age) {
//     if(typeof(age) === "number") {
//         if(age < age_2){
//         console.log ("You dont have acces cause your age is " + age + " Its less then 18")
//         }
//         else if(age >= age_2 && age < age_3){
//         console.log("Welcome")
//         }
//         else if (age > age_3){
//         console.log("Keep CALM and look culture channels")
//         }
//     }
//     else {
//         console.log("CRITICAL ERR0R")
//     }
// }  
//     checkAGE("asd")
//     checkAGE("asdasd")
//     checkAGE(62)

// CHAPTER #5

    const checkAGE = function(age) {
        if (Number(age)) {
            if ((age) < age_2) {
            console.log ("You dont have acces cause your age is " + age + " Its less then 18")
            }
            else if(age >= age_2 && age < age_3){
            console.log("Welcome")
            }
            else if (age > age_3){
            console.log("Keep CALM and look culture channels")
            }
        }
        else {
            console.log("CRITICAL ERR0R")
        }
    }  
    
        checkAGE("17")
        checkAGE("18asd")
        checkAGE(62)








 