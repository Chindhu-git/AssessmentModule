import { Component, OnInit } from '@angular/core';
import {GradauthorisationService} from '../service/gradauthorisation.service';
import {GradAssignments} from './gradassignments';
import { Router} from '@angular/router';

@Component({
  selector: 'app-gradassignments',
  templateUrl: './gradassignments.component.html',
  styleUrls: ['./gradassignments.component.css']
})
export class GradassignmentsComponent implements OnInit {

  public email: string;
  rowData=[];
  addrow={};
  colDefs=[];
  gradAssignments: GradAssignments[]=[];
  columnDefs: { headerName: string; field: string; }[];
  constructor(private service: GradauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
    this.showAssignments();
  }
  public showAssignments()
  {
    let resp=this.service.showAssignments();
    resp.subscribe((data :any[])=>{
      console.log(data);
      this.gradAssignments=data;
      
      for(let gradAssignment of this.gradAssignments)
      {
          this.addrow["email"]=gradAssignment.email;
          this.addrow["title"]=gradAssignment.title;
          this.addrow["description"]=gradAssignment.description;
          this.rowData=this.rowData.concat(this.addrow);
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
    this.router.navigateByUrl('/login/grad/gradassignments/submit');
  }

}
