import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { grabAndLogClassics } from './custom-rxjs-operator';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../app.data';

@Component({
  selector: 'app-custom-operator-from-zero',
  templateUrl: './custom-operator-from-zero.component.html',
  styleUrls: ['./custom-operator-from-zero.component.css']
})
export class CustomOperatorFromZeroComponent implements OnInit {

  constructor(private http: HttpClient) {
    of(1, 2, 3).pipe(
      mergeMap(id => {
        return this.http.get<IBook>(`api/books/${id}`);
      }),
      grabAndLogClassics(1998, true)
    ).subscribe(
       // error => console.log('ERROR: ', error)
    );
  }

  ngOnInit(): void {
  }

}
