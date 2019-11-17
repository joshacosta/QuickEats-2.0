import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , MenuController} from 'ionic-angular';

import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import * as firebase from 'firebase/app';

/**
 * Generated class for the RouletteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roulette-details',
  templateUrl: 'roulette-details.html',
})
export class RouletteDetailsPage {
  public locationsData: any;
  public tags: string;
  public userDoc: any;
  public date: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private launchNavigator: LaunchNavigator, 
    public fireStore: AngularFirestore,
    public auth: AuthenticationProvider,
    public menuCtrl: MenuController
    ) 
  {    
    this.locationsData = navParams.get('locations');
    this.tags = this.locationsData.type.join(", ");
    this.userDoc = this.fireStore.collection("users/"+ firebase.auth().currentUser.uid +"/history");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RouletteDetailsPage');
  }

  
  ionViewDidEnter() { this.menuCtrl.enable(false, 'myMenu'); }

  ionViewWillLeave() { this.menuCtrl.enable(true, 'myMenu'); }

  goToNavigation(){
    let options: LaunchNavigatorOptions = { 
      app: this.launchNavigator.APP.USER_SELECT
    }
    // let options: LaunchNavigatorOptions = {
    //   start: 'London, ON',
    //   app: LaunchNavigator.getSupportedPlatforms.
    // }
    
    // this.launchNavigator.navigate('Toronto, ON', options)
    //   .then(
    //     success => console.log('Launched navigator'),
    //     error => console.log('Error launching navigator', error)
    //   );

    this.launchNavigator.navigate(this.locationsData.address, options);
  }

  addToHistory(){
    this.date = new Date() + "";

    this.userDoc.add({
      name: this.locationsData.name,
      date: this.date.substring(0,24)
    });
  }

  openMenu(){
    window.open("https://www.potbelly.com/menu/Sandwiches","_system");
  }

}
