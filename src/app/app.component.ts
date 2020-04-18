import { Component, OnInit } from '@angular/core';
import {
  map, tap, mergeMap, switchMap, concatMap, take, takeUntil,
  multicast, refCount, publish, share
} from 'rxjs/operators';
import { interval, fromEvent, Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBook } from './app.data';
import { Subject } from 'rxjs/internal/Subject';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuItems = routes;
  ngOnInit(): void {
    //#region timers to understand how a hot observable works...
    /* const timesDiv = document.getElementById('times');
    const button = document.getElementById('timerButton');

    const timer$ = new Observable(subscriber => {
      let i = 0;
      const intervalId = setInterval(() => {
        subscriber.next(i++);
      }, 1000);

      return () => {
        console.log('Executing teardown code.');
        clearInterval(intervalId);
      };
    });

    // tslint:disable-next-line: deprecation
    const timerSubscription = timer$.subscribe(
      value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
      null,
      () => console.log('All done!')
    );

    fromEvent(button, 'click')
      .subscribe(
        event => timerSubscription.unsubscribe()
      );

    const timerConsoleSubscription = timer$.subscribe(
      value => console.log(`${new Date().toLocaleTimeString()} (${value})`)
    );

    timerSubscription.add(timerConsoleSubscription); */

    //#region

    /*const source$ = of(1, 2, 3, 4, 5);

    source$.pipe(
      map(value => value *  2 )
    ).subscribe(value => console.log(`value : ${value}`));
    */

    /*       Take and takeUntil
    const timesDiv = document.getElementById('times');
    const button = document.getElementById('timerButton');

    const timer$ = new Observable(subscriber => {
      let i = 0;
      const intervalId = setInterval(() => {
        subscriber.next(i++);
      }, 1000);

      return () => {
        console.log('Executing teardown code.');
        clearInterval(intervalId);
      };
    });

    const cancelTimer$ = fromEvent(button, 'click');

    timer$.pipe(
      takeUntil(cancelTimer$)
    // tslint:disable-next-line: deprecation
    ).subscribe(
      value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
      null,
      () => console.log('All done!')
    );*/
  }

  constructor(private http: HttpClient) {
    /*of(1, 2, 3).pipe(
      mergeMap(id => {
        return this.http.get<IBook>(`api/book/${id}`);
      })
    ).subscribe(
       finalValue => console.log('VALUE: ', finalValue),
       error => console.log('ERROR: ', error)
     );*/
  }
}
