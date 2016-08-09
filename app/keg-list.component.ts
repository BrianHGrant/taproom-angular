import { Component, EventEmitter} from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { EditKegDetailsComponent } from './edit-keg.component';
import { HighAlcoholPipe } from './highAlcohol.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [HighAlcoholPipe],
  directives: [EditKegDetailsComponent, NewKegComponent, KegComponent],
  template: `
    <select (change)="onAlcoholContent($event.target.value)" class="filter">
      <option value="low">Low</option>
      <option value="high">High</option>
    </select>
    <new-keg (onSubmitForm)="createKeg($event)"></new-keg>
    <keg-display *ngFor="#currentKeg of kegList | highAlcohol:alcoholContent"
      [class.selected]="currentKeg === selectedKeg"
      (click)="kegClicked(currentKeg)"
      [keg]="currentKeg">
    </keg-display>
    <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
    </edit-keg-details>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(inputArray): void {
    this.kegList.push(
      new Keg(inputArray[0], inputArray[1], inputArray[2], inputArray[3], this.kegList.length)
    );
    console.log(this.kegList);
  }
  onAlcoholContent(filterOption) {
    alcoholContent = filterOption;
  }
}
