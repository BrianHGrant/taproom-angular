import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
    template: `
    <div>
      <p>Name: {{keg.name}} Brand: {{keg.brand}} Price: {{keg.price}} Alcohol Content: {{keg.alcoholContent}} Volume: {{keg.volume}}</p>
      <button class="btn-primary" (click)="sellPint()">sell pint</button>
    </div>
    `
})
export class KegComponent {
  public keg: Keg;
  sellPint(): void {
    this.keg.volume --;
    console.log(this.keg.volume);
  }
}
