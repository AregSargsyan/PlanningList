import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskType } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }


addPlan(planInfo){
  return this.http.post('http://localhost:3000/planlist',planInfo)
}

getPlanList():Observable<TaskType []>{
  return this.http.get<TaskType []>('http://localhost:3000/planlist');
}
 
deleteRow(id){
  return this.http.delete(`http://localhost:3000/planlist/${id}`)
}


mutateRow(id, row) {  
  return this.http.put(`http://localhost:3000/planlist/${id}`, row)
}

markAsDone(id){
  return this.http.patch(`http://localhost:3000/planlist/${id}`,{status: 'Done'})
}





}

