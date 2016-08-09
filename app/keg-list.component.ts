import { Component, EventEmitter} from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [NewKegComponent, KegComponent],
  template: `
    <new-keg (onSubmitForm)="createKeg($event)"></new-keg>
    <keg-display *ngFor="#currentKeg of kegList"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  createKeg(inputArray): void {
    this.kegList.push(
      new Keg(inputArray[0], inputArray[1], inputArray[2], inputArray[3], this.kegList.length)
    );
    console.log(this.kegList);
  }
}
