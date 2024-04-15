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
    return this.http.get<userFetchResponse>(`http://localhost:3001/user/users/${this.userId}`)
  }

  handleUpdateUser(username:any, email:any, password:any): Observable<userUpdateResponse> {
    return this.http.post<userUpdateResponse>(`http://localhost:3001/user/users/${this.userId}`,{username, email, password})
  }

  handleDeleteUser(username:any, email:any, password:any): Observable<userDeleteResponse> {
    return this.http.post<userDeleteResponse>(`http://localhost:3001/user/users/${this.userId}`,{username, email, password})
  }
 
}
