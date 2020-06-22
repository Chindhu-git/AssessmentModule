import { Component, OnInit } from '@angular/core';
import {EvaluateProject} from './evaluateproject';
import {TrainerauthorisationService} from '../service/trainerauthorisation.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-evaluateproject',
  templateUrl: './evaluateproject.component.html',
  styleUrls: ['./evaluateproject.component.css']
})
export class EvaluateprojectComponent implements OnInit {

  public email: string;
  public title: string;
  public grademail: string;
  public projectlink: string;
  public score: any;
  public message: any;
  public isReadOnly: boolean;
  evaluateProject: EvaluateProject=new EvaluateProject("","",-1);
  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.grademail=sessionStorage.getItem('UploadedEmail');
    this.projectlink=sessionStorage.getItem('UploadedProjectlink');
    this.score=sessionStorage.getItem('UploadedScore');
    this.isReadOnly=true;
  }
  public linkNow()
  {
    window.open(this.projectlink, "_blank");
  }
  public editNow(myscore: string)
  {
    console.log(myscore);
    this.isReadOnly=false;
  }
  public saveNow(myscore:string)
  {
    this.isReadOnly=true;
    if(myscore!=="Not Yet Graded")
    {
      this.score=Number(myscore);
      if(this.score>-1)
      {
        this.evaluateProject.grademail=this.grademail;
        this.evaluateProject.project_name=this.title;
        this.evaluateProject.score=this.score;
        let resp=this.service.evaluateProjects(this.evaluateProject);
        resp.subscribe((data)=>{
          this.message=data;
        });
      }
    }
    
  }

}
