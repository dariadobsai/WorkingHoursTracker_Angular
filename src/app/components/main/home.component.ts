import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Timer} from 'easytimer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  user;
  started = false;
  timer;

  ngOnInit() {
    this.userService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );

    this.timer = new Timer();
    HomeComponent.setDate();
  }

  startTimer() {
    if (!this.started){

      this.timer.start();

      this.started = true;

    }else {
      this.pauseTimer();

      this.started = false;
    }
  }

  pauseTimer() {
    this.timer.pause();
  }

  stopTimer() {
    this.timer.stop();
  }

  static setDate() {
    const currentDate = new Date();

    const month = currentDate.getMonth() + 1;

    document.getElementById('current-date')
      .textContent = currentDate.getDate() +
      '/' + month + '/' +
      currentDate.getFullYear();
  }
}
