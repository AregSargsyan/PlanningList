import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskType } from '../../interfaces/task.interface'

@Component({
  selector: 'app-insertion-field',
  templateUrl: './insertion-field.component.html',
  styleUrls: ['./insertion-field.component.scss']
})
export class InsertionFieldComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  planList: FormGroup;
  @Output() taskAdded = new EventEmitter<TaskType>()

  ngOnInit() {
    this.planList = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      date: ['', Validators.required],
      placeName: ['', Validators.required],
      adress: ['', Validators.required],
    })
  }

}
