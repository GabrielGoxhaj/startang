export class CustomerModel{
    customerId: number;
    firstName: string;
    lastName: string;
    title: string;
    constructor(custId: string, firstName: string, lastName: string, title: string) {
        this.customerId = parseInt(custId);
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
    }
}