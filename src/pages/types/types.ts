import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the TypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-types',
  templateUrl: 'types.html',
})
export class TypesPage {
  private callback: Function;
  private typeSet = new Set();

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,public fireStore:AngularFirestore) {
    this.callback = navParams.get('callback'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypesPage');
  }

  returnData(): void {
    this.callback('some data');
    this.navCtrl.pop();
  }  

  ionViewDidEnter() { this.menuCtrl.enable(false, 'myMenu'); }

  ionViewWillLeave() { this.menuCtrl.enable(true, 'myMenu'); }

}
