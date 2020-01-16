import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { User } from '@shared/models/User.Model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = true;
  authToken = 'RandomTextdffasdhfkjfwqq1452fdsafas34fdsafadfasf55459tewvadf941sfhasdkjfhwkjh';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  user: User;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    this.user = new User();

    this.user = { id: 1, username, password, firstName: 'Tom', lastName: 'Smith' };

    localStorage.setItem('currentUser', JSON.stringify(this.user));
    this.currentUserSubject.next(this.user);
    return this.user;

    // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //     .pipe(map(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('currentUser', JSON.stringify(user));
    //         this.currentUserSubject.next(user);
    //         return user;
    //     }));
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
