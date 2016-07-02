import {Page, NavController} from 'ionic-angular';
import * as service from '../services/httpService';

import {FORM_PROVIDERS, FormBuilder, Validators, ControlGroup, Control} from 'angular2/common';
import {ControlMessages} from '../FormControl/control-msgs.component';
import {ValidationService} from '../services/validation.service';




//class (Model)
 class User{
     selectedType:string;
    name: string;
    email: string;
    password: string;
    confirmPass: string;
    isApproved: number;
    status: number;
        
constructor(name:string,email:string,password: string, confirmPass : string, selectedType:string,isApproved: number,status: number){
    this.selectedType=selectedType;
    this.name= name;
    this.email=email;
    this.password=password;
    this.confirmPass = confirmPass;
    this.isApproved = 0;
    this.status = 0;
}

 }


@Page({
  templateUrl: 'build/pages/signUp/signUp.html',
  directives: [ControlMessages]
})
export class signUpComponent {
  selectedType:Control;
  name: Control;
    email: Control;
    password: Control;
    confirmPass: Control;
    isApproved;
    status;
    
    
    signUpForm: ControlGroup;
  
 constructor(public nav: NavController, public httpService:service.HttpService, private _formBuilder: FormBuilder) {
     
      this.selectedType =new Control("",Validators.required)
      
      
      this.name=new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));
      
        this.email = new Control("", Validators.compose([Validators.required, ValidationService.emailValidator]));
        
       this.password = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));


       this.confirmPass = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));


        this.signUpForm = this._formBuilder.group({
            'selectedType':this.selectedType,
            'name': this.name,
            'email': this.email,
            'password': this.password,
            'confirmPass': this.confirmPass
        });
      
 }
  
    submitForm(name:HTMLFormElement, email:HTMLFormElement, password:HTMLFormElement,confirmPass:HTMLFormElement,selectedType:HTMLFormElement) {
        
        console.log(this.signUpForm.value.selectedType);
        console.log(`Username is : ${this.signUpForm.value.name}, email is : ${this.signUpForm.value.email}, password is ${this.signUpForm.value.password}, ConfirmPass is ${this.signUpForm.value.confirmPass}, Select Type ${this.signUpForm.value.selectedType}`);
    
        if(this.signUpForm.value.password==this.signUpForm.value.confirmPass){
        
      var obj = new User(this.signUpForm.value.name,this.signUpForm.value.email,this.signUpForm.value.password,this.signUpForm.value.confirmPass,this.signUpForm.value.selectedType,this.isApproved,this.status);
      console.log(obj)
      this.httpService.addJSON('http://localhost:4000/api/user/signup',obj,(d)=>{
         console.log(d); 
      })
      }
      else{
      alert("Password  does not match");
      }
    }

  
}
//muhammadmuzzammil10@hotmail.com