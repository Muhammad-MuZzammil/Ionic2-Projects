import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from 'ionic-native'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, private platform: Platform) {

  }
  ngOnInit() {
    Facebook.browserInit(1087801121306504);
  }

  logIn() {

    // console.log('ashdkjha')
    this.platform.ready()
      .then(() => {
        Facebook.login(['email'])
          .then((result: FacebookLoginResponse) => {

            console.log("Facebook success: " + JSON.stringify(result));
            //   });
          })
          .catch((err) => { console.log('err accured', err) })
      })
    // Facebook.login(['email'])
    //   .then((resp: FacebookLoginResponse) => { console.log('Logged In Successfully', JSON.stringify(resp)) })
    //   .catch(err => console.log(err))
  }
  getLoginStatus() {
    Facebook.getLoginStatus()
      .then(status => console.log('status', status))
      .catch(err => console.log('Error', err))

  }

  getAccessToken() {
    Facebook.getAccessToken()
      .then(token => console.log('token', token))
      .catch(err => console.log('Error', err))

  }

  showDialog() {
    Facebook.showDialog(
      {
        method: "apprequests",
        message: "Come on man, check out my application.",
        actionType: 'askfor',
        filters: 'app_non_users'
      })
      .then(data => console.log('data', data))
      .catch(err => console.log('error', err))
  }
  logOut() {
    Facebook.logout()
      .then((resp: FacebookLoginResponse) => {
        console.log("logout Successfully", JSON.stringify(resp));
      }).catch(err => console.log('404 Error', err))
  }
}
