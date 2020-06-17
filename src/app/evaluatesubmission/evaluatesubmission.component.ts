import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';


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
  constructor() { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.grademail=sessionStorage.getItem('UploadedEmail');
    this.filename=sessionStorage.getItem('UploadedFileName');
    this.uploadedfile=sessionStorage.getItem('UploadedFile');
    this.score=sessionStorage.getItem('UploadedScore');

    const file = new Blob([this.uploadedfile], {type: 'application/pdf'});
    saveAs(file,this.filename);

  }

}
