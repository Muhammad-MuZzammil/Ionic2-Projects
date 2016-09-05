import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../model/user';

/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {

  githubUsers: any = null;
  constructor(private http: Http) { }

  load() {
    if (this.githubUsers) {
      return Promise.resolve(this.githubUsers);
    }
    return new Promise(resolve => {
      this.http.get('http://api.github.com/users')
        .map(res => <Array<User>>(res.json()))
        .subscribe(users => {
          this.githubUsers = users;
          resolve(this.githubUsers);
        })
    })
  }
  loadDetails(login: string) {
    return new Promise<User>(resolve => {
      this.http.get(`http://api.github.com/users/${login}`)
      .map(res =><User>(res.json()))
      .subscribe(user =>{
        resolve(user);
      });
    });
  }

}

