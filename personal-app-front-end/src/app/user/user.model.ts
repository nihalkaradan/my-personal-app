export class User{
    name: string;
    email: string;
    gender: string;
    status: boolean;
    constructor(name:string,email:string,gender:string,status:boolean){
        this.name= name;
        this.email= email;
        this.gender = gender;
        this.status= status;

    }
}