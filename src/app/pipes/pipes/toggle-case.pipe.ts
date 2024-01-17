import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'togglecase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(msg : string, isUpper : boolean): string {
    return isUpper ? msg.toUpperCase() : msg.toLowerCase()
  }
}
