import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {

  constructor(private userService: UserService) {
  }

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
