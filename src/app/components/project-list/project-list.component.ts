import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private http: HttpClient) {}

  project;

  projects: any[];

  ngOnInit(): void {
    this.project = 'my project';

    this.http.get('http://localhost:8080/projects/2').subscribe(
      data => {
        console.log(data);
        this.project = data;
      }
    );

    this.http.get<any[]>('http://localhost:8080/projects/').subscribe(
      data => {
        console.log(data);
        this.projects = data;
      }
    );
  }

}
