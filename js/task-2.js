"use strict"

function formatMessage(message, maxLength) {
    // рядок (параметр message) та перевіряє його довжину відповідно до заданої 
    // максимальної довжини (параметр maxLength).
    if (message.length <= maxLength) {
        return message
    }

    if (message.length > maxLength) {
        const newMessage = message.slice( 0, maxLength ) + '...'
        return newMessage
    }
}

console.log('--------------------')
console.log('------ 2 TASK ------')
console.log('--------------------')
 
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"