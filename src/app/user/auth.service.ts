import { Injectable } from '@angular/core';
import { IUser } from './user.model';


@Injectable()
export class AuthService
{
    currentUser: IUser

    loginUser(userName: string, password: string){
        this.currentUser = {
            firstName: 'Juan',
            lastName: 'Romero',
            id : 1,
            userName : userName
        }
    }

    ActualizarUsuari(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    isAutenticado(){
        return !!this.currentUser;
    }
}