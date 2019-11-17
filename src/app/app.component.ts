import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { ListPage } from '../pages/list/list';
import { RoulettePage } from '../pages/roulette/roulette';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { HistoryPage } from "../pages/history/history"
import { PreferencesPage } from "../pages/preferences/preferences"

import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav, { static: true }) nav: Nav;

  rootPage: any;
  

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, ) {
        
    
    this.initializeApp();

    
    firebase.auth().onAuthStateChanged(user => {
      this.rootPage = user ? ListPage : LoginPage;
      this.nav.setRoot(this.rootPage);
    });

    this.pages = [
      { title: 'Restaurants', component: ListPage, icon: "pizza" },
      { title: 'Roulette', component: RoulettePage, icon:"aperture"},
      { title: 'History', component: HistoryPage, icon: "time"},
      { title: 'Quick Eats', component: HistoryPage, icon: "restaurant"},
      { title: 'Preferences', component: PreferencesPage, icon: "heart"}
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openProfile(){
    this.nav.setRoot(ProfilePage);
  }
}
