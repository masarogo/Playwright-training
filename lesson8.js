//Functions are used to organize the code into reusable components. If we want to use the same functionality again and again we don't need to copy/paste the code, we can call our function

//Declarative function
function helloOne(){
    console.log('Hello one!')
}
helloOne()
// helloOne()

//Anonymous function: the difference between anonymous and declarative is that his function does not have a name
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

//ES6 function or Arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

//Function with arguments
function printName(name) {
    console.log(name)
}
printName('Mike')

//Function with return
function multiplyByTwo(number) {
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

//Import function
import { printAge } from '../JS Fundamentals/helpers/printHelper.js'
printAge(5)

//Import everything -- 2nd way to import a function
import * as helper from '../JS Fundamentals/helpers/printHelper.js'
helper.printAge(10)