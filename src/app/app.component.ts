import 
  { 
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate 
  } 
  from '@angular/core';

import { Hero } from './shared/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app works!';

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  updateSelectedHero(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  toggleState(hero: Hero) {
    hero.state = (hero.state === 'active' ? 'inactive' : 'active');
    this.updateSelectedHero(hero);
  }


}

