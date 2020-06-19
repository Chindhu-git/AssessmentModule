import { Component, OnInit } from '@angular/core';
import {CreateProject} from './createproject';
import {TrainerauthorisationService} from '../service/trainerauthorisation.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

  public email: string;
  public message :any;
  createProject: CreateProject=new CreateProject("","","");

  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
  }
  public saveProjects()
  {
    this.createProject.email=this.email;
    let resp=this.service.saveProjects(this.createProject);
    resp.subscribe((data)=>{
      if(data==="Saved Successfully")
      {
        this.router.navigateByUrl('/login/trainer/trainerprojects');
      }
      else 
      {
        this.message=data;
      }
    });
  }


}
