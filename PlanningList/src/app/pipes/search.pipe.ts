import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(plansList: object[], searchinput?: any, searchCategory?: any): any {
    
    return plansList.filter((item)=>{
      if(searchCategory) return item[searchCategory].toLowerCase().includes(searchinput.toLowerCase());
      return item;
    });
  }

}
