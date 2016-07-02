import {Page ,NavParams,NavController} from 'ionic-angular';




@Page({
  templateUrl: 'build/pages/student/student.html'
})
export class StudentPage {
  Show;
   
    constructor(public nav: NavController,public params: NavParams) {
      this.Show = this.params.get('ShowStud');
  console.log(this.Show) 
      
}
  
}
