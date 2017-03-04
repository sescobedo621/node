import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  taskTitle = "Tasks";
  tasks =["Learn Angular 2", "Take a Shower", "work", "blah", "blah"];
  to = "add";

  addTasks(task){
    this.to = task;
    this.tasks.push(this.to);
  }
  constructor() { }

  ngOnInit() {
  }

}
