import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface IContactus {
  fullname: string;
  email: string;
  message: string;
  msg: string[]; // Add 'msg' property
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  private url: string = 'http://localhost:3001/contact';

  constructor(private http: HttpClient) { }

 

  addContactmsg(fullname: string, email: string, message: string): Observable<IContactus> {
    return this.http
      .post<IContactus>(this.url, {
        fullname: fullname,
        email: email,
        message: message,
    
      })
      .pipe(
        tap((response: any) => {
          // this._isLoggedIn$.next(true);
          // this.myToken = response.token;

          // localStorage.setItem('authToken', response.token);
        })
      );
  }


}
