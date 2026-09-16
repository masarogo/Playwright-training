//Concatination and Interpolation
var price = 100
var itemName = "Table"
var messageToPrint = "The price for your "+itemName+" is "+price+" dollars" // Concatenation: combina los strings con las variables.
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` // Interpolation: lo mismo que el anterior pero menos usado
console.log(messageToPrint)
console.log(messageToPrint2)
