import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  task;

  tasks: any[];

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/tasks/').subscribe(
      data => {
        this.tasks = data;
      }
    );
  }
}
