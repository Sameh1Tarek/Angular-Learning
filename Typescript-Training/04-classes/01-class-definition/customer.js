var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//lets create an instance
var myCustomer = new Customer("Sameh", "Tarek");
myCustomer.firstName = "Sameh";
myCustomer.lastName = "Ahmd";
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
