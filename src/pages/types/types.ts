import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import data from "../../assets/data/types.json"
import favdata from "../../assets/data/favorites.json"
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { LoginPage } from '../login/login';
import { RouletteDetailsPage } from '../roulette-details/roulette-details';

@Component({
  selector: 'page-types',
  templateUrl: 'types.html',
})
export class TypesPage {
  typesData: any[];
  favoritesData: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,public fireStore:AngularFirestore, private authService: AuthenticationProvider) {
   this.typesData = data.types;
   this.favoritesData = favdata.favorites;
  }

  delete(type){
    for(var i = 0; i < data.types.length; i++) {
      if(data.types[i] == type){
        data.types.splice(i, 1);
      }
    }
  }

  favorite(type){
    favdata.favorites.push(type);
  }

  unfavorite(type){
    //data.types.push(type.id.toString());
    for(var i = 0; i < favdata.favorites.length; i++) {
      if(favdata.favorites[i] == type){
        favdata.favorites.splice(i, 1);
      }
    }
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
