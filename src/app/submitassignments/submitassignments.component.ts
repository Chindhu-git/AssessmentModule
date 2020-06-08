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
  private message :any;

  submittedassignment: SubmittedAssignment =new SubmittedAssignment("",undefined);
  constructor(private service: GradauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
    this.posted_by=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.description=sessionStorage.getItem('loggedDescription');
  }
  public uploadNow()
  {
      this.submittedassignment.email=this.email;
      let resp=this.service.uploadNow(this.submittedassignment);
      resp.subscribe((data)=>{
          this.message=data;
    });
  }

}
