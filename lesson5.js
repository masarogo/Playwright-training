//Logical "AND" -- defined by doble& -- all values have to be TRUE for expression to be TRUE
console.log(true && true)

//Logical "OR" -- defined by || -- any value should be TRUE for the expression to be TRUE
console.log(false || false)

var ageIsMoreThanEighteen = true
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is elegible for DL: ' + eligibilityForDriversLicense)

//Logical "NOT" -- defined by !
console.log(!true)
console.log(6 !== 10)