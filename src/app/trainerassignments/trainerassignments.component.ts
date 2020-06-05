import { Component, OnInit } from '@angular/core';
import {TrainerauthorisationService} from '../service/trainerauthorisation.service';
import {TrainerAssignments} from './trainerassignments';
import { Router} from '@angular/router';
import { NgForOf } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import { GridOptionsWrapper } from 'ag-grid-community';

@Component({
  selector: 'app-trainerassignments',
  templateUrl: './trainerassignments.component.html',
  styleUrls: ['./trainerassignments.component.css']
})
export class TrainerassignmentsComponent implements OnInit {

  public email : string;
  rowData=[];
  addrow={};
  colDefs=[];
  trainerAssignments: TrainerAssignments[]=[];
  columnDefs: { headerName: string; field: string; }[];
  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
    this.showAssignments();
  }
  public showAssignments()
  {
    let resp=this.service.showAssignments(this.email);
    resp.subscribe((data :any[])=>{
      console.log(data);
      this.trainerAssignments=data;
      
      for(let trainerAssignment of this.trainerAssignments)
      {
          this.addrow["email"]=trainerAssignment.email;
          this.addrow["title"]=trainerAssignment.title;
          this.addrow["description"]=trainerAssignment.description;
          this.rowData=this.rowData.concat(this.addrow);
          console.log(this.rowData);
          this.addrow={};
      }
      this.columnDefs = [
        {headerName: 'Posted By', field: 'email' },
        {headerName: 'Title', field: 'title' },
        {headerName: 'Description', field: 'description'}
      ];
    });
  }
  public onRowClicked(event)
  {
    console.log(event.data.email);  
    console.log(event.data.title);
    console.log(event.data.description);
    sessionStorage.setItem('loggedEmail', event.data.email);
    sessionStorage.setItem('loggedTitle', event.data.title);
    sessionStorage.setItem('loggedDescription', event.data.description);
    this.router.navigateByUrl('/login/trainer/trainerassignments/view');
  }
}
