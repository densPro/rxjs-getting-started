import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.css']
})
export class ColdObservableComponent implements OnInit {

  constructor() {
    const source$ = interval(1000).pipe(
      take(4)
    );

    source$.subscribe(
      value => console.log(`Observer 1: ${value}`)
    );

    setTimeout(() => {
      source$.subscribe(
        value => console.log(`Observer 2: ${value}`)
      );
    }, 1000);

    setTimeout(() => {
      source$.subscribe(
        value => console.log(`Observer 3: ${value}`)
      );
    }, 2000);
  }

  ngOnInit(): void {
  }

}
