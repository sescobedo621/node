import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  taskTitle = "Tasks";
  tasks =["Learn Angular 2", "Take a Shower", "take metro to see Brenton"];

  constructor() { }

  ngOnInit() {
  }

}
