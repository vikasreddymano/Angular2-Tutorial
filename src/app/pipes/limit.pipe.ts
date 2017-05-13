
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limit'
})
export class LimitPipe implements PipeTransform {

    transform(items, limit=4) {
        return items.slice(0, limit);
    }
}


@Pipe({name: 'titlecase'})
export class TitleCasePipe implements PipeTransform {
    transform( value, type ) {
        
        if( type === 'uppercase') {
            return value.toUpperCase();
        } else if (type === 'lowercase') {
            return value.toLowerCase();
        } else {
            return this.toTitleCase(value);
        }
        
    }

    toTitleCase( value ) {
        return value.split(' ').map( item => {
            return item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
        }).join(' ');
    }
}