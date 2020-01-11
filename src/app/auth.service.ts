import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    token: string;
    constructor(private router:Router){}
    signUpUser(email:string, pwd:string){
    firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(
        response => {
            this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
            .then (
            (token: string) => this.token = token
            )
        }
    )
   
    }
    
    signInUser(email:string, pwd:string){
        firebase.auth().signInWithEmailAndPassword(email,pwd)
        .then(
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                .then (
                (token: string) => this.token = token
                )
            }
        )
    }
    getIdToken(){
        return firebase.auth().currentUser.getIdToken()
        .then (
            (token: string) => this.token = token
            );
            return this.token;
    }

    logOut(){
      firebase.auth().signOut();
      this.token = null; 
    }

    isAuthenticated(){
        return this.token != null;
    }
        
}