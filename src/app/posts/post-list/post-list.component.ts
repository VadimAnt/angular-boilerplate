import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  private posts: {};
  constructor(private postService: PostService) { }

  ngOnInit() {
    if(!this.posts) {
      this.postService.getPosts().subscribe(result => {
        this.posts = result;
      });
    }
  }

}
