import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule', 
  },
  { 
    path: 'users', 
    loadChildren: './users/users.module#UsersModule',
    canActivate:[AuthGuard] 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }