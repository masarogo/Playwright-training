//Loops

//console.log('Hello World!')
//console.log('Hello World!')
//console.log('Hello World!')
//console.log('Hello World!')
//console.log('Hello World!')

//but this is not the most optimal way to do it, that's why we use loops

//For loop or For i loop
// for(statement1; statement2; statement3){
// }

//statement1: initial statement, what we want to start the loop with
//statement 2: how long do we want to run our loop and when we want to stop our lopp
//statement 3: what do we need to do after each cycle of the loop

for(let i=0; i<5; i=i+1){
    console.log('Hello World!')
}
//or you can use i++ to say i=i+1
//now we have 3 lines of code instead of 5 from the top
// como saber si el loop es correcto? se concatena la i (variable) en la impresion de hello world
// console.log('Hello World!' + i)

//another example of loop: For of loop (taking Arrays from lesson 3)
var cars = ["Volvo", "Toyota", "Twingo"]
    for(let car of cars){
    console.log(car)
}
//car is the variable that will be our iterator and this variable will use the info of the array

//if we want to stop a loop
//if(car == "Toyota") {
// break
//}

//ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})