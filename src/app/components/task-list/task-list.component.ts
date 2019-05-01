import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  // task;
  // tasks: any[];

  user;

  users;

  ngOnInit() {

    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );

    this.userService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );
  }
}
