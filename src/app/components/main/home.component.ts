import {Component, OnInit} from '@angular/core';
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
  element;
  started = false;

  ngOnInit() {
    this.element = document.getElementById('action-btn_start');

    this.userService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );

    HomeComponent.setDate();
  }

  startTimer() {
    // Color for "Pause" button
    this.element.style.background = '#E18E2F';
    this.element.textContent = 'Pause';

    const timer = new Timer();

    /* timer.start();
     timer.addEventListener('secondsUpdated', function(e) {
       $('#current-time').html(timer.getTimeValues().toString());
     });*/

    this.started = true;
  }

  pauseTimer() {

  }

  resumeTimer() {

  }

  stopTimer() {
    // TODO: stop the timer
  }

  /*myTimer() {
    var date = new Timestamp();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
  }*/

  static setDate() {
    const currentDate = new Date();

    const month = currentDate.getMonth() + 1;

    document.getElementById('current-date')
      .textContent = currentDate.getDate() +
      '/' + month + '/' +
      currentDate.getFullYear();
  }
}
