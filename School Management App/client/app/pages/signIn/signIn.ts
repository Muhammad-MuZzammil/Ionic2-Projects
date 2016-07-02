import {Page, NavController} from 'ionic-angular';
import * as service from '../services/httpService';
import {FORM_PROVIDERS, FormBuilder, Validators, ControlGroup, Control} from 'angular2/common';
import {ControlMessages} from '../FormControl/control-msgs.component';
import {ValidationService} from '../services/validation.service';
// import {GettingStartedPage1} from '../getting-started.1/getting-started'
import {ListPage} from '../list/list';
import {addPage} from '../AddClass/addclass';

import {signUpComponent} from '../signUp/signUp';


//class (Model)




@Page({
    templateUrl: 'build/pages/signIn/signIn.html',
    directives: [ControlMessages]
})
export class signIn {

    password: Control;
    email: Control;
    userForm: ControlGroup;

    constructor(public nav: NavController, public httpService: service.HttpService, private _formBuilder: FormBuilder) {

        this.password = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));
        this.email = new Control("", Validators.compose([Validators.required, ValidationService.emailValidator]));

        this.userForm = this._formBuilder.group({
            'password': this.password,
            'email': this.email
        });
    }
    
    saveUser() {
        if (this.userForm.dirty && this.userForm.valid) {
            alert(` Email: ${this.userForm.value.email} Password: ${this.userForm.value.password} `);
        }
    }



    signIn(email:HTMLFormElement, password: HTMLFormElement) {

        console.log(`Email is : ${this.userForm.value.email}, password is : ${this.userForm.value.password}`);

        var obj = { email: this.userForm.value.email, password: this.userForm.value.password };
        console.log(obj)
        this.httpService.addJSON('http://localhost:4000/api/user/signin', obj, (d) => {
            console.log(d);

         this.nav.push(addPage);
        });

    }
    signUp() {
        console.log('Before signup');
        this.nav.push(signUpComponent);
        
        console.log('After signup');
    }



}




