import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainerassignments',
  templateUrl: './trainerassignments.component.html',
  styleUrls: ['./trainerassignments.component.css']
})
export class TrainerassignmentsComponent implements OnInit {

  public email : string;

  constructor() { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
  }

  columnDefs = [
    {headerName: 'Title', field: 'title' },
    {headerName: 'Description', field: 'description' }
  ];
  rowData = [
    {title: 'Simple angular+spring boot app',description: 'Create a Simple angular+spring boot app'},
    {title: 'Login application',description: 'Create a login application with angular,spring boot, jdbc Template and mysql'}
  ];
}
