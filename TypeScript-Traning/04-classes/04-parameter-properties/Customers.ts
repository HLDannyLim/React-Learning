class Customer1 {
   
    //constructor
    constructor(private _firstName: string,private _lastName: string){
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
let myCustomer1 = new Customer1("Martin","Dixon");


console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);