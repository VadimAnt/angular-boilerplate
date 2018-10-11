import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private post: {};
  private postId: String;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.postId = this.route.snapshot.params.postId;
  }

  ngOnInit() {
    this.postService.getPost(this.postId).subscribe(result => {
      this.post = result;
    });
  }

}
