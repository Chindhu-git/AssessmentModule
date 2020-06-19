import { Component, OnInit } from '@angular/core';
import { ViewProjectSubmission } from './viewprojectsubmission';
import { TrainerauthorisationService } from '../service/trainerauthorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewprojectsubmission',
  templateUrl: './viewprojectsubmission.component.html',
  styleUrls: ['./viewprojectsubmission.component.css']
})
export class ViewprojectsubmissionComponent implements OnInit {

  public email: string;
  public title: string;
  public description: string;
  rowData=[];
  addrow={};
  colDefs=[];
  viewProjectSubmissions: ViewProjectSubmission[]=[];
  columnDefs: { headerName: string; field: string; }[];
  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.description=sessionStorage.getItem('loggedDescription');
    this.viewProjects();
  }
  public viewProjects()
  {
    let resp=this.service.viewProjects(this.title);
    resp.subscribe((data :any[])=>{
      this.viewProjectSubmissions=data;
      
      for(let viewProjectSubmission of this.viewProjectSubmissions)
      {
          this.addrow["grademail"]=viewProjectSubmission.grademail;
          this.addrow["projectlink"]=viewProjectSubmission.projectlink;
          if(viewProjectSubmission.score==-1)
            this.addrow["score"]="Not Yet Graded";
          else if(viewProjectSubmission.score>0)
            this.addrow["score"]=viewProjectSubmission.score;
          this.rowData=this.rowData.concat(this.addrow);
          this.addrow={};
      }
      this.columnDefs = [
        {headerName: 'Submitted By', field: 'grademail' },
        {headerName: 'Project Link', field: 'projectlink' },
        {headerName: 'Score', field: 'score' },
      ];
    });
  }
  public onRowClicked(event)
  {
    console.log("row clicked");
    sessionStorage.setItem('UploadedEmail', event.data.grademail);
    sessionStorage.setItem('UploadedProjectlink', event.data.projectlink);
    sessionStorage.setItem('UploadedScore', event.data.score);
    this.router.navigateByUrl('/login/trainer/trainerprojects/view/evaluate');
  }
}
