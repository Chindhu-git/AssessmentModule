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

  public bin2string(array){
    var result = "";
    for(var i = 0; i < array.length; ++i){
      result+= (String.fromCharCode(array[i]));
    }
    return result;
  }
  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.grademail=sessionStorage.getItem('UploadedEmail');
    this.filename=sessionStorage.getItem('UploadedFileName');
    this.uploadedfile=sessionStorage.getItem('UploadedFile');
    this.score=sessionStorage.getItem('UploadedScore');

    var blob = new Blob([this.uploadedfile], {type: 'text'});
    var reader = new FileReader();
    reader.onload = function() {
      alert(reader.result);
    }
    reader.readAsText(blob);
    //var file = new File([blob], this.filename, {type: 'application/pdf', lastModified: Date.now()});  
    saveAs(blob,this.filename);

  }

}
