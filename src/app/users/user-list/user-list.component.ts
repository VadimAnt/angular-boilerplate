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
  public users$: IUser[];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(result => {
      this.users$ = result;
    })
  }

}
