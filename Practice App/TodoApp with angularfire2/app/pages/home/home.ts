import {Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {

  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
  }
 ngOnInit(){
   
 }
 addItem(takeitem:HTMLInputElement){
console.log(takeitem.value);
   
    this.items = this.af.database.list('items')
    this.items.push(takeitem.value)
    .then(result => console.log('data pushed successfully', result))
    .catch(err => console.log(err))

 }

}
