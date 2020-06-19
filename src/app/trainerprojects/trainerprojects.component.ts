import { Component, OnInit } from '@angular/core';
import {TrainerauthorisationService} from '../service/trainerauthorisation.service';
import {TrainerProjects} from './trainerprojects';
import { Router} from '@angular/router';

@Component({
  selector: 'app-trainerprojects',
  templateUrl: './trainerprojects.component.html',
  styleUrls: ['./trainerprojects.component.css']
})
export class TrainerprojectsComponent implements OnInit {

  public email : string;
  rowData=[];
  addrow={};
  colDefs=[];
  trainerProjects: TrainerProjects[]=[];
  columnDefs: { headerName: string; field: string; }[];
  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
    this.showProjects();
  }
  public showProjects()
  {
    let resp=this.service.showProjects(this.email);
    resp.subscribe((data: any[])=>{
      console.log(data[0]);
      console.log(data[1]);
      this.trainerProjects=data;
      for(let trainerProject of this.trainerProjects)
      {
          this.addrow["email"]=trainerProject.email;
          this.addrow["title"]=trainerProject.title;
          this.addrow["description"]=trainerProject.description;
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
    this.router.navigateByUrl('/login/trainer/trainerprojects/view');
  }

}
