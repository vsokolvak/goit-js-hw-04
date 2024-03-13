"use strict"

function makeArray(firstArray, secondArray, maxLength) {
    // приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). 
    // Функція повинна створювати новий масив, 
    // який містить усі елементи з firstArray, 
    // а потім усі елементи з secondArray.

    // Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
    // В іншому випадку функція повинна повернути весь новий масив.

    // щоб не було помилок, перевіряю чи прийшли коректні дані
    if (!Array.isArray(firstArray) || !Array.isArray(secondArray) || typeof maxLength !== 'number' ) {
        return 'incorect data'
    }

    let newArray = firstArray.concat(secondArray)

    if (newArray.length > maxLength) {
        newArray = newArray.slice(0, maxLength)
    }

    return newArray

}

console.log('--------------------')
console.log('------ 2 TASK ------')
console.log('--------------------')
 
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
console.log(makeArray({1:"Earth", 2:"Jupiter"}, ["Neptune", "Uranus", "Venus"], 0)); // []