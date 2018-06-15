import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
// import {of} from 'rxjs/add/observable/of';

@Injectable()
export class HeroesService {
  constructor() {}

  getHeroes(): Observable<any> {
    return of([
      {
        id: 1,
        name: 'Peter Parker',
        real: 'Spider-Man',
        first: 'No Idea',
      },
    ]);
  }
}
