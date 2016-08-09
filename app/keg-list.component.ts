import { Component, EventEmitter} from 'angular2/core';
// import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [NewKegComponent],
  template: `
    <new-keg (onSubmitForm)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  createKeg(name: string, brand: string, price: number, alcoholContent: number): void {
    this.kegList.push(
      new Keg(name, brand, price, alcoholContent, this.kegList.length)
    );
    console.log(this.kegList);
  }
}


// <keg-display *ngFor="#currentKeg of kegList"
//   (click)="kegClicked(currentKeg)"
//   [class.selected]="currentKeg === selectedKeg"
//   [keg]="currentKeg">
// </keg-display>
