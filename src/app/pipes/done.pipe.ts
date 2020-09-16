import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'done_outline' : 'trip_origin';
  }

}
