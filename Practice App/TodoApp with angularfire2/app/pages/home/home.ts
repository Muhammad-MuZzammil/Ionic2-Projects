import {Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {
  show: boolean = false;
  edit: boolean = true
  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
  }
  ngOnInit() {
    this.items = this.af.database.list('items')
    // console.log(this.items);
// this.items=this.af.database.list('items',{preserveSnapshot:true});
//     this.items.subscribe(snapshots => {
//       snapshots.forEach(snapshot => {
//           console.log(snapshot.key)
//           console.log(snapshot.val)
//       }); 
//     })
    
    


  }
  showData() {
    this.show = false
    this.edit = true;

    this.items = this.af.database.list('items')

  }
  editItem() {
    this.show = true;
    this.edit = false;

  }
  addItem(pushItem: HTMLInputElement) {
    this.items.push({ text: pushItem })
      .then(success => console.log('push data Successfully', success))
      .catch(err => console.log('404 Error', err));
  }

  updateBtn(key: string, updateData: HTMLInputElement) {
    this.show = true;

    this.items.update(key, { text: updateData })
      .then(success => console.log('data updated', success))
      .catch(err => console.log('404 Error', err));

  }
  deleteItem(key: string) {
    this.items.remove(key)
      .then(success => console.log('Delete Item Successfully', success))
      .catch(err => console.log('404 Error', err));
  }
  deleteAll() {
    this.items.remove();
    
  }
}
