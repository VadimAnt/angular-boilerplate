import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: './home/home.module#HomeModule', 
  },
  { 
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule', 
  },
  { 
    path: 'users', 
    loadChildren: './users/users.module#UsersModule',
    canActivate:[AuthGuard] 
  },
  {
    path: '**', 
    component: NotFoundComponent, 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }