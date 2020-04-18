import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, share, publish, refCount, publishLast, publishBehavior, publishReplay } from 'rxjs/operators';


@Component({
  selector: 'app-specialized-multicast-operators',
  templateUrl: './specialized-multicast-operators.component.html',
  styleUrls: ['./specialized-multicast-operators.component.css']
})
export class SpecializedMulticastOperatorsComponent implements OnInit {

  constructor() {
    const source$ = interval(1000).pipe(
      take(4),
      // multicast(new Subject()), // To multicast an obsservable. It will start when connect method will be called
     // publish(), // No need for a Subject
      // publishLast(), // wait for values produce and emits the last value
      // publishBehavior(42), // will start 42
      publishReplay(),
      refCount() // Observable begins executing as zoon as the first observer subscribes
      // share() // internally uses refCount operator
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

    setTimeout(() => {
      source$.subscribe(
        value => console.log(`Observer 4: ${value}`),
        null,
        () => console.log(`Observer 4 complete. `)
      );
    }, 2000);
  }

  ngOnInit(): void {
  }

}
