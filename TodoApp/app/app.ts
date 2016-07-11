import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';

import {HomePage} from './pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  

  constructor(platform: Platform) {




   
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp,[
  
 FIREBASE_PROVIDERS,
    defaultFirebase({
        apiKey: "AIzaSyBZRn-Be7LtepznbN4C_ht7Qcry8fTaJnQ",
        authDomain:  "todoapp-c9351.firebaseapp.com",
        databaseURL: "https://todoapp-c9351.firebaseio.com",
        storageBucket: "todoapp-c9351.appspot.com",
    })


  ]);
