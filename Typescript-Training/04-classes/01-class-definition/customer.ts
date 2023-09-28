class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName= theFirst;
        this.lastName= theLast;
    }
}

//lets create an instance
let myCustomer = new Customer("Sameh","Tarek");
myCustomer.firstName = "Sameh";
myCustomer.lastName = "Ahmd";

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);