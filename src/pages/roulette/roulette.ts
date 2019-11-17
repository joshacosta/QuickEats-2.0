import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RouletteDetailsPage } from "../roulette-details/roulette-details"

import data from "../../assets/data/locations.json"

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locationsData = data.locations;


    console.log(this.locationsData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoulettePage');
  }



  openRouletteDetails(){
    this.navCtrl.push(RouletteDetailsPage, {locations: this.getRandom()});
  }

  getRandom(){
    return this.locationsData[Math.floor(Math.random()*Math.floor(this.locationsData.length))]
  }

}
