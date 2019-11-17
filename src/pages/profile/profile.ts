import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import * as firebase from 'firebase/app';

import { LoginPage } from "../login/login"

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
  export class ProfilePage {
    public email = firebase.auth().currentUser.email;

  constructor(public navCtrl: NavController, public navParams: NavParams,private authService: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.setRoot(LoginPage);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
