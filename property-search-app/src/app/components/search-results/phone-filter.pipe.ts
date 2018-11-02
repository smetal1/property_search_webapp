import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'split' })
export class SplitPipe implements PipeTransform {
    transform(val): any {
        if (!val) {
            return;
        }
        return (val + '').split(';');
    }
}
