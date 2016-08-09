import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <h3>Edit Name: </h3>
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg task-form"/>
    </div>
    <br><br><br>
    <select class="editAlcohol" [(ngModel)]="keg.alcoholContent">
      <option value="7">Seven Percent</option>
      <option value="5" selected="selected">Five Percent</option>
      <option value="4">Four Percent</option>
    </select>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
