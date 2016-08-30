import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from 'ionic-native'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    Facebook.browserInit(1087801121306504);
  }

  logIn() {
    Facebook.login(['email'])
      .then((resp: FacebookLoginResponse) => { console.log('Logged In Successfully', resp) })
      .catch(err => console.log(err))
  }
  getDetails() {

  }
  logOut() {

  }
}
