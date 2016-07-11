import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFire,FirebaseListObservable } from 'angularfire2'
// import { Observable } from 'rxjs/observable'


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  // todoArr:any[]=[];
  // saad:any= "MuZz";
  todoArr:FirebaseListObservable<any[]>;

  constructor(private navController: NavController, private af: AngularFire) {
         console.log('event1');

  }

  AddTodo(event: HTMLInputElement) {
         console.log('event1',event.value);

    // this.todoArr.push(event.value)
         console.log("Before1");

     this.todoArr = this.af.database.list('/tasks');
     console.log("Before");
     
    this.todoArr.push(event)
    .then((cb) => console.log("task pushed in FB successfully", cb))
    .catch((err) => console.log("404 Error",err));
     console.log("after");
    
  }
  deleteTask() {
    console.log("Delete Task");

  }
  EditTask() {
    console.log("Edit Task");

  }
}
