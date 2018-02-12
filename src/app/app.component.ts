import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  center = {
    latitude: 1,
    longitude: 1
  }

  ngOnInit(): void {
    Observable.timer(1000, 2000).subscribe(
      (i) => {
        console.log('ping', i);
        this.center = {
          latitude: 19,
          longitude: 10
        };
      }
    );
  }

  logCenter(event) {
    console.log('center changed', event)
  }
}
