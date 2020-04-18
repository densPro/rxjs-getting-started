import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { onlyPositiveNumbers } from './custom-operator-from-another';

@Component({
  selector: 'app-custom-operator-from-another-operator',
  templateUrl: './custom-operator-from-another-operator.component.html',
  styleUrls: ['./custom-operator-from-another-operator.component.css']
})
export class CustomOperatorFromAnotherOperatorComponent implements OnInit {

  constructor() {
    of(1, 2, 3, -2, -5)
      .pipe(
        onlyPositiveNumbers()
      )
      .subscribe();
  }

  ngOnInit(): void {
  }

}
