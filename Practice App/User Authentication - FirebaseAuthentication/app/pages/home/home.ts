import {Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {

  constructor(private af: AngularFire) {
  }
  ngOnInit() {


  }
  logInWithFB() {
    this.af.auth.login()
      .then(data => console.log('Facebook Successfully LogIn ', data))
      .catch(err => console.log('404 Error', err));

  }
  logInWithGoogle() {
    this.af.auth.login()
      .then(data => console.log('Google Successfully LogIn ', data))
      .catch(err => console.log('404 Error', err));


  }


}
