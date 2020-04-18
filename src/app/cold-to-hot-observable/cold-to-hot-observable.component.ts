import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cold-to-hot-observable',
  templateUrl: './cold-to-hot-observable.component.html',
  styleUrls: ['./cold-to-hot-observable.component.css']
})
export class ColdToHotObservableComponent implements OnInit {

  constructor() {
    const source$ = interval(1000).pipe(
      take(4)
    );

    const subject$ = new Subject();
    source$.subscribe(subject$);

    subject$.subscribe(
      value => console.log(`Observer 1: ${value}`)
    );

    setTimeout(() => {
      subject$.subscribe(
        value => console.log(`Observer 2: ${value}`)
      );
    }, 1000);

    setTimeout(() => {
      subject$.subscribe(
        value => console.log(`Observer 3: ${value}`)
      );
    }, 2000);
  }

  ngOnInit(): void {
  }

}
