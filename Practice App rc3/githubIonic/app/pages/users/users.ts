import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users/github-users';
import { User } from '../../model/user';
import {UserDetailsPage} from '../user-details/user-details';

/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [GithubUsers]
})
export class UsersPage implements OnInit {
  users: User[];
  constructor(private nav: NavController, public githubUsers: GithubUsers) {
  }
  ngOnInit() {
    this.githubUsers
      .load()
      .then(users => this.users = users)
      .then(users => console.log(users))
      .catch(err => console.log('404 Error', err))
  }

  gotoDetails(event, login) {
    this.nav.push(UserDetailsPage, {
      login: login
    });
  }

}
