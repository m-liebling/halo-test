import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/index';

import {User} from '../models/user.model';
import {HttpService} from '../services/http.service';

@Injectable()
export class UsersInteractor {
  users: User[] = [];
  selectedUser: User;
  subject: Subject<any>;
  constructor (private http: HttpService) {
    this.subject = new Subject();
  }

  getUsers(): Subject<any> {

    this.http.getUsers()
      .subscribe((val: User[]) => {
          this.users = val;
          // console.log('users in interactor: ' + val.forEach(x => console.log(x)));
          this.subject.next(val);
        },
        err => {
          console.log(err);
          this.users = [];
        });
    return this.subject;
  }

  // selectUser(user: User): Subject<any> {
  //   this.selectedUser = user;
  //   this.subject.next(this.selectedUser);
  //   return this.subject;
  // }
}
