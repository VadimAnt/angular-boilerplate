import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: NewPostComponent },
  { path: ':postId', component: PostComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class PostsRoutingModule { }