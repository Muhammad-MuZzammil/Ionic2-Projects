import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users/github-users';
import { User } from '../../model/user';


import {UserDetailsPage} from '../user-details/user-details';

@Component({
 templateUrl: 'build/pages/users/users.html',
  providers: [GithubUsers]
})
export class UsersPage {
  users: User[];
  

  constructor(public nav: NavController, githubUsers: GithubUsers) {
 githubUsers
      .load()
      .then(users => this.users = users)
      .then(users => console.log(users))
      .catch(err => console.log('404 Error', err))
  }


  // Navigate to user details page with the login as a parameter  
  goToDetails(event, login) {
    this.nav.push(UserDetailsPage, {
      login: login
    });
  }

  }
