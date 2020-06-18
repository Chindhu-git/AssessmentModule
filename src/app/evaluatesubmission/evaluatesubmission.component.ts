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
  private isReadOnly: boolean;
  constructor() {
  }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.grademail=sessionStorage.getItem('UploadedEmail');
    this.filename=sessionStorage.getItem('UploadedFileName');
    this.uploadedfile=sessionStorage.getItem('UploadedFile');
    this.score=sessionStorage.getItem('UploadedScore');
    this.isReadOnly=true;
    (<HTMLInputElement> document.getElementById('savebtn')).disabled=true;
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
     //document.getElementById("myscore").contentEditable="true";
     (<HTMLInputElement> document.getElementById('savebtn')).disabled=false;
  }
  public saveNow()
  {
    document.getElementById('myscore').contentEditable="false";
    console.log(document.getElementById('myscore').nodeValue);
  }

}
