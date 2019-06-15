import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-planlist',
  templateUrl: './planlist.component.html',
  styleUrls: ['./planlist.component.scss']
})
export class PlanlistComponent implements OnInit {

  fetchedList: Object[] = [];
 

  searchInput: string = "";
  searchCategory: string = "title";

  filterTerms: FormGroup;

  constructor(private fb: FormBuilder, private db: DatabaseService) { }

  addTask(task) {
      this.db.addPlan(task).subscribe(_ => {
      this.update();
    })
  }

  update() {
    this.db.getPlanList().subscribe(res => console.log(this.fetchedList = res));
    
  }

  generateProps(propname: string) {
    let arr = new Set();
    let arr2 = this.fetchedList.map(item => item[propname])
    arr2.forEach(item => {
      arr.add(item)
    })
    return arr;
  }


  ngOnInit() {
    this.update();
    this.filterTerms = this.fb.group({
      status: ['All'],
      date: [null],
      place: ['All'],
      adress: ['All'],
    })


    
  }
}
