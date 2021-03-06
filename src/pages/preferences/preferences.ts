import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TypesPage } from "../../pages/types/types"
import { FavoritesPage } from "../../pages/favorites/favorites"
import { BlacklistPage } from "../../pages/blacklist/blacklist"

import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';


/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {
  price: number;
  rating: number;

  preferencesCollection: any;
  userDoc: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore) {
    this.preferencesCollection = fireStore.firestore.collection("users/" + firebase.auth().currentUser.uid + "/preferences");
    this.userDoc = this.fireStore.collection("users/"+ firebase.auth().currentUser.uid +"/history");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
      this.price = snap.data().price;
      this.rating = snap.data().rating;
    })
  }

  ionViewDidLeave(){
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
      this.preferencesCollection.doc("userPreferences").set({
        rating: this.rating,
        price: this.price,
        types: snap.data().types,
        favorites: snap.data().favorites,
        blacklist: snap.data().blacklist
      }).then(function(){
        console.log("successful set");
      })
  })
  }

  goToTypesPage(){ this.navCtrl.push(TypesPage); }

  goToFavoritesPage(){ this.navCtrl.push(FavoritesPage); }

  goToBlacklistPage(){this.navCtrl.push(BlacklistPage); }
}
