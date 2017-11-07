import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any, search: any): any {
    if(search === undefined) return items;

    return items.filter(function(item){
      return item.nombre.includes(search);
    });
  }

}
