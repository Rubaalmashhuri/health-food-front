import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../Service/api.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    auth: string;
    users: any;
    constructor(private api: ApiService) { }

  ngOnInit() {
      this.auth = this.api.getToken();
      this.getUsers(this.auth)
  }

  getUsers(auth: string) {
      this.api.getUsers(auth).subscribe(res => {
          this.users = res.users;
      });
  }

}
