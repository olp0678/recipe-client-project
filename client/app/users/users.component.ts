import {Component, OnInit} from '@angular/core';
import {Users} from '../../components/interfaces/Users';
import constants from '../app.constants';
import {UserService} from '../../components/services/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'users',
  template: require('./users.html'),
  styles: [require('./users.scss')],
})
export class UsersComponent implements OnInit {
  users : Users;
  static parameters = [];
  constructor(private http: HttpClient, private userService: UserService) {
      this.users = constants.users;
  }




  ngOnInit() {
  }
}
