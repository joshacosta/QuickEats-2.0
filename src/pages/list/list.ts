import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouletteDetailsPage } from '../roulette-details/roulette-details';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

import data from "../../assets/data/locations.json"
import { LoginPage } from '../login/login';

import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  locationsData: any[];
  locationsTest: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams,private authService: AuthenticationProvider) {
    this.locationsData = data.locations;

    //this.restaurantCollection = this.firestore.firestore.collection("restaurants");
    /*this.restaurantCollection.get().then( (snap) => {
      snap.forEach((doc) => {
        
        this.restaurantsData.push({
          name: doc.data().name,
          rating: doc.data().rating,
          address: doc.data().address,
          type: doc.data().type,
          price: doc.data().price,
          imageURL: doc.data().imageURL

        });
      })
     
    } )*/

    // Used to populate db with restaurant info 
    //this.locationsData.forEach(element => {
      //this.firestore.collection("restaurants").add(element);
    //})
  }


  goToDetails(location){
    this.navCtrl.push(RouletteDetailsPage, {locations: location});
  }

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.pop();
      this.navCtrl.setRoot(LoginPage);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
