import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  transform(value: number): string {
    return value == 1 ? 'Yes' : 'No'
}; 

}
