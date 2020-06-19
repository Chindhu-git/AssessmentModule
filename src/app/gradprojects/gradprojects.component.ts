import { Component, OnInit } from '@angular/core';
import {GradauthorisationService} from '../service/gradauthorisation.service';
import {GradProjects} from './gradprojects';
import { Router} from '@angular/router';

@Component({
  selector: 'app-gradprojects',
  templateUrl: './gradprojects.component.html',
  styleUrls: ['./gradprojects.component.css']
})
export class GradprojectsComponent implements OnInit {

  public email: string;
  rowData=[];
  addrow={};
  colDefs=[];
  gradProjects: GradProjects[]=[];
  columnDefs: { headerName: string; field: string; }[];
  constructor(private service: GradauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
    this.showProjects();
  }
  public showProjects()
  {
    let resp=this.service.showProjects();
    resp.subscribe((data :any[])=>{
      console.log(data);
      this.gradProjects=data;
      
      for(let gradProject of this.gradProjects)
      {
          this.addrow["email"]=gradProject.email;
          this.addrow["title"]=gradProject.title;
          this.addrow["description"]=gradProject.description;
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
    this.router.navigateByUrl('/login/grad/gradprojects/submit');
  }

}
