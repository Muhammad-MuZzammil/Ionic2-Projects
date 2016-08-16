import {Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {
  show: boolean = false;
  edit: boolean = true
  items: FirebaseObjectObservable<any[]>;
  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.items = this.af.database.object('/item');
  }
  setName(newName:string){
    this.items.set({name: newName})
    .then(success => console.log('Set data Successfully', success))
      .catch(err => console.log('404 Error', err))
  }

  updateSize(newSize:string){
    this.items.update({size:newSize})
    .then(success => console.log('Update data Successfully', success))
      .catch(err => console.log('404 Error', err))
  }
  delete(){
    this.items.remove().then(success => console.log('Delete data Successfully', success))
      .catch(err => console.log('404 Error', err))
  }
}