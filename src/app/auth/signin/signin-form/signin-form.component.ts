import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signin } from './signin';
import { AuthService } from '../../../core/services';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  
  public model: Signin = new Signin('', '');
  public submitted = false;
  public errors;
  
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log('submit');
    this.authService.signin(this.model.email, this.model.password).subscribe(
      data => {
        this.router.navigate(['/users']);
      },
      error => {
        this.errors = error;
      }
    );
  }
}
