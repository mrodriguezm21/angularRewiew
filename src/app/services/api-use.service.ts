import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUseService {

  constructor(private http: HttpClient) { }

  getChars():Observable<any> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character');
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }
}
