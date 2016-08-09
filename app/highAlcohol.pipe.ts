import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe ({
  name: "highAlcohol",
  pure: false
})

export class HighAlcoholPipe implements PipeTransform {
  transform(input: Keg[], args) {
   var desiredAlcoholLevel = args[0];
   if(desiredAlcoholLevel < 5){
    return input.filter(function(keg){
      return !keg.alcoholContent;
    });
  } else if (desiredAlcoholLevel > 4){
    return input.filter(function(keg){
      return keg.alcoholContent;
    })
    }
  }
}
