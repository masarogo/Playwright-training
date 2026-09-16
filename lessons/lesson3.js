//Objects: definido por curling brases y la info esta salvado in the format of keys and value pairs. 
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}

//Dot Notation
customer.firstName = "Alex"
// Bracket Notation
customer ['lastName'] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays: definido por square brases. list of items that you want to save. They are placed inside the array as an order. Es un index, y siempre arranca con 0.
var car = ["Volvo", "Toyota", "Twingo"]
car[1] = "BWM"
console.log(car[1])
console.log(customer.cars[0])

