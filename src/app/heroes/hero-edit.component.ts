/**
 * Simple component to abstract the editing of a hero
 * object.
 */

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hero-edit',
  template: `
    <form [formGroup]="heroForm" (ngSubmit)="onHeroFormSubmit()">
      <input type="hidden" formControlName="id">
      <div class="form-group">
        <label for="first">First Name</label>
        <input type="text" class="form-control" id="first" placeholder="Firstname" formControlName="first">
      </div>
      <div class="form-group">
        <label for="real">Real Name</label>
        <input type="text" class="form-control" id="real" placeholder="Real Name" formControlName="real">
      </div>
      <div class="form-group">
        <label for="first">First Appearance</label>
        <div class="input-group">
          <input type="text" class="form-control" id="first" placeholder="First Appearance" formControlName="first">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  `,
})
export class HeroEditComponent implements OnInit {
  heroForm: FormGroup;

  @Input() hero;
  @Output() saveHero = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      id: '',
      name: '',
      real: '',
      first: '',
    });
  }

  ngOnInit() {
    this.heroForm.setValue({
      id: this.hero.id || -1,
      name: this.hero.name || '',
      surname: this.hero.surname || '',
      twitter: this.hero.twitter || '',
    });
  }

  onHeroFormSubmit() {
    const dataModel = this.heroForm.value;
    this.saveHero.emit(dataModel);
  }
}
