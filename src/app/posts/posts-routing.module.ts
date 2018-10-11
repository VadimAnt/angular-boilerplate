import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: ':postId', component: PostComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class PostsRoutingModule { }