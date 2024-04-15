import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface userUpdateResponse {
  success: boolean;
  data: { success: boolean; data: object[] }[];
}

export interface userFetchResponse {
  username : string, email:string, password :string
}

export interface userDeleteResponse {
  username : string, email:string, password :string
}



@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userId : any = localStorage.getItem('_id')
  constructor(private http: HttpClient) {

  }

 

  handleFetchUser(): Observable<userFetchResponse> {
    this.userId = localStorage.getItem('_id')
    return this.http.get<userFetchResponse>(`https://reactserver-pink.vercel.app/user/users/${this.userId}`)
  }

  handleUpdateUser(username:any, email:any, password:any): Observable<userUpdateResponse> {
    this.userId = localStorage.getItem('_id')
    return this.http.post<userUpdateResponse>(`https://reactserver-pink.vercel.app/user/users/${this.userId}`,{username, email, password})
  }

  handleDeleteUser(username:any, email:any, password:any): Observable<userDeleteResponse> {
    this.userId = localStorage.getItem('_id')
    return this.http.delete<userDeleteResponse>(`https://reactserver-pink.vercel.app/user/users/${this.userId}`)
  }
 
}
