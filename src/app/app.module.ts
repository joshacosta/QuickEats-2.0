import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { RoulettePage } from '../pages/roulette/roulette';
import { RouletteDetailsPage } from '../pages/roulette-details/roulette-details';
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register'
import { ProfilePage } from "../pages/profile/profile"
import { HistoryPage } from "../pages/history/history"
import { PreferencesPage } from "../pages/preferences/preferences"
import { TypesPage } from "../pages/types/types"
import { FavoritesPage } from "../pages/favorites/favorites"
import { BlacklistPage } from "../pages/blacklist/blacklist"
import { QuickEatsPage } from "../pages/quick-eats/quick-eats"

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';

import { AuthenticationProvider } from '../providers/authentication/authentication';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ReactiveFormsModule } from '@angular/forms';

firebase.initializeApp({
  apiKey: "AIzaSyDO5GeztIScNhBZScPmp9pROnYANsReHPM",
  authDomain: "quickeats-b4bb0.firebaseapp.com",
  databaseURL: "https://quickeats-b4bb0.firebaseio.com",
  projectId: "quickeats-b4bb0",
  storageBucket: "quickeats-b4bb0.appspot.com",
  messagingSenderId: "560504759766",
  appId: "1:560504759766:web:ca284a9e71502afb873077"
});

 
@NgModule({
  declarations: [
    MyApp,
    ListPage,
    RoulettePage,
    RouletteDetailsPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    HistoryPage,
    PreferencesPage,
    TypesPage,
    FavoritesPage,
    BlacklistPage,
    QuickEatsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDO5GeztIScNhBZScPmp9pROnYANsReHPM",
      authDomain: "quickeats-b4bb0.firebaseapp.com",
      databaseURL: "https://quickeats-b4bb0.firebaseio.com",
      projectId: "quickeats-b4bb0",
      storageBucket: "quickeats-b4bb0.appspot.com",
      messagingSenderId: "560504759766",
      appId: "1:560504759766:web:ca284a9e71502afb873077"
    }),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    RoulettePage,
    RouletteDetailsPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    HistoryPage,
    PreferencesPage,
    TypesPage,
    FavoritesPage,
    BlacklistPage,
    QuickEatsPage
  ],
  providers: [
    LaunchNavigator,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider
  ]
})
export class AppModule {}
