import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';

import { routing }             from './app.routing';

import { AppComponent }        from './components/app.component';
import { DashboardComponent }  from './components/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent }     from './components/heroes.component';
import { HeroService }         from './services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],

  providers: [
    HeroService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
