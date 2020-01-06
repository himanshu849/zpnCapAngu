import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilerPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }

        if (searchText) {
            searchText = searchText.toLowerCase();
        }

        return items.filter((value: any) => {
            return value.name.toLowerCase().includes(searchText);
        });

    }
}