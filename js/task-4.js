"use strict"

function getShippingCost(country) {

    // перевіряти можливість доставки товару в країну користувача 
    // (параметр country) 
    // і повертати повідомлення про результат

    const country1 = "China"
    const cost1 = 100
    const country2 = "Chile"
    const cost2 = 250
    const country3 = "Australia"
    const cost3 = 170
    const country4 = "Jamaica"
    const cost4 = 120

    function createResultMessage( country, price ) {
        return `"Shipping to ${country} will cost ${price} credits"`
    }

    switch (country) {

        case country1:
            return createResultMessage( country1, cost1 )
        case country2:
            return createResultMessage( country2, cost2 )
        case country3:
            return createResultMessage( country3, cost3 )
        case country4:
            return createResultMessage( country4, cost4 )
    
        default:
            return "Sorry, there is no delivery to your country"
    }

}

console.log('--------------------')
console.log('------ 4 TASK ------')
console.log('--------------------')

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

