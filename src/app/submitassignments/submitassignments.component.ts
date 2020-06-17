import { Component, OnInit } from '@angular/core';
import {SubmittedAssignment} from './submittedassignment'
import { GradauthorisationService } from '../service/gradauthorisation.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-submitassignments',
  templateUrl: './submitassignments.component.html',
  styleUrls: ['./submitassignments.component.css']
})
export class SubmitassignmentsComponent implements OnInit {

  public email: string;
  public posted_by: string;
  public title: string;
  public description: string;
  public message :any;

  submittedassignment: SubmittedAssignment =new SubmittedAssignment("","","",undefined);
  constructor(private service: GradauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
    this.posted_by=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.description=sessionStorage.getItem('loggedDescription');
  }
  onFileSelected(event) {
    if(event.target.files.length > 0) 
     {
       this.submittedassignment.filename= event.target.files[0].name;
       console.log(event.target.files[0].mozFullPath);
     }
   }
  public uploadNow()
  {
      this.submittedassignment.email=this.email;
      this.submittedassignment.assignment_name=this.title;
      //this.submittedassignment.uploadfile=Convert.FromBase64String(this.submittedassignment.uploadfile);
      let resp=this.service.uploadNow(this.submittedassignment);
      resp.subscribe((data)=>{
        this.message=data;
        /*if(data==="Upload Successfull")
        {
          this.message=data;
        }
        else
        {
          this.message=data;
        }*/
    });
  }

}
