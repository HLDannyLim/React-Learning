"use strict";
var Customer1 = /** @class */ (function () {
    //constructor
    function Customer1(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer1;
}());
// let's create an instance
var myCustomer1 = new Customer1("Martin", "Dixon");
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
