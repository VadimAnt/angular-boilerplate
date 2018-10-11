import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(posts => {
        return posts;
      }));
  }

  getPost(postId: String): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .pipe(map(post => {
        return post;
      }));
  }
}
