import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  countDownDate = new Date("Nov 25,2022 13:00:00").getTime();
  days:number = 0;
  hours:number = 0;
  minutes:number = 0;
  seconds:number = 0;

  // Update the count down every 1 second
  x = setInterval(()=>{
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = this.countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }, 1000);
}
