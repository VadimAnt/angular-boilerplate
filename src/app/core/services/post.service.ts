import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: {};
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(refresh?: boolean): Observable<any> {
    if(!refresh && this.posts) {
      return of(this.posts);
    }
    return this.http.get<any>(this.url)
      .pipe(map(posts => {
        this.posts = posts;
        return posts;
      }));
  }

  getPost(postId: String): Observable<any> {
    return this.http.get<any>(`${this.url}/${postId}`)
      .pipe(map(post => {
        return post;
      }));
  }

  createPost(post: Object): Observable<any> {
    return this.http.post(this.url, post);
  }

  updatePost(id: String, post: Object): Observable<any> {
    return this.http.put(this.url, post);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete(this.url);
  }
}
