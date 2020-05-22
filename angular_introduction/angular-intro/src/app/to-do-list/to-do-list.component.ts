import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoListName: string;
  tasksList: any[];
  value = '';
  add = '';

  onKey(value: string) {
    this.value = value;
  }

  onKeyAdd(value: string) {
    this.add = value;
  }

  onClickMe() { 
    this.toDoListName = this.value; 
  }
  
  onClick() { 
    this.tasksList.push({taskName : this.add, status : false}); 
  }

  // onList() {
  //   this.tasksList[0] = this.value;
  // }

  constructor() {
    this.toDoListName = 'default my Todo list';
    this.tasksList = [
      {taskName : "titre 1", status : false},
      {taskName : "titre 2", status : true},
      {taskName : "titre 3", status : false}
    ];
   }

  ngOnInit(): void {
  }

}
