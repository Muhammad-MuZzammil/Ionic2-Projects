import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  todoArr:any[]=[];
  constructor(private navController: NavController) {

  }
  
  addTodo(event:HTMLInputElement){
    this.todoArr.push(event.value)
    console.log(event.value);
    
  }
}
