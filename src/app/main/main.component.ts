import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {HttpService} from '../services/http.service';
import {SharingService} from '../services/sharing.service';
import {UsersInteractor} from '../business/users.interactor';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: []
})
export class MainComponent implements OnInit {

  users: User[] = [];
  selectedUser: User;
  constructor (private http: HttpService,
               private sharingService: SharingService,
               private interactor: UsersInteractor) {}

  ngOnInit(): void {
    this.interactor.getUsers()
      .subscribe(value => {
        this.users = value;
      });
  }
selectUser(i: number) {
    this.selectedUser = this.users[i];
  this.interactor.selectedUser = this.selectedUser;



  // this.sharingService.setData(this.selectedUser);
}
}
