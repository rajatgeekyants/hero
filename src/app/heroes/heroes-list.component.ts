/**
 * Very simple component that renders a list of heroes
 */

import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  template: `
    <table class="table table-striped">
      <thead>
        <th>Name</th>
        <th>Real Name</th>
        <th>First Appearance</th>
        <th></th>
      </thead>
      <tbody>
        <tr *ngFor="let h of heroes">
          <td>{{ h.name }}</td>
          <td>{{ h.real }}</td>
          <td>{{ h.first }}</td>
          <td><button class="btn btn-sm btn-default" (click)="editHero.emit(p)">Edit</button></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-default" (click)="addHero.emit()">Add new hero</button>
  `,
})
export class HeroesListComponent {
  @Input() heroes;
  @Output() addHero = new EventEmitter<any>();
  @Output() editHero = new EventEmitter<any>();
}
