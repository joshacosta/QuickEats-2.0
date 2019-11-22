import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouletteDetailsPage } from "../roulette-details/roulette-details"

import data from "../../assets/data/locations.json"

import blackdata from "../../assets/data/blacklist.json"
import favdata from "../../assets/data/favorites.json"
import prefdata from "../../assets/data/preferences.json"

/**
 * Generated class for the QuickEatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quick-eats',
  templateUrl: 'quick-eats.html',
})
export class QuickEatsPage {

  preferencesCollection: any;
  public locationsData: any[];
  typesData: any[];
  favsData: any[];
  blacklistData: any[]
  price: number;
  rating: number;
  weightSum: number;
  orginalWeight: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore) {
    this.locationsData = data.locations;
    this.preferencesCollection = fireStore.firestore.collection("users/" + firebase.auth().currentUser.uid + "/preferences");
    blackdata.blacklist = []
    prefdata.favorites = []
    prefdata.types = []
    prefdata.price = 0
    prefdata.rating = 0
    this.weightSum = 0;


    
  }

  ionViewWillEnter() {
    

    this.locationsData.forEach(function(location){
      location.weight = 100;
    })



    this.preferencesCollection.doc("userPreferences").get().then( (snap) => {
      this.typesData = snap.data().types
      this.favsData = snap.data().favorites
      this.blacklistData = snap.data().blacklist
      prefdata.price = snap.data().price
      prefdata.rating = snap.data().rating
      blackdata.blacklist = []
      

      this.typesData.forEach(function(type){
        prefdata.types.push(type)
      })
      this.favsData.forEach(function(type){
        prefdata.favorites.push(type);
      })
      this.blacklistData.forEach(function(blacklist){
        blackdata.blacklist.push(blacklist)
      })

      for(var i = 0; i < this.locationsData.length ; i++){
        if(blackdata.blacklist.includes(this.locationsData[i].name)){
          this.locationsData.splice(i,1);
        }
      }

      for(var i = 0; i < this.locationsData.length ; i++){
        if(blackdata.blacklist.includes(this.locationsData[i].name)){
          this.locationsData.splice(i,1);
        }
      }
      

      this.locationsData.forEach(function(location){
        if(prefdata.types.includes(location.type)){
          console.log("Added 25 to " + location.name +" for being a preferred type")
          location.weight += 25;
        }
        if(prefdata.favorites.includes(location.name)){
          console.log("Added 25 to " + location.name +" for being a preferred restaurant")
          location.weight += 25;
        }
        if(location.price >= prefdata.price){
          console.log("Added 25 to " + location.name +" for being a preferred price")
          location.weight += 25;
        }
        if(location.rating >= prefdata.rating){
          console.log("Added 25 to " + location.name +" for being a preferred rating")
          location.weight += 25;
        }
      })

      
      
      
    })
  }



  openRouletteDetails(){
    this.navCtrl.push(RouletteDetailsPage, {locations: this.getRandom()});
  }

  getRandom(){
    for(var i = 0; i < this.locationsData.length ; i++){
      if(blackdata.blacklist.includes(this.locationsData[i].name)){
        this.locationsData.splice(i,1);
      }
    }
    console.log("Blacklisted: ", blackdata.blacklist)

    

    var weightSum = 0;
    for(var i = 0; i < this.locationsData.length ; i++){
      weightSum += this.locationsData[i].weight
    }


    console.log("after removing: ", this.locationsData);
    console.log("weight sum: ",weightSum)


    var random = Math.floor(Math.random() * Math.floor(weightSum))
    console.log("random number: ",random)

    for(var i = 0; i < this.locationsData.length ; i++) {
      if( random < this.locationsData[i].weight ){
        return this.locationsData[i]
      }
      random -= this.locationsData[i].weight
    }

  }

}
