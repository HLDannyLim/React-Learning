class Customer2 {
    private _firstName: string;
    private _lastName: string;



    
    //constructor
    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    
    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }


}

// let's create an instance
let myCustomer2 = new Customer2("Martin","Dixon");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);