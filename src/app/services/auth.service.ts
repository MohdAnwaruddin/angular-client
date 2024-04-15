import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


export interface IAuth {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private myToken = '';
  private url: string = 'https://reactserver-pink.vercel.app/login';
  private urlRegister: string = 'https://reactserver-pink.vercel.app/register';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url, {
        username: username,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          this.myToken = response.token;

          localStorage.setItem('authToken', response.token);
          localStorage.setItem('_id', response.user._id);
          
        })
      );
  }

  logout() {
    this._isLoggedIn$.next(false);
    this.myToken = '';

    localStorage.removeItem('authToken');
    localStorage.removeItem('_id');
  }

  register(username: string, email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.urlRegister, {
        username: username,
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          this.myToken = response.token;

          localStorage.setItem('authToken', response.token);
        })
      );
  }




}

