import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users/github-users';

import { User } from '../../model/user';


@Component({
  templateUrl: 'build/pages/user-details/user-details.html'
})
export class UserDetailsPage {
  user: User = new User;
  login: string;

  constructor(private navCtrl: NavController, navParams: NavParams, githubUsers: GithubUsers) {
    this.login = navParams.get('login')
    githubUsers.loadDetails(this.login)
      .then(user => this.user = user)
      .then(user => console.log('loadDetails', user))
      .catch(err => console.log('404 Error', err))

  }


}
