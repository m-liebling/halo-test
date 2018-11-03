import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs/index';
import {User} from '../models/user.model';
import {catchError, map} from 'rxjs/internal/operators';

@Injectable()
export class HttpService {
constructor (private http: HttpClient) {}

baseUrl = 'https://randomuser.me/api';

getUsers(): Observable<User[]> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  return this.http.get<any>(this.baseUrl + '/?results=10', {headers})
    .pipe(map((val) => {
        const  arr: User[] = [];
        const y = val.results;
        y.forEach(x => {
          const user = new User(x.name.first + ' ' + x.name.last,
            x.email, (new Date(x.dob.date)).toLocaleDateString(), x.location.street, x.phone,
            x.login.password, x.picture.medium);
          arr.push(user);
        });
        console.log(arr);
        return arr;
      }

      ),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return throwError(new Error('Server error'));
      }));
}
}
