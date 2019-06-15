import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskType } from 'src/app/interfaces/task.interface';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {
  toDay = false;
  editing = false;

  constructor(
    private fb: FormBuilder,
    ){}

  @Input() currentTask: TaskType;
  @Input() status: string;
  @Output() removeTask = new EventEmitter<number>();
  @Output() taskEdited = new EventEmitter<object>();
  @Output() taskDone = new EventEmitter<number>();

  editedRowForm: FormGroup;

  ngOnInit(){
    this.editedRowForm = this.fb.group({
      title: [this.currentTask.title],
      description: [this.currentTask.description],
      status: [this.currentTask.status], 
      date: [this.currentTask.date], 
      placeName: [this.currentTask.placeName], 
      adress: [this.currentTask.adress],
    })

    if(this.editedRowForm.value.date==new Date().toISOString().slice(0,10)){this.toDay=true;}
  }

}
