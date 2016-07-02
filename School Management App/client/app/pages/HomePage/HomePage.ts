import {Page, NavController} from 'ionic-angular';

import * as service from '../services/httpService';



@Page({
  templateUrl: 'build/pages/HomePage/HomePage.html'
})
export class HomePage {
  getAllUser: any[] = [];
  constructor(public httpService:service.HttpService) {
console.log('saad')
    
      this.httpService.getJSON('http://localhost:4000/api/user/getUsers', (d) => {
      //console.log(api/user/getUsers);

        console.log(d);
      console.log(d.data);
        
      this.getAllUser = d.data;
      })

  }

  rightOption(id) {
    var obj = {
      _id:id,
      Type:1
    }
    this.httpService.updateJSON('http://localhost:4000/api/user/updateUserStatus', obj, (d) => {
      console.log('rightOption Obj',obj);

      console.log('rightOption d',d);
      
    })
  console.log("True")
}

  wrongOption(id) {
  var obj = {
      _id:id,
      Type:3
    }
    
    this.httpService.updateJSON('http://localhost:4000/api/user/updateUserStatus', obj, (d) => {
      console.log('wrongOption obj ',obj);
      console.log('wrongOption d',d);
})
 console.log("False")
}
  
  
}
