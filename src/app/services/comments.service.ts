import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface IComment {
  name: string;
  email: string;
  body: string;
  id: number;
  postId: number;
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }
  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.url);
  }
}
