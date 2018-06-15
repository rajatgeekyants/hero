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
        name: 'Spider Man',
        real: 'Peter Parker',
        first: 'Amazing Fantasy #15 (August 1962)',
      },
    ]);
  }
}
