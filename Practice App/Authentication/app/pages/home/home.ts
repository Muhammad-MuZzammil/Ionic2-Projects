import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2'


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public af: AngularFire) {

  }
login(){
console.log('saad');
  
  // this.af.auth.login()
  // .then(data =>console.log(data))
  // .catch(err => console.log(err))
}  
  
}
