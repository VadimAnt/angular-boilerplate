import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    RouterModule
  ],
  declarations: [PostListComponent, PostComponent, NewPostComponent]
})
export class PostsModule { }
