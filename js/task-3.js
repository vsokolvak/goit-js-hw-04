"use strict"

function checkForSpam(message) {
    // приймає рядок (параметр message), 
    // перевіряє його на вміст заборонених слів spam і sale, 
    // і повертає результат перевірки

    return (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale"))
}

console.log('--------------------')
console.log('------ 3 TASK ------')
console.log('--------------------')

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true