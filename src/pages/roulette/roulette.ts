import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouletteDetailsPage } from "../roulette-details/roulette-details"

import data from "../../assets/data/locations.json"
import blackdata from "../../assets/data/blacklist.json"

//import * as locations from "../../assets/data/restaurants.json"

/**
 * Generated class for the RoulettePage page.../
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roulette',
  templateUrl: 'roulette.html',
})
export class RoulettePage {
  public locationsData: any[];
  public preferencesCollection: any;
  blacklistData: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireStore:AngularFirestore) {
    this.locationsData = data.locations;
    blackdata.blacklist = [];
    this.preferencesCollection = fireStore.firestore.collection("users/" + firebase.auth().currentUser.uid + "/preferences");
    
  }

  ionViewWillEnter() {
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
      this.blacklistData = snap.data().blacklist;
      this.blacklistData.forEach(function(location){
        blackdata.blacklist.push(location);
      })
    })
  }

  openRouletteDetails(){
    this.navCtrl.push(RouletteDetailsPage, {locations: this.getRandom()});
  }

  getRandom(){
    var result =  this.locationsData[Math.floor(Math.random()*Math.floor(this.locationsData.length))]

    if(blackdata.blacklist.includes(result.name)){
      return this.getRandom();
    }

    return result;
  }

}
