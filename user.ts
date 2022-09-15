export class User {
    
    email!: string;

    password!: string;

    name!: string;

    phone!: string;

    address!: string;

    active: boolean;

    constructor(){
        this.active = true;
    }


}
