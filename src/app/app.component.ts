import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes/heroes.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Reusable Angular Components - Tabs</h1>
    <ngx-tabs>
      <ngx-tab tabTitle="Hero List">
        <h1>Hero List</h1>
        <app-heroes-list [heroes]="heroes"></app-heroes-list>
      </ngx-tab>
      <ngx-tab tabTitle="Hero">
        <h1>Hero</h1>
      </ngx-tab>
    </ngx-tabs>

  `,
})
export class AppComponent implements OnInit {
  heroes;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }
}
