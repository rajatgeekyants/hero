import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsModule} from './tabs/tabs.module';
import {HeroesModule} from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TabsModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
