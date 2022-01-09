import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => it.first_name.includes(searchText) || it.last_name.includes(searchText));
  }
}