import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouletteDetailsPage } from '../roulette-details/roulette-details';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

import data from "../../assets/data/locations.json"
import favdata from "../../assets/data/favorites.json"
import blackdata from "../../assets/data/blacklist.json"

import { LoginPage } from '../login/login';

import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  locationsData: any[];
  favoritesData: any[];
  blacklistData: any[];
  preferencesCollection: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private authService: AuthenticationProvider, public fireStore: AngularFirestore) {
    this.locationsData = data.locations;
    favdata.favorites = [];
    blackdata.blacklist = [];
    this.preferencesCollection = fireStore.firestore.collection("users/" + firebase.auth().currentUser.uid + "/preferences");
  }

  ionViewWillEnter() {
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
      this.favoritesData = snap.data().favorites
      this.blacklistData = snap.data().blacklist
      this.favoritesData.forEach(function(location){
        favdata.favorites.push(location);
      })
      this.blacklistData.forEach(function(location){
        blackdata.blacklist.push(location);
      })
    })
  }


  goToDetails(location){
    this.navCtrl.push(RouletteDetailsPage, {locations: location});
  }

  isBlacklist(location) {return blackdata.blacklist.includes(location); }

}
