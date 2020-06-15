import { Component, OnInit } from '@angular/core';
import { ViewSubmission } from './viewsubmission';
import { TrainerauthorisationService } from '../service/trainerauthorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewsubmission',
  templateUrl: './viewsubmission.component.html',
  styleUrls: ['./viewsubmission.component.css']
})
export class ViewsubmissionComponent implements OnInit {

  public email: string;
  public title: string;
  public description: string;
  rowData=[];
  addrow={};
  colDefs=[];
  viewSubmissions: ViewSubmission[]=[];
  columnDefs: { headerName: string; field: string; }[];

  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.description=sessionStorage.getItem('loggedDescription');
    this.viewAssignments();
  }
  public viewAssignments()
  {
    let resp=this.service.viewAssignments(this.title);
    resp.subscribe((data :any[])=>{
      console.log(data);
      this.viewSubmissions=data;
      
      for(let viewSubmission of this.viewSubmissions)
      {
          this.addrow["grademail"]=viewSubmission.grademail;
          this.addrow["filename"]=viewSubmission.filename;
          this.addrow["submittedass"]=viewSubmission.submittedass;
          if(viewSubmission.score==-1)
            this.addrow["score"]="Not Yet Graded";
          else if(viewSubmission.score>0)
            this.addrow["score"]=viewSubmission.score;
          this.rowData=this.rowData.concat(this.addrow);
          this.addrow={};
      }
      this.columnDefs = [
        {headerName: 'Submitted By', field: 'grademail' },
        {headerName: 'Filename', field: 'filename' },
        {headerName: 'Uploaded File', field: 'submittedass'},
        {headerName: 'Score', field: 'score' },
      ];
    });
  }
  public onRowClicked(event)
  {
    console.log("row clicked");
    sessionStorage.setItem('UploadedEmail', event.data.grademail);
    sessionStorage.setItem('UploadedFileName', event.data.filename);
    sessionStorage.setItem('UploadedFile', event.data.submittedass);
    sessionStorage.setItem('UploadedScore', event.data.score);
    this.router.navigateByUrl('/login/trainer/trainerassignments/view/evaluate');
  }

}
