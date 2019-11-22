import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  userCollection : any;
  constructor(private fireStore: AngularFirestore){
    this.userCollection = fireStore.collection<any>('users');
  }
 
  registerUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(val =>
      {
        this.userCollection.doc(val.user.uid).set({
          uid: val.user.uid,
          email: val.user.email
        });

        this.userCollection.doc(val.user.uid).collection("preferences").doc("userPreferences").set({
          rating: 1,
          price: 1,
          types: [],
          favorites: [],
          blacklist: []
        })
      }
      ,
       err => reject(err))
      
   })
  }
 
  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }
 
  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
 
  userDetails(){
    return firebase.auth().currentUser;
  }

  userEmail(){
    return firebase.auth().currentUser.email;
  }

  userID(){
    return firebase.auth().currentUser.uid;
  }

}
