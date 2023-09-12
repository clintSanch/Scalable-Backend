import { User } from "../user/user.interface";

export class UserDetails implements User{

    username: string;
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: number

    constructor(username: string, id: number, firstname: string, lastname: string, email: string, phonenumber: number){
        this.username = username;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phonenumber = phonenumber;
    }

}
