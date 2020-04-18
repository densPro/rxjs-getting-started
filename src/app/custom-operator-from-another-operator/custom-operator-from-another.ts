import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

export function onlyPositiveNumbers() {
  return (source$: Observable<number>) => {
    return source$.pipe(
      filter(value => value > 0),
      tap(value => console.log('Value', value))
    );
  };
}
