export function printAge(age) {
    console.log(age)
}

//Class and Methods: they are others forms of abstraction, similar to the function, to create reusable components of the code
// we need to export the class so it can be visible to other files inside our project
//customer details seria method name

export class CustomerDetails {

    printFirstName(firstName) {
        console.log(firstName)
    }

    /**
     * This method will print the last name
     * @param {string} lastName 
     */
      printLastName(lastName) {
        console.log(lastName)
    }

}