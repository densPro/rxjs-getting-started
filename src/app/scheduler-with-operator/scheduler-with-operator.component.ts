import { Component, OnInit } from '@angular/core';
import { from, queueScheduler, asyncScheduler } from 'rxjs';
import { tap, observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-scheduler-with-operator',
  templateUrl: './scheduler-with-operator.component.html',
  styleUrls: ['./scheduler-with-operator.component.css']
})
export class SchedulerWithOperatorComponent implements OnInit {

  constructor() {
    console.log('Start script.');
    from([1, 2, 3, 4], queueScheduler)
      .pipe(
        tap(value => console.log(`Value: ${value}`)),
        observeOn(asyncScheduler),
        tap(value => console.log(`Doubled value: ${value * 2}`))
      ).subscribe();
    console.log('End script.');
  }

  ngOnInit(): void {
  }

}
