import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {SharingService} from '../services/sharing.service';
import {ActivatedRoute} from '@angular/router';
import {UsersInteractor} from '../business/users.interactor';
import {UserDetails} from '../models/user-details';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  selectedUser: User = null;
  selectedOption = '';
  selectedValue = '';
  subscriber;
  capitalize = false;
  userDetails: UserDetails[];
  constructor(private sharingService: SharingService,
              private interactor: UsersInteractor,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.userDetails = [
      new UserDetails('Hi, My name is', 'name', 'account_circle', true),
      new UserDetails('My email address is', 'email', 'mail', false),
      new UserDetails('My birthday is', 'birthday', 'assignment', false),
      new UserDetails('My phone number is', 'phoneNumber', 'phone', false),
      new UserDetails('My address is', 'address', 'pin_drop', true),
      new UserDetails('My password is', 'password', 'lock', false)
    ];
    this.subscriber = this.interactor.subject.subscribe(value => {
      const id = this.router.snapshot.params['id'];
      this.selectedUser = this.interactor.users[id];
      // console.log('selected: ' + this.selectedUser);
    });
    this.router.params.subscribe(value => {
      this.selectedUser = this.interactor.users[value['id']];
    });
    this.selectedOption = this.userDetails[0].selText;


//     this.sharingService.getData().subscribe(
// value => {
//   if (value.selectedUser !== undefined) {
//     this.selectedUser = value.selectedUser;
//   }
// });
  }
  selectDetails(selectedOption: string, valName: string, capitalize: boolean) {
    this.selectedOption = selectedOption;
    this.selectedValue = valName;
    this.capitalize = capitalize;
  }
}

