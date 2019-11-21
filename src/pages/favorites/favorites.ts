import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

import data from "../../assets/data/locations.json"
import { restaurant } from '../../models/restaurant.js';
import favdata from "../../assets/data/favorites.json"

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public restaurantData: any;
  public preferencesCollection: any;
  favoritesData: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireStore:AngularFirestore) {
    this.restaurantData = data.locations;
    favdata.favorites = []
    this.preferencesCollection = fireStore.firestore.collection("users/" + firebase.auth().currentUser.uid + "/preferences");
  }

  ionViewWillEnter() {
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
      this.favoritesData = snap.data().favorites
      this.favoritesData.forEach(function(location){
        favdata.favorites.push(location);
      })
    })
  }

  ionViewDidLeave(){
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
        this.preferencesCollection.doc("userPreferences").set({
          rating: snap.data().rating,
          price: snap.data().price,
          types: snap.data().types,
          favorites: favdata.favorites,
          blacklist: snap.data().blacklist
        }).then(function(){
          console.log("successful set");
        })
    })
  }

  isFavorite(location){ return favdata.favorites.includes(location); }

  favorite(location){ favdata.favorites.push(location); }

  unfavorite(location){
    for(var i = 0; i < favdata.favorites.length ; i++) {
      if(favdata.favorites[i] == location) favdata.favorites.splice(i, 1);
    }
  }

  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }

}
