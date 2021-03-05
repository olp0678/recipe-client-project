import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Users} from '../interfaces/Users';
import {User} from "../interfaces/User";

@Injectable()
export class UserService {
  static parameters = [HttpClient];
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  getAllUsers(): Promise<Users> {
    return this.httpClient
      .get<Users>('/api/users')
      .toPromise();
  }
  getUserById(userId): Promise<User> {
    return this.httpClient
      .get<User>(`/api/users/${userId}`)
      .toPromise();
  }
}
