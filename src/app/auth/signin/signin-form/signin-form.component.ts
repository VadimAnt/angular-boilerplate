import { Component, OnInit } from '@angular/core';
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
  
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log('submit');
    this.authService.signin(this.model.email, this.model.password).subscribe(
      data => {
        console.log(data);
      },
      error => {
        this.errors = error;
      }
    );
  }
}
