import {HeroesService} from './heroes.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesListComponent} from './heroes-list.component';
import {HeroEditComponent} from './hero-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [HeroesListComponent, HeroEditComponent],
  providers: [HeroesService],
  exports: [HeroesListComponent, HeroEditComponent],
})
export class HeroesModule {}
