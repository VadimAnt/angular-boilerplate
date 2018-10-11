import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../core/services';
import { IUser } from '../../core/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users$: Observable<IUser[]>;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

}
