import { Component, OnInit } from '@angular/core';
import { queueScheduler, of, asapScheduler, asyncScheduler, merge } from 'rxjs';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.css']
})
export class SchedulersComponent implements OnInit {

  constructor() {
    console.log('Start script.');

    const queue$ = of('QueueScheduler (synchronous)', queueScheduler);
    const asap$ = of('AsapScheduler (async micro task)', asapScheduler);
    const async$ = of('AsyncSheduler (async task)', asyncScheduler);

    merge(queue$, asap$, async$)
      .subscribe(
        value => console.log(value)
      );

    console.log('End script.');
  }

  ngOnInit(): void {
  }

}
