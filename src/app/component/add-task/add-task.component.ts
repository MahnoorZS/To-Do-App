import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import {  UIService } from "../../services/ui.service"
import { Subscription } from "rxjs";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@Output() onAddTask: EventEmitter<Task> = new EventEmitter();
text: any;
day: any;
reminder: any = false;
showAddTask!: boolean;
subscription: Subscription;

  constructor( private uiservice: UIService) { 
    this.subscription = this.uiservice.onToggle()
    .subscribe(( value ) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }
onSubmit(){
  if(!this.text){
    alert('Please add a task!')
    return;
  }
  const newTask = {
    text: this.text,
    day: this.day,
    reminder: this.reminder

  };

  //@todo - emit event
  this.onAddTask.emit(newTask);
  //clear the fields
  this.text = '';
  this.day = '';
  this.reminder = false;
}
}
