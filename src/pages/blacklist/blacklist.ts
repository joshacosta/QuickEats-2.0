import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

import data from "../../assets/data/locations.json"
import { restaurant } from '../../models/restaurant.js';
import blackdata from "../../assets/data/blacklist.json"

/**
 * Generated class for the BlacklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blacklist',
  templateUrl: 'blacklist.html',
})
export class BlacklistPage {
  public restaurantData: any;
  public preferencesCollection: any;
  blacklistData: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireStore:AngularFirestore) {
    this.restaurantData = data.locations;
    blackdata.blacklist = [];
    this.preferencesCollection = fireStore.firestore.collection("users/" + firebase.auth().currentUser.uid + "/preferences");
  }

  ionViewWillEnter() {
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
      this.blacklistData = snap.data().blacklist
      this.blacklistData.forEach(function(location){
        blackdata.blacklist.push(location);
      })
    })
  }

  ionViewDidLeave(){
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
        this.preferencesCollection.doc("userPreferences").set({
          rating: snap.data().rating,
          price: snap.data().price,
          types: snap.data().types,
          favorites: snap.data().favorites,
          blacklist: blackdata.blacklist
        }).then(function(){
          console.log("successful set");
        })
    })
  }

  isFavorite(location){ return blackdata.blacklist.includes(location); }

  favorite(location){ blackdata.blacklist.push(location); }

  unfavorite(location){
    for(var i = 0; i < blackdata.blacklist.length ; i++) {
      if(blackdata.blacklist[i] == location) blackdata.blacklist.splice(i, 1);
    }
  }

  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }

}
