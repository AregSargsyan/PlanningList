import { Component, OnInit, Input } from '@angular/core';
import { TaskType } from 'src/app/interfaces and constructors/task.interface';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

  @Input() allTasks: TaskType[];
  @Input() searchTerms: object;
  @Input() filterTerms: object;

  constructor(private db: DatabaseService) { }

  removeTask(id) {
    this.db.deleteRow(id).subscribe(_ => {
      this.update()
    })
  }

  editTask(obj) {
    this.db.mutateRow(obj.id, obj.result).subscribe(_ => {
      this.update();
    }
    );
  }

  markAsDone(id) {
    this.db.markAsDone(id).subscribe(_ => {
      this.update();
    })
  }

  private update() {
    this.db.getPlanList().subscribe(res => this.allTasks = res);
  }

  ngOnInit() {
  }

}
