import { Component, OnInit } from '@angular/core';
import {SubmittedAssignment} from './submittedassignment'
@Component({
  selector: 'app-submitassignments',
  templateUrl: './submitassignments.component.html',
  styleUrls: ['./submitassignments.component.css']
})
export class SubmitassignmentsComponent implements OnInit {

  public email: string;
  public posted_by:string;
  public title: string;
  public description: string;
  constructor() { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
    this.posted_by=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.description=sessionStorage.getItem('loggedDescription');
  }

}
