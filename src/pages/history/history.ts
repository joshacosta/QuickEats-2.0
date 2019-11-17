import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

import { history } from "../../models/history";
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  historyCollection: any;
  historyData: history[] = [];
  usersCollection: any;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore:AngularFirestore) {
    this.historyCollection = this.fireStore.firestore.collection("users/"+ firebase.auth().currentUser.uid +"/history");
    this.usersCollection = this.fireStore.firestore.collection("users");

    this.historyCollection.get().then( (snap) => {
      snap.forEach((doc) => {
        console.log(doc.data());
        this.historyData.push({
          date: doc.data().date,
          name: doc.data().name
        });
      })
    } )

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  
}


