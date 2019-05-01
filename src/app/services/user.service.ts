import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiBaseUrl + "/users";

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<User>(this.apiUrl);
  }

  // TODO: remove one the authentication is implemented

  /**
   * Tester temporary method to get one user
   */
  getUser(){
    return this.http.get<User>(this.apiUrl + "/1");
  }
}
