import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'my-app',
  outputs: ['onSubmitForm'],
  template: `
  <div class="container">
    <h2>Our Kegs</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control input-lg" id="name" placeholder="Total Domination" #addName>
    </div>
    <div class="form-group">
      <label for="brand">Brand:</label>
      <input type="text" class="form-control input-lg" id="brand" placeholder="Ninkassi" #addBrand>
    </div>
    <div class="form-group">
      <label for="alcoholContent">Alcohol Content (in percent):</label>
      <input type="text" class="form-control input-lg" id="alcoholContent" placeholder="7.6" #addAlcoholContent>
    </div>
    <h3>Price</h3>
    <select class="filter" #addPrice>
      <option value="#">Import</option>
      <option value="#" selected="selected">Craft</option>
      <option value="#">Domestic</option>
    </select>
    <button (click)="addKeg(addName, addBrand, addPrice, addAlcoholContent)" class="btn-danger btn-lg add-button">Add</button>
  </div>
  `
})

export class KegComponent {
  public onSubmitForm: EventEmitter<String[]>
  constructor(){
    this.onSubmitForm = new EventEmitter();
  }
  addKeg(addName: HTMLInputElement, addBrand: HTMLInputElement, addPrice: HTMLInputElement, addAlcoholContent: HTMLInputElement) {
    console.log(addName.value);
    this.onSubmitForm.emit([addName.value, addBrand.value, addPrice.value, addAlcoholContent.value]);
    addName.value="";
    addBrand.value="";
    addPrice.value="";
    addAlcoholContent.value="";
  }
}
