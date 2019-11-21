import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

import data from "../../assets/data/types.json"
import favdata from "../../assets/data/favorites.json"

@Component({
  selector: 'page-types',
  templateUrl: 'types.html',
})
export class TypesPage {
  typesData: any[];
  types: any;
  public preferencesCollection: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,public fireStore:AngularFirestore) {
    this.preferencesCollection = fireStore.firestore.collection("users/" + firebase.auth().currentUser.uid + "/preferences");
    this.types = data.types;    
    favdata.favorites = [];
  }

  ionViewWillEnter(){
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
      this.typesData = snap.data().types
      this.typesData.forEach(function(type){
        favdata.favorites.push(type);
      })
    })
  }

  ionViewDidLeave(){
    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
        this.preferencesCollection.doc("userPreferences").set({
          rating: snap.data().rating,
          price: snap.data().price,
          types: favdata.favorites,
          favorites: snap.data().favorites,
          blacklist: snap.data().blacklist
        }).then(function(){
          console.log("successful set");
        })
    })
  }

  isFavorite(typeName){ return favdata.favorites.includes(typeName); }

  favorite(type){ favdata.favorites.push(type.id); }

  unfavorite(type){
    for(var i = 0; i < favdata.favorites.length ; i++) {
      if(favdata.favorites[i] == type.id) favdata.favorites.splice(i, 1);
    }
  }

  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }

}
