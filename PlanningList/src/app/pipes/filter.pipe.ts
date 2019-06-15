import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], status: string, date: string, place: string, adress: string): any {
    
    let filteredArray = array.slice(0);
    if(status !== 'All'){
      console.log('status')
      filteredArray = filteredArray.filter(task => task.status === status);
    }
    if(date){
      console.log(date + ":" + filteredArray[filteredArray.length-1].date)
      filteredArray = filteredArray.filter(task => task.date === date);
    }
    if(place !== 'All'){
      console.log('place')
      filteredArray = filteredArray.filter(task => task.placeName === place);
    }
    if(adress !== 'All'){
      console.log('adress')
      filteredArray = filteredArray.filter(task => task.adress === adress);
    }
    return filteredArray;
  }

}
