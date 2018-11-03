import {Observable, Subject} from 'rxjs/index';
import {User} from '../models/user.model';

export class SharingService {
  private subject: Subject<{selectedUser: User}>;
  constructor() {
    this.subject = new Subject<{selectedUser: User}>();
  }
  setData(selectedUser: User) {
    this.subject.next({selectedUser: selectedUser});
  }
  getData(): Observable<{selectedUser: User}> {
    return this.subject.asObservable();
  }
}
