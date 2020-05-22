import { Component, OnInit, Input, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskName: string;
  @Input() status: boolean;
  // @Output() list : EventEmitter = new EventEmitter();
  value = '';
  

  onKey(value: string) {
    this.value = value;
  }

  onClickMe() { 
    this.taskName = this.value; 
  }

  constructor() { 
    this.taskName = 'Task';
    this.status = false;
  }

  ngOnInit(): void {
  }

}
