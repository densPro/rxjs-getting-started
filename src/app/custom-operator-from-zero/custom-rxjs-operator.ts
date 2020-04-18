import { Observable } from 'rxjs';

export function grabAndLogClassics(year, log) {
  return source$ => {
    return new Observable(subscriber => {
      source$.subscribe(
        book => {
          if (book.year < year) {
            subscriber.next(book);
            if (log) {
              console.log(`Classic: ${book.title}`);
            }
          }
        },
        error => subscriber.error(error),
        () => subscriber.complete()
      );
    });
  };
}
