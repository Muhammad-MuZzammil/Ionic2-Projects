import {Component,OnInit} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import { enableProdMode } from '@angular/core';
import { FIREBASE_PROVIDERS, 
  defaultFirebase,
  AngularFire,
AuthMethods,
AuthProviders,
firebaseAuthConfig } from 'angularfire2';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp implements OnInit {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  
}
ngOnInit(){
  } 
}

ionicBootstrap(MyApp, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
     apiKey: "AIzaSyBZRn-Be7LtepznbN4C_ht7Qcry8fTaJnQ",
    authDomain: "todoapp-c9351.firebaseapp.com",
    databaseURL: "https://todoapp-c9351.firebaseio.com",
    storageBucket: "todoapp-c9351.appspot.com"
  }),
  firebaseAuthConfig({
    provider:AuthProviders.Google,
    method:AuthMethods.Popup
  }),
  // firebaseAuthConfig({
  //   provider:AuthProviders.Facebook,
  //   method:AuthMethods.Popup
  // }), 
   
  
]);
