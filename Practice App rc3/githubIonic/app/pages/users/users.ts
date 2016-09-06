import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../model/user';
import { GithubUsers } from '../../providers/github-users/github-users';


import {UserDetailsPage} from '../user-details/user-details';

@Component({
  templateUrl: 'build/pages/users/users.html'
})
export class UsersPage {
  users: User[];


  constructor(public nav: NavController, public githubUsers: GithubUsers) {
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

  getItems(searchTerm) {
    let term = searchTerm.target.value;

    if (term.trim() == '' || term.trim() < 2) {
      this.githubUsers.load()
        .then(users => this.users=users)
        .then(users => console.log('users', users))
        .catch(err => console.log('404 Error', err))
    }

    else {
      this.githubUsers.searchUsers(term)
        .then(users => this.users=users)      
        .then(users => console.log('users', users))
        .catch(err => console.log('404 Error', err))

    }
  }


}
