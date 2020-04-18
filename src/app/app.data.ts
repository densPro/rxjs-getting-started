import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface IBook {
  id: number;
  title: string;
  year: number;
}

export class AppData implements InMemoryDbService {
  createDb() {
    const books: IBook[] = [
      { id: 1, title: 'Windstorm', year: 1995 },
      { id: 2, title: 'Bombasto', year: 1995 },
      { id: 3, title: 'Magneta', year: 1995 },
      { id: 4, title: 'Tornado', year: 2000 }
    ];
    return { books };
  }
}
