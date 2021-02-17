import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/_models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  private currentTokenSubject: BehaviorSubject<string>;
  public currentUser: Observable<UserModel>;
  public currentToken: Observable<string>;

  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<string>(
      localStorage.getItem('token')
        ? JSON.parse(localStorage.getItem('token') || '{}')
        : null
    );
    this.currentToken = this.currentTokenSubject.asObservable();
    this.currentUserSubject = new BehaviorSubject<UserModel>(
      localStorage.getItem('currentUser')
        ? JSON.parse(localStorage.getItem('currentUser') || '{}')
        : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  public get currentTokenValue(): string {
    return this.currentTokenSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(
        `${environment.apiUrl}/auth/sign-in`,
        {
          email,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        map((res) => {
          localStorage.setItem(
            'token',
            JSON.stringify(res.headers.get('authorization'))
          );
          localStorage.setItem('currentUser', JSON.stringify(res.body));
          this.currentTokenSubject.next(
            JSON.stringify(res.headers.get('authorization'))
          );
          this.currentUserSubject.next(res.body);
          return res.body;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentTokenSubject.next('');
  }
}
