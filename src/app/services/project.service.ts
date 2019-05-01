import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Project} from '../model/project';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = environment.apiBaseUrl + "/projects";

  constructor(private httpClient: HttpClient) { }

  getProjects(){
    return this.httpClient.get<Project>(this.apiUrl);
  }

  // getProjects(): Observable<Project[]> {
  //   return this.httpClient.get<Project[]>(this.apiUrl);
  // }
}
