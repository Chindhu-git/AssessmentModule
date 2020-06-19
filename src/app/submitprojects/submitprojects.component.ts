import { Component, OnInit } from '@angular/core';
import {SubmittedProject} from './submitprojects'
import { GradauthorisationService } from '../service/gradauthorisation.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-submitprojects',
  templateUrl: './submitprojects.component.html',
  styleUrls: ['./submitprojects.component.css']
})
export class SubmitprojectsComponent implements OnInit {

  public email: string;
  public posted_by: string;
  public title: string;
  public description: string;
  public message :any;

  submittedProject: SubmittedProject =new SubmittedProject("","","");
  constructor(private service: GradauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
    this.posted_by=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.description=sessionStorage.getItem('loggedDescription');
  }
  public uploadNow()
  {
      this.submittedProject.email=this.email;
      this.submittedProject.project_name=this.title;
      console.log(this.submittedProject.projectlink);
      let resp=this.service.submitProject(this.submittedProject);
      resp.subscribe((data)=>{
        this.message=data;
    });
  }
}
