// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {

  hero: Hero = null;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; //+ converts to int
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  goBack(): void {
    // Can take us out of app, better methods available
    window.history.back();
  }

}
