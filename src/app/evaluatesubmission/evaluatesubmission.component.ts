import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import {EvaluateSubmission} from './evaluatesubmission';
import {TrainerauthorisationService} from '../service/trainerauthorisation.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-evaluatesubmission',
  templateUrl: './evaluatesubmission.component.html',
  styleUrls: ['./evaluatesubmission.component.css']
})
export class EvaluatesubmissionComponent implements OnInit {

  public email: string;
  public title: string;
  public grademail: string;
  public filename: string;
  public uploadedfile: any;
  public score: any;
  public message: any;
  public isReadOnly: boolean;
  evaluateSubmission: EvaluateSubmission=new EvaluateSubmission("","",-1);
  constructor(private service: TrainerauthorisationService, private router: Router) {
  }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.grademail=sessionStorage.getItem('UploadedEmail');
    this.filename=sessionStorage.getItem('UploadedFileName');
    this.uploadedfile=sessionStorage.getItem('UploadedFile');
    this.score=sessionStorage.getItem('UploadedScore');
    this.isReadOnly=true;
  }
  public downloadNow()
  {
    var blob = new Blob([this.uploadedfile], {type: 'text/plain'});
    saveAs(blob,this.filename);
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
        this.evaluateSubmission.grademail=this.grademail;
        this.evaluateSubmission.assignment_name=this.title;
        this.evaluateSubmission.score=this.score;
        let resp=this.service.evaluateAssignments(this.evaluateSubmission);
        resp.subscribe((data)=>{
          this.message=data;
        });
      }
    }
    
  }

}
